Vue.component('grupos', {
  data: function () {
    return{
      colores:{publico:'info', privado:'danger', normal:'success'},
      borrar:vue.borrar,
      setSeleccionado:vue.setSeleccionado
      }
  },
  template: `
  <div :class="'notice notice-'+colores[grupo.ambito]">
    <strong>{{grupo.nombre}}</strong>
    &nbsp;&nbsp;|&nbsp;
     <i class="fa fa-id-card"></i> : {{grupo.id}}
    &nbsp;&nbsp;|&nbsp;&nbsp;
      <i class="fa fa-info-circle"></i> : {{grupo.ambito}}
    &nbsp;&nbsp;|&nbsp;&nbsp;
      <i class="fa fa-calendar"></i> : {{grupo.calendario}}
      <div class="float-right">
        <i class="fas fa-trash" @click="borrar(grupo.id)"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fas fa-edit" @click="setSeleccionado(grupo)" data-toggle="modal" data-target="#EditGroupModal"></i>
      </div>
  </div>`,
  props:{
    grupo:{type:Object}
  }

})

var vue = new Vue({
  el:'#app',
  data:{
    datos:[],
    nuevo:{},
    seleccionado:{}
  },
  methods:{
    postear: function (objeto){
      console.log(objeto)
      axios.post('api/grupos', objeto)
      .then(function (response) {
        console.log(response.data);
        vue.obtenerDatos()
      })
      .catch(response=>console.log(response))
    },
    obtenerDatos(){
      axios.get('api/grupos')
     .then(function(response){
        vue.datos = (response.data)
     })
     .catch(error => console.log('Error:', error))
   },
   borrar(id){
     axios.delete('api/grupos', {data:{id}})
     .then(function(response){
       console.log(response)
       vue.obtenerDatos()
     })
     .catch(response=>console.log(response))
   },
   editar(objeto){
     axios.put('api/grupos/1', objeto)
     .then(function(response){
       vue.obtenerDatos()
     })
     .catch(response=>console.log(response))
   },
   setSeleccionado(objeto){
     vue.seleccionado = objeto
   }

  }

})
vue.obtenerDatos()
