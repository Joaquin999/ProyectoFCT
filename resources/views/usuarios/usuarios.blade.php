@extends('layouts.app')

@section('content')
<h1 class="display-7 text-center">Usuarios ordenados por grupos</h1>

        <div class="row">

                      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <panel v-for="grupo in grupos" 
                          v-bind:grupo="grupo"
                          v-bind:usuarios="users"
                          v-bind:grupos_users="grupos_users"
                        ></panel>




                      <solos v-if="sin_grupos.length!=0" v-bind:datos="sin_grupos"></solos>


                      <div class="modal fade" id="UserModal" tabindex="-1" role="dialog" aria-labelledby="UserModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="UserModalLongTitle">Añadir Usuario</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                              </button>
                            </div>
                            <div class="modal-body">

                                <div class="form-group">
                                    <div class="form-group">Nombre<input type="text" v-model="name" class="form-control"></div>
                                    <div class="form-group">Email<input type="text" v-model="email" class="form-control"></div>
                                    <div class="form-group">Contraseña<input type="password" v-model="password" class="form-control"></div>
                                    <div class="form-group">Grupo<input type="text" v-model="group" class="form-control" disabled></div>
                                </div>

                            </div>
                            <div class="modal-footer">
                              <button type="button" @click="postear({name, password, email, grupo:group})" class="btn btn-primary">Agregar</button>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div v-if="editando!=null" class="modal fade" id="EditUserModal" tabindex="-1" role="dialog" aria-labelledby="EditUserModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="EditUserModalLongTitle">Editar Usuario</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                              </button>
                            </div>
                            <div class="modal-body">

                                <div class="form-group">
                                    <div class="form-group">Nombre<input type="text" v-model="editando.name" class="form-control"></div>
                                    <div class="form-group">Email<input type="text" v-model="editando.email" class="form-control"></div>
                                </div>

                            </div>
                            <div class="modal-footer">
                              <button type="button" @click="editar({id:editando.id,name:editando.name,email:editando.email})" class="btn btn-primary">Editar</button>
                            </div>
                          </div>
                        </div>
                      </div>

        </div><!--/row-->
        <script src="../js/users/script.js" type="module"></script>

@endsection
