// components/w-goods-item/w-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goodsclick(){
     console.log(this.data.item.iid)
      wx.navigateTo({
        url: '../../pages/detail/detail?iid=' + this.data.item.iid,
      })
    }
  }
})
