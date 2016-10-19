app.controller('bookListController', ['$scope', 'commonService', '$routeParams', function($scope, $routeParams, c_service) {
    c_service.getData($routeParams.id,function(res){
      console.dir(res);
    })
}])
