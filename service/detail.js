import request from "./network"
export function getGoodsDataItem(iid){
  return request({
    url:"http://152.136.185.210:8000/api/z8/detail",
    data:{
      iid
    }
  })
}
export class Goods{
  constructor(itemInfo,columns,service){
    this.title = itemInfo.title;
    this.price = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.desc = itemInfo.desc
    this.columns = columns;
    this.service = service
    
  }
}
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}