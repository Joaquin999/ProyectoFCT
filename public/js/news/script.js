Vue.component('modalshow', {
  data: function () {
    return{
    }

  },
  template: `
<div class="modal fade" id="NewsModalShow" tabindex="-1" role="dialog" aria-labelledby="NewsModalShowCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="NewsModalShowLongTitle">{{objeto.titulo}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i class="fas fa-times"></i></span>
        </button>
      </div>



      <div class="modal-body">
          <img src="{{objeto.imagen}}"/>
          <p>{{objeto.descripcion}}</p>
          <div class="news-cats text-center">
              <ul class="list-unstyled list-inline mb-1">
                  <li class="list-inline-item">
                          <i class="fa fa-exclamation-circle"></i>
                          <small>Ámbito: {{objeto.ambito}}</small>
                  </li>
                   <li class="list-inline-item">
                          <i class="fas fa-share"></i>
                          <small>Emitida por: {{objeto.emisor}}</small>
                  </li>
                   <li class="list-inline-item">
                          <i class="fas fa-calendar-alt"></i>
                          <small>{{objeto.fecha}}</small>
                  </li>
              </ul>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close">Cerrar</button>
      </div>
    </div>
  </div>
</div>`,
props:{
  objeto:{type:Object}

},
methods:{
  borrar: function(url,id){
    if(id){
      axios.delete(url, {data:{id:id}})
      .then(function(response){
          for(let i = 0;i<vue.noticias.length;i++){
            if(vue.noticias[i].id == id){
              vue.noticias.splice(i,1)
            }
          }
          console.log(response)
      })
      .catch(error => console.log('Error:', error))
    }
  },
}

})


Vue.component('noticia', {
  data: function () {
    return{
      //usuario: vue.nombreReal(this.id)
    }

  },
  template: ` <div class="row mb-2">
		        <div class="col-md-12">
		            <div class="card rounded">
		                <div class="card-body">
		                    <div class="row">
		                        <div class="col-md-4">
		                            <img src="http://www.3forty.media/cannix/wp-content/uploads/2018/03/clem-onojeghuo-127166-unsplash-1-500x333.jpg"
                                 height="95%" width="100%">
		                        </div>
		                        <div class="col-md-8">
		                            <div class="news-title">
		                                <h5>{{titulo}}</h5>
		                            </div>
		                            <div class="news-cats">
		                                <ul class="list-unstyled list-inline mb-1">
		                                    <li class="list-inline-item">
		                                            <i class="fa fa-exclamation-circle"></i>
    		                                        <small>Ámbito: {{ambito}}</small>
		                                    </li>
		                                     <li class="list-inline-item">
		                                            <i class="fas fa-share"></i>
    		                                        <small>Emitida por: {{emisor}}</small>
		                                    </li>
		                                     <li class="list-inline-item">
		                                            <i class="fas fa-calendar-alt"></i>
    		                                        <small>{{fecha}}</small>
		                                    </li>
		                                </ul>
		                            </div>
		                            <div class="news-content">
		                                <p>{{descripcion.split(" ").slice(0,7).join(" ")}}...</p>
		                            </div>
		                            <div class="news-buttons">
		                                <button type="button" data-toggle="modal" data-target="#NewsModalShow"
                                    @click="mostrar({id,titulo,emisor,descripcion,fecha,imagen,ambito})"
                                     class="btn btn-outline-info btn-sm">Leer más</button>
                                    <a :href="'../noticias/'+id "><button type="button" class="btn btn-outline-primary btn-sm">Editar</button></a>
                                    <button type="button" @click="borrar('api/noticias',id)" class="btn btn-outline-danger btn-sm">Eliminar</button>
		                            </div>
		                        </div><!--- End col-md-8 --->
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>`,
  props:{
    id:{type:String,required:true},
    titulo:{type:String, required:true},
    ambito:{type:String, required:true},
    emisor:{type:String, required:true},
    descripcion:{type:String, required:true},
    fecha:{type:String, required:true},
    imagen:''

  },
  methods:{
    borrar: function(url,id){
      if(id){
        axios.delete(url, {data:{id:id}})
        .then(function(response){
            for(let i = 0;i<vue.noticias.length;i++){
              if(vue.noticias[i].id == id){
                vue.noticias.splice(i,1)
              }
            }
            console.log(response)
        })
        .catch(error => console.log('Error:', error))
      }

    },
    mostrar:function(objeto){
      objeto.imagen  ? objeto.imagen = objeto.imagen : objeto.imagen = null
      vue.vista.length ?  vue.vista.splice(0,1,objeto)  :  vue.vista.push(objeto)
    }
  }

})

var vue = new Vue({
  el:'#app',
  data:{
    noticias:[],
    titulo:null,
    ambito:null,
    emisor:null,
    fecha:null,
    descripcion:null,
    imagen:'',
    vista:[]
  },
  methods:{
    postear: function (url, datos){
      this.noticias.push(datos)
      axios.post(url, datos)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    obtenerDatos:function(url){
      axios
     .get(url)
     .then(response => vue.noticias.push(...response.data))
     .catch(error => console.log('Error:', error))
    }

  }

})
vue.obtenerDatos('api/noticias')
