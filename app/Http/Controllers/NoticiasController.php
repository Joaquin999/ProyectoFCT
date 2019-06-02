<?php

namespace App\Http\Controllers;

use App\Noticias;
use Illuminate\Http\Request;

class NoticiasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Noticias::all();
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
        $noticias = new Noticias();
        $noticias->titulo = $request->titulo;
        $noticias->descripcion = $request->descripcion;
        $noticias->fecha = $request->fecha;
        $noticias->emisor = $request->emisor;
        $noticias->ambito = $request->ambito;
        $noticias->imagen = $request->imagen ?? null;
        $noticias->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Noticias  $noticias
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return Noticias::findOrFail($id);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Noticias  $noticias
     * @return \Illuminate\Http\Response
     */
    public function edit(Noticias $noticias)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Noticias  $noticias
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        //
        $noticia = Noticias::find($id);
        $noticia->fecha = $request->fecha;
        $noticia->descripcion = $request->descripcion;
        $noticia->titulo = $request->titulo;
        $noticia->emisor = $request->emisor;
        $noticia->imagen = $request->imagen;
        $noticia->ambito = $request->ambito ?? null;
        $noticia->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Noticias  $noticias
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //

        try{
          $noticia = Noticias::find($request->id)->delete();
         }catch(Exception $e){
           return $request->id;
         }
    }
}
