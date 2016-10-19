app.controller('bookController',['$scope',function($scope){
  $scope.bookTypes=[
    {id:'ertong',name:'儿童',img:'./assets/images/book_ertong.jpg',description:''},
    {id:'lishi',name:'历史',img:'./assets/images/book_lishi.jpg',description:''},
    {id:'dongman',name:'动漫',img:'./assets/images/book_dongman.jpg',description:''},
    {id:'qingchunwenxue',name:'青春文学',img:'./assets/images/book_qingchunwenxue.jpg',description:''}
  ]
}])
