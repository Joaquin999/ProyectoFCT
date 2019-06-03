Vue.component('calendario', {
  data: function () {
    return{
      dias:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
      '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
      mes:'Junio',
      mesNum:'06',
      año:'2019',
      setEvento:vue.setEvento,
      setSeleccionado:vue.setSeleccionado
      }

  },
  template: `<div class="jzdbox1 jzdbasf jzdcal">
<div class="containerC">
<div class="jzdcalt">{{mes}} {{año}}</div>
<span>L</span>
<span>M</span>
<span>X</span>
<span>J</span>
<span>V</span>
<span>S</span>
<span>D</span>


<span class="jzdb"><!--BLANK--></span>
<span class="jzdb"><!--BLANK--></span>
<span class="jzdb"><!--BLANK--></span>
<span class="jzdb"><!--BLANK--></span>
<span class="jzdb"><!--BLANK--></span>

<div v-for="dia in dias">
<span v-if="comprobar(dia)"  @click="setSeleccionado(getEvento(dia),dia)" class="circle" :data-title="getEvento(dia).nombre">{{dia}}</span>
<span v-else>{{dia}}</span>
</div>


<span class="jzdb"><!--BLANK--></span>
<span class="jzdb"><!--BLANK--></span>
<span class="jzdb"><!--BLANK--></span>
<span class="jzdb"><!--BLANK--></span>
<span class="jzdb"><!--BLANK--></span>
<span class="jzdb"><!--BLANK--></span>
<span class="jzdb"><!--BLANK--></span>


  </div>
</div> `,
  props:{
    eventos:{type:Object}
  },
  methods:{
    comprobar(dia){
      let cadena = `${this.año}-${this.mesNum}-${dia}`
      if(cadena in JSON.parse(this.eventos)){
        return true;
      }else{
        return false;
      }
    },
    getEvento(dia){
      let string = `${this.año}-${this.mesNum}-${dia}`
      return (JSON.parse(this.eventos)[string])
    }
  }

})

var vue = new Vue({
  el:'#app',
  data:{
    datos:[],
    evento:{type:Object},
    show:false,
    nombre:'',
    fecha:'',
    campos:['nombre','fecha'],
    valores:{nombre:'Nombre',fecha:'2019-00-00'},
    nuevo:'',
    idCalendario:'',
    seleccionado:false
  },
  methods:{
    postear: function (objeto){
      let fecha = objeto.fecha
      delete objeto.fecha
      let datostmp = JSON.parse(vue.datos.eventos)
      datostmp[fecha] = objeto
      datostmp = {"datos":datostmp}

      console.log(datostmp)
      axios.post('api/calendario', datostmp)
      .then(function (response) {
        console.log(response.data);
        vue.obtenerDatos()
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    obtenerDatos(){
      axios.get('api/calendario', {id:4})
     .then(function(response){
        vue.datos = (response.data)
        vue.idCalendario = response.data.id
     })
     .catch(error => console.log('Error:', error))
   },
    setEvento(objeto){
      vue.evento = objeto
      vue.show = true
    },
    setSeleccionado(valor){
      vue.seleccionado = valor
    }

  }

})
vue.obtenerDatos()
