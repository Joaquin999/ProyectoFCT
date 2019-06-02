Vue.component('edit', {
  data: function () {

  },
  template: `
            <div class="form-group">
                <input type="hidden" v-model="id" value=""/>
                <div class="form-group">Fecha<input type="text" class="form-control" v-model="fecha"></div>
                <div class="form-group">Título<input type="text" class="form-control" v-model="titulo"/></div>
                <div class="form-group">Descripción<textarea class="form-control" rows="5" v-model="descripcion"></textarea></div>
                <div class="form-group">Ámbito<input type="text" class="form-control" v-model="ambito"></div>
                <div class="form-group">Emisor<input type="text" class="form-control" v-model="emisor"></div>
                <button type="button" class="btn btn-primary"
v-on:click="update({ id:id,titulo:titulo,descripcion:descripcion,emisor:emisor,fecha:fecha, ambito:ambito })"
                >Actualizar</button>

            </div>
`,
  props:{
    id:{type:String,required:true},
    titulo:{type:String, required:true},
    ambito:{type:String, required:true},
    emisor:{type:String, required:true},
    descripcion:{type:String, required:true},
    fecha:{type:String, required:true}
  },
  methods:{
    update: function(obj){
          fetch('http://proyecto.proaso/api/noticias/'+obj.id, {
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
                path = path.replace('noticias','home')
                location.href = path;
              })
      }
  }

})

var vue = new Vue({
  el:'#app',
  data:{
    noticia:null,
    titulo:null,
    descripcion:null,
    ambito:null,
    emisor:null,
    id:null,
    fecha:null,
    imagen:null,
  },
  methods:{
    obtenerDatos:function(url){
      fetch(url, {
            method:'GET'
      })
        .then(function(res) {
            return res.json();
        })
      .catch(error => console.log('Error:', error))
      .then(function(resultado) {
        console.log(resultado)
        vue.noticia = resultado
      });

    }
  }

})
let url = window.location.pathname.split("/")
vue.obtenerDatos('http://proyecto.proaso/api/noticias/'+ url[url.length-1])
