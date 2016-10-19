app.controller('bookListController', ['$scope', 'commonService', '$routeParams', function($scope,c_service,$routeParams) {
    c_service.getData($routeParams.id,function(res){
      // console.dir(res.data);
     $scope.bookData = res.data;
    })
}])
