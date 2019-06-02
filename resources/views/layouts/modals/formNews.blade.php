<p>
  <button type="button" class="btn btn-info btn-lg mt-2" style="color:white" data-toggle="modal" data-target="#NewsModal">
  Agregar Noticia  &nbsp;
  <i class="fa fa-plus" style="color:white"></i>
</button>
</p>

<div class="modal fade" id="NewsModal" tabindex="-1" role="dialog" aria-labelledby="NewsModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="NewsModalLongTitle">Añadir Noticia</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i class="fas fa-times"></i></span>
        </button>
      </div>
      <div class="modal-body">

          <div class="form-group">
              <div class="form-group">Título<input type="text" class="form-control" v-model="titulo"></div>
              <div class="form-group">Descripción<input type="text" class="form-control" v-model="descripcion"></div>
              <div class="form-group">Ámbito
                <select v-model="ambito" class="form-control">
                  <option value="publico">Publico</option>
                  <option value="normal">Normal</option>
                  <option value="privado">Privado</option>
                </select>
              </div>
              <div class="form-group">Emisor<input type="text" class="form-control" v-model="emisor"></div>
              <div class="form-group">Fecha<input type="text" class="form-control" v-model="fecha"></div>
              <div class="form-group">Imagen<input type="text" class="form-control" v-model="imagen"/></div>
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary"
        v-on:click="postear('api/noticias',
        { titulo:titulo,descripcion:descripcion,emisor:emisor,fecha:fecha, ambito:ambito, imagen:imagen })">
        Agregar</button>
      </div>
    </div>
  </div>
</div>
