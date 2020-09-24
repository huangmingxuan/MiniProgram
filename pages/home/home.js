// pages/home/home.js
import {getMultData, getGoodsData} from "../../service/home";
const TOP_DISTANCE = 1000;
const types = ['pop','new','sell']
Page({
  data: {
    banners:[],
    recommends:[],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: {page: 0, list: []},
      new: {page: 0, list: []},
      sell: {page: 0, list: []}
    },
    currentType:'pop'
  },
  onLoad: function (options) {
    this._getMultData();
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell')
   
  },
  _getMultData(){
    getMultData().then(res => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
     this.setData({
       banners,
       recommends
     })
  })
  },
  _getGoodsData(type){
    //获取当前对象页码
    const page = this.data.goods[type].page + 1;
    getGoodsData(type,page).then(res => {
      //获取请求的数据
        const list = res.data.data.list;
        console.log(list)
        //获取页面当前的对象
        const oldList= this.data.goods[type].list;
        //把请求的数据添加到当前对象
        oldList.push(...list)
        //保存当前对象的KEY
        const typeKey = `goods.${type}.list`;
        const pageKey = `goods.${type}.page`;
        this.setData({
          //把数据放入key对应的对象里面
          [typeKey]: oldList,
          [pageKey]: page,
          
        })
      
    })
  },
  handleTabClick(event) {
    // 取出index
    const index = event.detail.index;

    // 设置currentType
    this.setData({
      currentType: types[index]
    })
  },
  handleImageLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
    }).exec()
  },

  onReachBottom() {
    // 上拉加载更多 -> 请求新的数据
    this._getGoodsData(this.data.currentType)
  },

  onPageScroll(options) {
    // 1.取出scrollTop
    const scrollTop = options.scrollTop;
    // console.log(scrollTop)

    // 2.修改showBackTop属性
    // 官方: 不要再滚动的函数回调中频繁的调用this.setData
    const flag1 = scrollTop >= TOP_DISTANCE;
    if (flag1 != this.data.showBackTop) {
      this.setData({
        showBackTop: flag1
      })
    }

    // 3.修改isTabFixed属性
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if (flag2 != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }
  }


})