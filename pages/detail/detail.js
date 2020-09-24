import {getGoodsDataItem,Goods,Shop,GoodsParam} from "../../service/detail";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:null,
    topImages:[],
    goodsInfo:{},
    shop:{},
    detailInfo:{},
    paramInfo:{},
    product:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.iid)
    this._getGoodsDataItem(options.iid)
   
  },
  addProduct(){
    const product = {};
    product.image = this.data.topImages[0];
    product.title = this.data.goodsInfo.title;
    product.price = this.data.goodsInfo.price;
    product.desc = this.data.goodsInfo.desc
    product.iid =  this.data.iid;
    this.setData({
      product
    })
    console.log(product)
    
  },
  _getGoodsDataItem(iid){
    getGoodsDataItem(iid).then( res => {
      console.log(res)
      //获取数据
      const iid=res.data.iid
      const data = res.data.result
      //获取轮播图数据
      const topImages = data.itemInfo.topImages
      //创建商品对象
      const goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //创建店铺对象
      const shop = new Shop(data.shopInfo)
      //保存商品的详情数据
      const detailInfo = data.detailInfo;
      //获取参数的信息
      const paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      this.setData({
        topImages,
        goodsInfo,
        shop,
        detailInfo,
        paramInfo,
        iid
      })
      this.addProduct()
    })
  },
  addToCart(){
    let cart = wx.getStorageSync("cart")||[];
    let index =cart.findIndex(v => v.iid===this.data.product.iid)
    console.log(this.data.product)
    if(index===-1){
        this.data.product.num=1;
        this.data.product.checked=true
        cart.push(this.data.product)
    }else{
        cart[index].num++;
    }
    wx.setStorageSync('cart', cart);
    wx.showToast({
      title: '加入购物车成功',
      icon: "success",
      mask:true

    })
  },
})