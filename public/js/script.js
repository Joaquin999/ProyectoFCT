let r;
  fetch('api/tareas')
    .then(function(response) {
    return response.json();
    })
  .then(function(resultado) {
      r =(resultado);
      todo();
  });


function todo(){
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
        {{descripcion.split(" ").slice(0,10).join(" ")}}...
      </p>
    </div>
    <div class="container">
      <p><i class="fa fa-unlock"></i><b> Inicio: {{inicio}}</b></p>
      <p><i class="fa fa-lock"></i><b> Final: {{final}}</b></p>
        <p>Marcado por {{marcador}}</p>
        <p>
        <button class="btn btn-primary"><i class="fa fa-edit" aria-hidden="true"></i></button>
        <button class="btn btn-danger" v-on:click="borrar('api/tareas',id)"><i class="fa fa-trash" aria-hidden="true"></i></button>
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
        fetch(url, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id:id})
            })
            .then(res => console.log(res.text()))
            .then(res => console.log(res.text()))
      }
    }
  })



  var vue = new Vue({
    el:'#app',
    data:{
      message:r,
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
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(datos),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res)
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
      }
    }

  })

  
}
