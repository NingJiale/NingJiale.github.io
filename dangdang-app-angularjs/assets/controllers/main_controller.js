app.controller('mainController',['$scope','commonService',function($scope,c_service){
                                                                                                                                                      
  $scope.selectedIndex = 0;
  $scope.linkTo = function(index){
    $scope.selectedIndex = index;
  }
}])
