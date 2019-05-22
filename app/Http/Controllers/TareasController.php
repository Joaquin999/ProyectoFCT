<?php

namespace App\Http\Controllers;

use App\Tareas;
use App\User;
use Illuminate\Http\Request;

class TareasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($user = false)
    {
        //
        if($user){
          $usuario = User::with('tareas')->find($user);
          return $usuario['tareas'];
        }else{
          return Tareas::all();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $tarea = new Tareas();

        $tarea->marcado = $request->marcado;
        $tarea->descripcion = $request->descripcion;
        $tarea->titulo = $request->titulo;
        $tarea->tema = $request->tema;
        $tarea->marcador = $request->marcador;
        $tarea->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tareas  $tareas
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return Tareas::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tareas  $tareas
     * @return \Illuminate\Http\Response
     */
    public function edit(Tareas $tareas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tareas  $tareas
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tareas $tareas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tareas  $tareas
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tareas $tareas)
    {
        //
    }
}
