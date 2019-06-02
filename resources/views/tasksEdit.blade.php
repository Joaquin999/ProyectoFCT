@extends('layouts.altapp')

@section('content')

      <div class="row">
        <div class="jumbotron mx-auto ">
          <h1 v-if="task" class="display-7 text-center">Editar Tarea con ID = @{{ task.id}}</h1>

              <formulario v-if="task"
              v-bind:id="task.id"
              v-bind:marcado ="task.marcado"
              v-bind:titulo="task.titulo"
              v-bind:tema="task.tema"
              v-bind:descripcion="task.descripcion"
              v-bind:inicio="task.inicio"
              v-bind:final="task.final"
              v-bind:marcador="task.marcador"
              ></formulario>

        </div>
      </div><!--/row-->
      <script src="../js/tasks/edit.js" type="module"></script>

@endsection
