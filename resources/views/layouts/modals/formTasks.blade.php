<p>
  <button type="button" class="btn btn-info btn-lg mt-2" style="color:white" data-toggle="modal" data-target="#TaskModal">
  Agregar nueva Tarea  &nbsp;
  <i class="fa fa-plus" style="color:white"></i>
</button>
<select v-model="categoria">
  <option value="false" default>Ninguno</option>
<option v-for="cat in message" :value="cat.tema">@{{cat.tema}}</option>
</select>
</p>

<div class="modal fade" id="TaskModal" tabindex="-1" role="dialog" aria-labelledby="TaskModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="TaskModalLongTitle">Añadir Tarea</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i class="fas fa-times"></i></span>
        </button>
      </div>
      <div class="modal-body">

          <div class="form-group">
              <div class="form-group">Marcado<input type="text" class="form-control" v-model="marcado"></div>
              <div class="form-group">Descripción<input type="text" class="form-control" v-model="descripcion"></div>
              <div class="form-group">Título<input type="text" class="form-control" v-model="titulo"/></div>
              <div class="form-group">Tema<input type="text" class="form-control" v-model="tema"></div>
              <div class="form-group">Marcador<input type="text" class="form-control" v-model="marcador"></div>
              <div class="form-group">Inicio (no obligatorio)<input type="text" class="form-control" v-model="inicio"></div>
              <div class="form-group">Final (no obligatorio)<input type="text" class="form-control"  v-model="final"></div>
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary"
        v-on:click="postear('api/tareas',{ titulo:titulo,tema:tema,descripcion:descripcion,marcador:marcador,marcado:marcado, inicio:inicio, final:final })">Agregar</button>
      </div>
    </div>
  </div>
</div>
