@extends('layouts.app')

@section('content')
  <h1 class="display-7 text-center">Lista de Grupos</h1>

  <div class="row">
    <button type="button" class="btn btn-info btn-lg mt-2 mx-auto" style="color:white" data-toggle="modal" data-target="#GroupModal">
    Añadir un Grupo &nbsp;
    <i class="fa fa-plus" style="color:white"></i>
  </button>
  </div>
  <br/>

  <div class="modal fade" id="GroupModal" tabindex="-1" role="dialog" aria-labelledby="GroupModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="GroupModalLongTitle">Añadir Evento</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
        </div>
        <div class="modal-body">

            <div class="form-group">
                <div class="form-group">Nombre<input type="text" class="form-control" v-model="nuevo.nombre"></div>
                <div class="form-group">Ámbito
                  <select class="form-control" v-model="nuevo.ambito">
                    <option value="privado">Privado</option>
                    <option value="normal" default>Normal</option>
                    <option value="publico">Público</option>
                  </select>
                </div>

                <div class="form-group">Calendario<input type="text" class="form-control" v-model="nuevo.calendario"></div>

                </div>

            </div>

        <div class="modal-footer">
          <button class="btn btn-info"
          @click="postear(nuevo)">
          Añadir Grupo</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="EditGroupModal" tabindex="-1" role="dialog" aria-labelledby="EditGroupModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="EditGroupModalLongTitle">Actualizar Grupos</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
        </div>
        <div class="modal-body">

            <div class="form-group">
                <div class="form-group">Nombre<input type="text" class="form-control" v-model="seleccionado.nombre"></div>
                <div class="form-group">Ámbito
                  <select class="form-control" v-model="seleccionado.ambito">
                    <option value="privado">Privado</option>
                    <option value="normal" default>Normal</option>
                    <option value="publico">Público</option>
                  </select>
                </div>

                <div class="form-group">Calendario<input type="text" class="form-control" v-model="seleccionado.calendario"></div>

                </div>

            </div>

        <div class="modal-footer">
          <button class="btn btn-info"
          @click="editar(seleccionado)">
          Actualizar Grupo</button>
        </div>
      </div>
    </div>
  </div>

  <div class="jumbotron">

        <div class="row">
            <div class="container">
              <grupos v-for="grupo in datos"
                v-bind:grupo="grupo"
              ></grupos>
            </div>

          </div>

        </div><!--/row-->

        <script src="js/groups/script.js" type="module"></script>

@endsection
