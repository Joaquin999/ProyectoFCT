Vue.component('grupos', {
  data: function () {
    return{
      colores:{publico:'info', privado:'danger', normal:'success'},
      borrar:vue.borrar
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
        <i class="fas fa-edit"></i>
      </div>
  </div>`,
  props:{
    grupo:{type:Object}
  },
  methods:{

  }

})

var vue = new Vue({
  el:'#app',
  data:{
    datos:[],
    nuevo:{}
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
     axios.delete('api/grupos', {id:id})
     .then(function(response){
       console.log(response)
     })
     .catch(response=>console.log(response))
   }

  }

})
vue.obtenerDatos()
