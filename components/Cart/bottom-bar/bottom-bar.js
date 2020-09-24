// components/Cart/bottom-bar/bottom-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    allchecked:{
      type:Boolean,
      value:false
    },
    allprice:{
      type:Number,
      value:0
    },
    ckelenght:{
      type:Number,
      value:0
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
    allclick(){
      this.triggerEvent('toallchecked')
    }
  }
})
