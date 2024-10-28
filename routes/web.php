<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'web'], function () {
    Route::get('refresh-csrf', function(){
        return csrf_token();
    });
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/{any?}', 'SinglePageAppController@index')
        ->where('any', '^(?!admin|js|css).*$')->name('spa');
});
