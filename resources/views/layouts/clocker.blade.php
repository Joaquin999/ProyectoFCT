<li class="dropdown" id="clock">
                     <a class="dropdown-toggle boton" data-toggle="dropdown"> Estado: @{{estado}}<b class="caret"></b></a>
                     <ul class="dropdown-menu" style="padding: 15px;min-width: 250px;">
                        <li>
                           <div class="row">
                              <div class="col-md-12">
                                 <button class="btn btn-block btn-info" id="clockIn" @click="fichar({{Auth::user()->id}}, informe)" v-if="estado == 'Ausente'">Clock in</button>
                                 <button class="btn btn-block btn-info" id="clockIn"  v-else disabled>Clock in</button>
                                 <button class="btn btn-block btn-danger" id="clockOut" v-if="estado=='Ausente'" disabled>Clock Out</button>
                                 <button class="btn btn-block btn-danger" id="clockOut" @click="salir(informe)" v-else>Clock Outt</button>


                              </div>
                           </div>
                        </li>
                        <li class="divider"><br/></li>
                        <li>
                          <textarea class="form-control" v-model="informe"></textarea>
                           <button class="btn btn-block">@{{hora}}</button>
                        </li>
                     </ul>
                  </li>
