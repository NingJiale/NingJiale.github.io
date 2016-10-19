app.controller('bookController',['$scope',function($scope){
  $scope.bookTypes=[
    {id:'ertong',name:'儿童',img:'./assets/images/book_ertong.jpg',description:'儿童书籍大全'},
    {id:'lishi',name:'历史',img:'./assets/images/book_lishi.jpg',description:'历史书籍大全'},
    {id:'dongman',name:'动漫',img:'./assets/images/book_dongman.jpg',description:'动漫书籍大全'},
    {id:'qingchunwenxue',name:'青春文学',img:'./assets/images/book_qingchunwenxue.jpg',description:'青春文学书籍大全'}
  ]
}])
