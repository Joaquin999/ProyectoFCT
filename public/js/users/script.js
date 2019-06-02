Vue.component('panel', {
  data: function () {
     return {
       setGroup:vue.setGroup,
       borrar:vue.eliminar,
       setEditando:vue.setEditando
     }
  },
  template: `<div class="panel panel-default">
      <div class="panel-heading" role="tab" :id="'headingOne'+grupo.nombre">
          <h4 class="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" :href="'#collapse'+grupo.id" aria-expanded="true" aria-controls="'collapse'+grupo.id">
                  {{grupo.nombre}}
              </a>
          </h4>
      </div>
      <div :id="'collapse'+grupo.id" class="panel-collapse collapse in" role="tabpanel" :aria-labelledby="'heading'+grupo.id">
          <div class="panel-body">
                         <ul class="list-group  contenido">
                          <div v-if="length in lista">
                             <li class="list-group-item" v-for="user in lista" >
                               <i class="fa fa-user"></i>&nbsp;&nbsp;
                                 {{user.name}}
                              &nbsp;&nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp;&nbsp;
                               <i class="fas fa-id-card-alt"></i>&nbsp;&nbsp;
                                {{user.id}}
                              &nbsp;&nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp;&nbsp;
                               <i class="fa fa-envelope"></i>&nbsp;&nbsp;
                                {{user.email}}
                              &nbsp;&nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp;&nbsp;
                               <i class="fas fa-calendar-alt"></i>
                                {{user.calendario}}
                                 <div class="pull-right">
                                     <i class="fa fa-edit" @click="setEditando(user)" data-toggle="modal" data-target="#EditUserModal"></i>&nbsp;&nbsp;
                                     <i style="color:#3485ef" @click="borrar(user.id)" class="fa fa-trash"></i>
                                 </div>
                             </li>
                             </div>
                             <div v-else>
                             <li class="list-group-item">
                             No hay usuarios en este grupo
                             </li>
                             </div>
                             <button class="btn" @click="setGroup(grupo.id)" data-toggle="modal" data-target="#UserModal">
                            <li class="list-group-item" style="background-color:#3485ef">
                                <div class="text-center">

                                    <i style="color:white" class="fas fa-plus"></i>
                                </div>
                            </li>
                            </button>


                         </ul>
            </div>
      </div>
  </div>`,
  props:['grupo', 'usuarios', 'grupos_users'],
  methods:{
    borrar(url,id){
      if(id){
        axios.delete(url, {data:{id:id}})
        .then(response =>console.log(response))
        .catch(error => console.log('Error:', error))
      }
    }
  },
  computed:{
    lista(){
      let tmp = []
      for(let user of this.usuarios){
        for(let grupo of this.grupos_users){
          if(grupo.grupo == this.grupo.id & user.id == grupo.usuario){
            tmp.push(user)
          }
        }
      }
      return tmp
    }

  }



})

Vue.component('solos',{
  data: function () {
     return {
       setGroup:vue.setGroup,
       borrar:vue.eliminar,
       setEditando:vue.setEditando
     }
  },
  template:`<div class="panel panel-default">
      <div class="panel-heading" role="tab" id="solos">
          <h4 class="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSolos" aria-expanded="true" aria-controls="collapseSolos">
                  Usuarios sin Grupos
              </a>
          </h4>
      </div>
      <div id="collapseSolos" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingSolos">
          <div class="panel-body">
                         <ul class="list-group  contenido">
                             <li class="list-group-item" v-for="user in datos" >
                               <i class="fa fa-user"></i>&nbsp;&nbsp;
                                 {{user.name}}
                              &nbsp;&nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp;&nbsp;
                               <i class="fas fa-id-card-alt"></i>&nbsp;&nbsp;
                                {{user.id}}
                              &nbsp;&nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp;&nbsp;
                               <i class="fa fa-envelope"></i>&nbsp;&nbsp;
                                {{user.email}}
                              &nbsp;&nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp;&nbsp;
                               <i class="fas fa-calendar-alt"></i>
                                {{user.calendario}}
                                 <div class="pull-right">
                                     <i class="fa fa-edit" @click="setEditando(user)" data-toggle="modal" data-target="#EditUserModal"></i>&nbsp;&nbsp;
                                     <i @click="borrar(user.id)" style="color:#3485ef" class="fa fa-trash"></i>
                                 </div>
                             </li>
                             <button class="btn" @click="setGroup(null)" data-toggle="modal" data-target="#UserModal">
                            <li class="list-group-item" style="background-color:#3485ef">
                                <div class="text-center">

                                    <i style="color:white" class="fas fa-plus"></i>
                                </div>
                            </li>
                            </button>


                         </ul>
            </div>
      </div>
  </div>`,
    props:['datos'],


})


var vue = new Vue({
  el:'#app',
  data:{
    grupos:[],
    users:[],
    grupos_users:[],
    sin_grupos:[],
    name:null,
    group:null,
    email:null,
    password:null,
    editando:null,



  },
  methods:{
    obtenerUsers:function(){
      axios.get('api/usuarios')
        .then(function(resultado) {
          if(vue.users.length){
            vue.users.splice(0,vue.users.length,...resultado.data)
          }else{
            vue.users.push(...resultado.data)
          }
        })
        .catch(error => console.log('Error:', error))
    },
    obtenerGrupos:function(){
      axios.get('api/grupos')
        .then(function(resultado) {
          if(vue.grupos.length){
            vue.grupos.splice(0,vue.grupos.length,...resultado.data)
          }else{
            vue.grupos.push(...resultado.data)
          }
        })
        .catch(error => console.log('Error:', error))
    },
    obtenerGruposUsers:function(){
      axios.get('api/grupos-usuario')
        .then(function(resultado) {
          if(vue.grupos_users.length){
            vue.grupos_users.splice(0,vue.grupos_users.length,...resultado.data)
          }else{
            vue.grupos_users.push(...resultado.data)
          }
        })
        .catch(error => console.log('Error:', error))
    },
    postear(objeto){
      console.log(objeto)
        axios.post('api/usuarios',objeto)
        .then(function (response) {
          console.log(response);
          vue.users.push({id:response.data,name:objeto.name, calendario:1, email:objeto.email});

          objeto.grupo != null ? vue.grupos_users.push({usuario:response.data,grupo:objeto.grupo}) : vue.obtenerSinGrupos();
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    setGroup(valor){
      return this.group = valor
    },
    setEditando(valor){
      vue.editando = valor;
    },
    obtenerSinGrupos(){
      let lista = []
      if(this.grupos.length!=0 & this.users.length!=0){

        let tmpUsers = []

        for(let value of this.grupos_users){
          tmpUsers.push(value.usuario);
        }

        for(let user of this.users){

          if(tmpUsers.indexOf(user.id)==-1){
            lista.push(user)
          }
        }
      }
      if(this.sin_grupos.length){
        this.sin_grupos.splice(0,this.sin_grupos.length,...lista)
      }else{
        this.sin_grupos.push(...lista)
      }
    },
    eliminar(id){
      if(id){
        axios.delete('api/usuarios', {data:{id:id}})
        .then(function(response){
            console.log(response)
            vue.obtenerSinGrupos();
            vue.obtenerUsers();
            vue.obtenerGrupos();
        })
        .catch(error => console.log('Error:', error))
      }
    },
    editar(objeto){
      axios.put('api/tareas/1', objeto)
      .then(function(response){
        console.log(response)
        vue.obtenerUsers()
        vue.obtenerGrupos()
        vue.obtenerSinGrupos()
      })
      .catch(error => console.log(error))
    }


  }

})
vue.obtenerUsers();
vue.obtenerGrupos();
vue.obtenerGruposUsers();
 setTimeout(function(){
    vue.obtenerSinGrupos();
  }, 5000);
