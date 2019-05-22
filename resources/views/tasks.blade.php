@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <div class="row">
      @include('layouts.sidebar')
        <div class="col-md-10">
          <h1 class="display-4 text-center">Tareas pendientes</h1>
      @include('layouts.modals.formTasks')


                  <div class="row">
                    <div v-for="dat in message">
                      <cardtareas v-bind:titulo="dat.titulo"
                      v-bind:tema="dat.tema"
                       v-bind:descripcion="dat.descripcion"
                       v-bind:inicio="dat.inicio"
                       v-bind:final="dat.final"
                      v-bind:marcador="dat.marcador"

                       ></cardtareas>
                    </div>
                  </div><!--/row-->
        </div>
</div>
<script src="js/script.js" type="module"></script>
@endsection
