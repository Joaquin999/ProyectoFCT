@extends('layouts.app')

@section('content')
<h1 class="display-4 text-center">Tareas pendientes</h1>
@include('layouts.modals.formTasks')


        <div class="row">
          <div v-for="dat in message">
            <cardtareas v-if="categoria == dat.tema || categoria == false"
            v-bind:titulo="dat.titulo"
            v-bind:tema="dat.tema"
             v-bind:descripcion="dat.descripcion"
             v-bind:inicio="dat.inicio"
             v-bind:final="dat.final"
            v-bind:marcador="dat.marcador"
            v-bind:id="dat.id"
             ></cardtareas>
          </div>


        </div><!--/row-->
        <script src="js/script.js" type="module"></script>

@endsection
