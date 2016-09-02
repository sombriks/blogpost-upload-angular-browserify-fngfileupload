
function galservice($http,Upload){
    
  this.list = function(){
    return $http({
      method:"GET",
      url:"http://127.0.0.1:3000/list"
    })
  }
  
  this.sobeimagem=function(arq){
    return Upload.http({
      url: "http://127.0.0.1:3000/save?nomeimagem="+arq.name,
      method: 'POST',
      headers: {
        'Content-Type': arq.type  
      },
      data: arq
    })
  }
}

module.exports = galservice
