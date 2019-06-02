@extends('layouts.app')

@section('content')
<h1 class="display-7 text-center">Tareas pendientes</h1>
@include('layouts.modals.formTasks')


        <div class="row">
            <cardtareas v-for="dat in message" v-bind:key="dat.id"
            v-bind:titulo="dat.titulo"
            v-bind:tema="dat.tema"
             v-bind:descripcion="dat.descripcion"
             v-bind:inicio="dat.inicio"
             v-bind:final="dat.final"
            v-bind:marcador="dat.marcador"
            v-bind:id="dat.id"
             ></cardtareas>


        </div><!--/row-->
        <script src="js/tasks/script.js" type="module"></script>

@endsection
