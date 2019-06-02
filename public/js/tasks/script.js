Vue.component('cardtareas', {
  data: function () {

  },
  template: `<div class="col-xs-3 p-2"><div class="project project-radius project-primary">
  <div class="shape">
    <div class="shape-text">
    {{tema}}
    </div>
  </div>
  <div class="project-content">
    <h3 class="lead mt-4">
    {{titulo}}
    </h3>
    <p>
      {{descripcion.split(" ").slice(0,8).join(" ")}}...
    </p>
  </div>
  <div class="container">
    <p><i class="fa fa-unlock"></i><b> Inicio: {{inicio}}</b></p>
    <p><i class="fa fa-lock"></i><b> Final: {{final}}</b></p>
      <p>Marcado por {{marcador}}</p>
      <p>
      <input type="hidden" :value="id"/>
      `+//<button @click="test()">Test</button>
      `
      <a :href="'tasks/'+id"><button class="btn btn-primary"><i class="fa fa-edit" aria-hidden="true"></i></button></a>
      <button class="btn btn-danger" @click="borrar('api/tareas',id)"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </p>
  </div>
  </div>
  </div>`,
  props:{
    id:{type:String,required:true},
    titulo:{type:String,required:true  },
    tema:{  type:String,  required:true  },
    descripcion:{type:String,required:true},
    inicio:{type:String,required:true},
    final:{type:String, required:true},
    marcador:{type:String,required:true},
    marcado:{type:String}
  },
  methods:{
    borrar: function(url,id){
      if(id){
        axios.delete(url, {data:{id:id}})
        .then(response =>console.log(response))
        .catch(error => console.log('Error:', error))
      }
    },
    test:function(){
      vue.message.splice(1,1)
    }
  }



})

var vue = new Vue({
  el:'#app',
  data:{
    message:[],
    titulo:null,
    marcador:null,
    marcado:null,
    tema:null,
    descripcion:null,
    inicio:null,
    final:null
  },
  methods:{
    postear: function (url, datos){
      this.message.push({ titulo:datos.titulo,tema:datos.tema,descripcion:datos.descripcion,marcador:datos.marcador,marcado:datos.marcado, inicio:datos.inicio, final:datos.final })
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
          'Content-Type': 'application/json'
        }
      }).
      then(function(res){
        return res;
      })
      .catch(error => console.error('Error:', error))
      .then(function(response){
          console.log('Success:', response);
      })
    },
    obtenerDatos:function(url){
      fetch(url, {
            method:'GET'
      })
        .then(function(res) {
            return res.json();
        })
      .catch(error => console.log('Error:', error))
      .then(function(resultado) {
        vue.message.push(...resultado)

      });
    }

  }

})
vue.obtenerDatos('api/tareas')
