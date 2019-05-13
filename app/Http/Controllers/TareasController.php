<?php

namespace App\Http\Controllers;

use App\Tareas;
use Illuminate\Http\Request;

class TareasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Tareas::all();
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
        $tarea = new Tareas;
        
        $tarea->objetivo = $request->objetivo;
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
