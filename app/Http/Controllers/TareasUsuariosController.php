<?php

namespace App\Http\Controllers;

use App\TareasUsuarios;
use App\User;
use App\Tareas;
use Illuminate\Http\Request;

class TareasUsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($user)
    {
        //
        $usuario = User::with('tareas')->find($user);
        return $usuario;
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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TareasUsuarios  $tareasUsuarios
     * @return \Illuminate\Http\Response
     */
    public function show(TareasUsuarios $tareasUsuarios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TareasUsuarios  $tareasUsuarios
     * @return \Illuminate\Http\Response
     */
    public function edit(TareasUsuarios $tareasUsuarios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TareasUsuarios  $tareasUsuarios
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TareasUsuarios $tareasUsuarios)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TareasUsuarios  $tareasUsuarios
     * @return \Illuminate\Http\Response
     */
    public function destroy(TareasUsuarios $tareasUsuarios)
    {
        //
    }
}
