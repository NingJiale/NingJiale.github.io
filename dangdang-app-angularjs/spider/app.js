var express = require('express');
var app = express();
var url =require('url');
var fs =require('fs');
var common = require('./common');
var clothesType = common.clothesType;


// 网络爬虫
var crawler = require('crawler');
var c = new crawler({
    maxConnections: 10,
    forceUTF8: true,
    incomingEncoding: 'gb2312'
});

clothesType.forEach(function(item) {

    loadData(item.id, item.base_url, item.page_count);


});

function loadData(id, base_url, page_count) {
    var page = 1;
    var arr = [];
    getData(base_url,page);

    function getData(url, count) {

        c.queue([{
            uri: 'http://category.vip.com/search-5-0-'+count+url,
            callback: function(error, result, $) {
                $('#J_searchCatList .goods-list-item').each(function(index, li) {
                    var obj = {};
                    obj.img = $(li).find('.goods-inner .goods-slide .goods-image a img').attr('src');
                    obj.title = $(li).find('.goods-inner h4 a').attr('title').trim();
                    obj.author = $(li).find('.goods-countdown-info span').eq(0).text().toString();
                    obj.publister = $(li).find('.goods-info em span').eq(1).text();
                    obj.publist_time = $(li).find('.goods-info del').text();
                    obj.link = $(li).find('.goods-inner .goods-slide .goods-image a').attr('href');
                    obj.price = $(li).find('.goods-info .goods-discount').text();
                    arr.push(obj);
                });
                if(count<=page_count){
                  getData(url,count+1);
                }else{
                  console.log(arr);
                  fs.writeFileSync(`../data/${id}.json`,JSON.stringify(arr));
                  console.log('获取数据成功');
                }
            }
        }]);
    }
}

app.listen(3000, function() {
    console.log('服务器运行于3000端口.');
});
