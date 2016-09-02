
function galctl(galservice){
  
  this.titulo = "Galeria App"
  
  this.list=function(){
    galservice.list().then(function(ret){
      self.imagens = ret.data
    })
  }
  this.list()
  
  this.carrega=function(arquivo){
    if(arquivo){
      galservice.sobeimagem(arquivo).then(function(){
        self.list()
      })
    }
  }
  
  var self=this
}

module.exports = galctl

