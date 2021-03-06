// 创建一个公用数据调用服务
app.factory('commonService',['$http',function($http){
  var service = {};
  /**
   * 根据分类信息读取数据
   */
  service.getData = function(type,callBack){
    $http({
      url:'/dangdang-app-angularjs/data/'+type+'.json',
      method:'get'
    })
    .then(function(res){
      console.log('获取数据成功');
      callBack(res);
    },function(err){
      callBack(err);
    })
  }
  return service;
}]);
