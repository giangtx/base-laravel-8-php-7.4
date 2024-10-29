<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    <!-- Styles -->
    <link href="{{ mix('css/build/app.css') }}" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <div id="app"></div>
    <!-- Scripts -->

    <script src="{{ mix('js/build/app.js') }}" defer></script>
  </body>
</html>