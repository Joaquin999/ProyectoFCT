@extends('layouts.app')

@section('content')
<h1 class="display-7 text-center">Calendario de Eventos</h1>
<div class="row">
  <button type="button" class="btn btn-info btn-lg mt-2 mx-auto" style="color:white" data-toggle="modal" data-target="#EventModal">
  Añadir un Evento  &nbsp;
  <i class="fa fa-plus" style="color:white"></i>
</button>
</div>

<div class="modal fade" id="EventModal" tabindex="-1" role="dialog" aria-labelledby="EventModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="EventModalLongTitle">Añadir Evento</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i class="fas fa-times"></i></span>
        </button>
      </div>
      <div class="modal-body">

          <div class="form-group">
              <div class="form-group" v-for="campo in campos">@{{campo}}<input type="text" class="form-control" v-model="valores[campo]"></div>

              <hr/>
              <div class="form-group"><input type="text" class="form-control" v-model="nuevo"><br/>
              <button class="btn btn-success" @click="campos.push(nuevo)">Añadir Campo</button>
              </div>

          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary"
        v-on:click="postear(valores)">Agregar</button>
      </div>
    </div>
  </div>
</div>

        <div class="row">

        <calendario v-if="datos.length!=0" v-bind:eventos="datos.eventos"></calendario>


        <div v-if="seleccionado">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">@{{seleccionado.nombre}}</h5>
                <ul class="list-group">
                <li class="list-group-item" v-if="name!='nombre'" v-for="(value, name, index) in seleccionado">@{{name}} : @{{value}}</li>
                </ul>
                <br/>
                <a class="btn btn-primary" @click="setSeleccionado(null)">Cerrar</a>
            </div>
          </div>
        </div>



        </div><!--/row-->
        <script src="js/calendar/script.js" type="module"></script>

@endsection
