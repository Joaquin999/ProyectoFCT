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
  if(Auth::check()){
    return view('home');
  }else{
    return view('auth.login');
  }
});

Auth::routes();

Route::get('/home', function() {
    return view('home');
})->middleware('auth');

route::get('/noticias/{id}', function(){
  return view('newsEdit');
})->middleware('auth');
///////////////////////////////
////////Rutas de Tareas///////
////////////////////////////

Route::get('/tasks', function() {
    return view('tasks');
})->middleware('auth');

Route::get('/tasks/{id}', function(){
  return view('tasksEdit');
})->middleware('auth');

///////////////////////////////
////////Rutas de USuarios/////
////////////////////////////

Route::get('/users', function() {
    return view('usuarios.usuarios');
})->middleware('auth');

Route::get('/calendar', function(){
    return view('calendar');
})->middleware('auth');
