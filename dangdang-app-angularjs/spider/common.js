/**
 * 书记分类数据
 * 数据说明
 * id:   分类
 * name: 分类名字
 * base_url:根地址
 * page_count: 获取数据的页数
 * @type {Array}
 */
const clothesType =[{
  id:"weiyi",
  name:"卫衣",
  base_url:".html?q=3|29974||&rp=30073|30079#catPerPos",
  page_count:3,
},{
  id:"waitao",
  name:"外套",
  base_url:".html?q=3|29977||&rp=30073|30079",
  page_count:3,
},{
  id:"yurongfu",
  name:"羽绒服",
  base_url:".html?q=3|29975||&rp=30073|30079",
  page_count:3,
},{
  id:"fengyi",
  name:"风衣",
  base_url:".html?q=3|29674||&rp=30073|30079",
  page_count:3,
}
];
module.exports={
  clothesType:clothesType
};
