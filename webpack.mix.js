const mix = require('laravel-mix');
require('laravel-mix-polyfill');
require('laravel-mix-versionhash');
const TargetsPlugin = require('targets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const webpackConfig = {
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['js/build/*', 'css/build/*', '!static-files*'],
    }),
  ],
};

if (mix.inProduction()) {
  webpackConfig.plugins = [
    ...webpackConfig.plugins,
    new TargetsPlugin({
      browsers: ['last 2 versions', 'chrome >= 41', 'IE 11'],
    }),
  ];
}

mix.webpackConfig(webpackConfig)
  .react('resources/js/app.js', 'public/js/build')
  .js('resources/js/script.js', 'public/js/build')
  .options({
    processCssUrls: false,
  })
  .sass('resources/sass/style.scss', 'public/css/build')
  .sass('resources/sass/app.scss', 'public/css/build');

if (mix.inProduction()) {
  mix.polyfill({
    enabled: true,
    useBuiltIns: 'usage',
    targets: { 'ie': 11 },
    corejs: 3,
  });
  mix.versionHash();
}