<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('/tareas', 'TareasController', ['parameters'=> ['{usuario?}' => '{test?}']]);
Route::delete('/tareas', 'TareasController@destroy');

Route::resource('/noticias', 'NoticiasController',['parameters'=> ['id?}' => '{id?}']]);
Route::delete('/noticias', 'NoticiasController@destroy');

Route::resource('/usuarios', 'UserController',['parameters'=> ['id?}' => '{id?}']]);
Route::delete('/usuarios', 'UserController@destroy');

Route::resource('/grupos', 'GruposController',['parameters'=> ['id?}' => '{id?}']]);
Route::delete('/grupos', 'GruposController@destroy');

Route::resource('/asistencias', 'AsistenciaController',['parameters'=> ['id?}' => '{id?}']]);
Route::delete('/asistencias', 'AsistenciaController@destroy');

Route::resource('/calendario', 'CalendarioController', ['parameters'=> ['id?}' => '{id?}']]);
Route::delete('/calendario', 'CalendarioController@destroy');
