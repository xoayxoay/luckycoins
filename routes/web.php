<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('socket', 'SocketController@index');
Route::post('sendmessage', 'SocketController@sendMessage');
Route::get('writemessage', 'SocireController@writemessage');

Route::get('dire', 'GameController@getDire'); // domain/dire
Route::get('ball', 'GameController@getBall');

