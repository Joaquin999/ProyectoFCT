@extends('layouts.altapp')

@section('content')



        <div class="row">
          <div class="jumbotron mx-auto">
            <h1 v-if="noticia" class="display-7 text-center">Editar Tarea con ID = @{{ noticia.id}}</h1>

            <edit v-if="noticia"
              v-bind:titulo="noticia.titulo"

              v-bind:id="noticia.id"
              v-bind:ambito="noticia.ambito"
              v-bind:emisor="noticia.emisor"
              v-bind:fecha="noticia.fecha"
              v-bind:descripcion="noticia.descripcion"

             ></edit>

           </div>
        </div><!--/row-->
        <script src="/js/news/edit.js" type="module"></script>

@endsection
