let r;
  fetch('api/tareas')
    .then(function(response) {
    return response.json();
    })
  .then(function(resultado) {
      r =(resultado);
  });

setTimeout(function(){
Vue.component('cardtareas', {
  data: function () {

    return {
      count: 0
    }
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
      {{descripcion}} adsjadkaksljdkajd ak djkas djkajd akld asl
    </p>
  </div>
  <div class="container">
    <p><i class="fa fa-unlock"></i><b> Inicio: {{inicio}}</b></p>
    <p><i class="fa fa-lock"></i><b> Final: {{final}}</b></p>
      <p>Marcado por {{marcador}}</p>
  </div>
  </div>
  </div>`,
  props:{
    titulo:{type:String,required:true  },
    tema:{  type:String,  required:true  },
    descripcion:{type:String,required:true},
    inicio:{type:String,required:true},
    final:{type:String, required:true},
    marcador:{type:String,required:true},
    marcado:{type:String}
  }
})

Vue.component('row', {
  data:{
    datos:r
  },
  template:`<div>
  <p>{{datos[0]}}</p>
  </div>`

})

var vue = new Vue({
  el:'#app',
  data:{
    message:r
  }

})
}, 2000);
