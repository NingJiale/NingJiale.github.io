app.controller('bookController',['$scope',function($scope){
  $scope.bookTypes=[
    {id:'weiyi',name:'卫衣',img:'./assets/images/weiyi.jpg',description:'潮流男上装之潮流卫衣'},
    {id:'waitao',name:'外套',img:'./assets/images/waitao.jpg',description:'潮流男上装之潮流外套'},
    {id:'yurongfu',name:'羽绒服',img:'./assets/images/yurongfu.jpg',description:'潮流男上装之潮流羽绒服'},
    {id:'fengyi',name:'风衣',img:'./assets/images/fengyi.jpg',description:'潮流男上装之潮流风衣'}
  ]
}])
