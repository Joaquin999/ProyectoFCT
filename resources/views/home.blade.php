@extends('layouts.app')

@section('content')
<h1 class="display-7 text-center">Noticias</h1>
@include('layouts.modals.formNews')

        <div class="row">
            <noticia v-for="noticia in noticias"
              v-bind:titulo="noticia.titulo"
              v-bind:id="noticia.id"
              v-bind:ambito="noticia.ambito"
              v-bind:emisor="noticia.emisor"
              v-bind:fecha="noticia.fecha"
              v-bind:descripcion="noticia.descripcion"

             ></noticia>



        </div><!--/row-->
        <modalshow v-for="objet in vista" v-bind:objeto="objet"></modalshow>
        <script src="js/news/script.js" type="module"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

@endsection
