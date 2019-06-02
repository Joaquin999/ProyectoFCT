Vue.component('formulario', {
  data: function () {

  },
  template: `
            <div class="form-group">
                <input type="hidden" v-model="id" value=""/>
                <div class="form-group">Marcado<input type="text" class="form-control" v-model="marcado"></div>
                <div class="form-group">Descripción<input type="text" class="form-control" v-model="descripcion"></div>
                <div class="form-group">Título<input type="text" class="form-control" v-model="titulo"/></div>
                <div class="form-group">Tema<input type="text" class="form-control" v-model="tema"></div>
                <div class="form-group">Marcador<input type="text" class="form-control" v-model="marcador"></div>
                <div class="form-group">Inicio<input type="text" class="form-control" v-model="inicio"></div>
                <div class="form-group">Final<input type="text" class="form-control"  v-model="final"></div>
                <button type="button" class="btn btn-primary"
v-on:click="update({ id:id,titulo:titulo,tema:tema,descripcion:descripcion,marcador:marcador,marcado:marcado, inicio:inicio, final:final })"
                >Actualizar</button>

            </div>
`,
  props:{
    id:{type:String,required:true},
    titulo:{type:String,required:true },
    tema:{  type:String,  required:true },
    descripcion:{type:String,required:true},
    inicio:{type:String },
    final:{type:String },
    marcador:{type:String,required:true},
    marcado:{type:String, required:true}
  },
  methods:{
    update: function(obj){
          fetch('http://proyecto.proaso/api/tareas/'+obj.id, {
              method: 'PUT',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(obj)
              })
              .then(res => res)
              .then(function(res){
                console.log(res)
                let path = res.url
                path = path.replace('/api','')
                path = path.replace('/'+obj.id,'')
                path = path.replace('tareas','tasks')
                location.href = path;
              })
      }
  }

})

var vue = new Vue({
  el:'#app',
  data:{
    task:null
  },
  methods:{
    obtenerDato:function(url, id){
      fetch(url, {
            method:'GET'
      })
        .then(function(res) {
            return res.json();
        })
      .catch(error => console.log('Error:', error))
      .then(function(resultado) {
        vue.task = (resultado.find(function(element) {
             return element.id == id;
        }));
      });

    }
  }

})
let url = window.location.pathname.split("/")
vue.obtenerDato('http://proyecto.proaso/api/tareas', url[url.length-1])
