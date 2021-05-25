/*
 * @Author: your name
 * @Date: 2021-05-20 13:19:15
 * @LastEditTime: 2021-05-20 15:49:23
 * @LastEditors: Please set LastEditors
 * @Description: 商品详情页构造函数
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\network\goodsDetail\goodDtetailObjectUtils.js
 */
export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title
      this.desc = itemInfo.desc
      this.newPrice = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.discount = itemInfo.discountDesc
      this.columns = columns
      this.services = services
      this.realPrice = itemInfo.lowNowPrice
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