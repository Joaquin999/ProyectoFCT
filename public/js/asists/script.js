
var vue2 = new Vue({
  el:'#clock',
  data:{
    hora:'',
    estado:'Ausente',
    idActual:0,
    informe:''
  },
  methods:{
    getFullDate(){
      let d = new Date()
      let utc = new Date().toJSON().slice(0,10).replace(/-/g,'-').split('-').join('-');
      let min, hours, sec

      d.getSeconds() < 10 ? sec = `0${d.getSeconds()}` : sec = d.getSeconds()
      d.getMinutes() < 10 ? min = `0${d.getMinutes()}` : min = d.getMinutes()
      d.getHours() < 10 ? hours = `0${d.getHours()}` : hours = d.getHours()

      str = `${utc} ${hours}:${min}:${sec}`
      return str
    },
    refrescar(){
      let d = new Date();
      let str = ""
      let hora = d.getHours();
      if(hora!=23){
        hora++;
      }else{
        hora = 00
      }
      let minutes = d.getMinutes()
      minutes < 10 ? minutes = `0${minutes}`: ""
      str = `${hora}:${minutes}`
      return this.hora = str;
    },
    fichar(id, informe){
      this.estado = 'Trabajando'
      let entrada = this.getFullDate()
      axios.post('api/asistencias', {entrada, informe, usuario:id})
      .then(function(response){
        vue2.idActual = response.data
        document.cookie = `estado=${vue2.estado}lkl${vue2.idActual}; max-age=86400`;
        console.log(response)
      })
      .catch(response => console.log(response))

    },
    salir(informe){
      this.estado = 'Ausente'
      let salida = this.getFullDate()
      axios.put('api/asistencias/1', {salida, informe,id:vue2.idActual})
      .then(function(response){
        document.cookie = `estado=${vue2.estado}lkl${vue2.idActual}; max-age=86400`;
        console.log(response)
      })
      .catch(response => console.log(response))
    },
    setEstado(){
      if(document.cookie.search('estado')!=-1){
        let string = document.cookie.split(';')//separo todas las cookies
        string = string.find(function(elemento){//encuentro la que tiene la palabra "estado"
          return elemento.search('estado') != -1
        })
        string = string.split('=')[1].split('lkl') //saco los valores de estado e ID que están separados por la cadena "lkl"
        this.estado = string[0]//Estado
        this.idActual = string[1]   //valor del ID
      }

    }

  }

})
vue2.refrescar()
vue2.setEstado();
setTimeout("vue2.refrescar()",60000)
