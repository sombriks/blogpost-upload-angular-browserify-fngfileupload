
var angular = require("angular")

angular.module("galeriaapp",[
  require("ng-file-upload")
])

angular.module("galeriaapp")
  .service("galservice",require("./galservice"))

angular.module("galeriaapp")
  .controller("galctl",require("./galctl"))

module.exports = angular.module("galeriaapp")
