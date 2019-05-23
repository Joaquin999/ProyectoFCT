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
        {{descripcion.split(" ").slice(0,8).join(" ")}}...
      </p>
    </div>
    <div class="container">
      <p><i class="fa fa-unlock"></i><b> Inicio: {{inicio}}</b></p>
      <p><i class="fa fa-lock"></i><b> Final: {{final}}</b></p>
        <p>Marcado por {{marcador}}</p>
        <p>
        <input type="hidden" :value="id"/>
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
        const index = vue.message.find(function(element) {
              return element.id == id;
        });

        let numero = vue.message.indexOf(index)
        vue.message.splice(numero, 1,
          {id:0,tema:'',titulo:'',descripcion:'Refresa la página para ver los cambios',inicio:'',final:'',marcador:'nadie'})
        if(id){
              fetch(url, {
                  method: 'DELETE',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({id:id})
                  })
                  .then(res => console.log(res.text()))
                  .then(res => console.log(res.text()))
            }
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
      final:null,
      modals:[],
      titulo2:null,
      marcador2:null,
      marcado2:null,
      tema2:null,
      descripcion2:null,
      inicio2:null,
      final2:null,
      categoria:false
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
      }
    }

  })


}
