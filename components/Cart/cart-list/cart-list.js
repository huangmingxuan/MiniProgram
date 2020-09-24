// components/Cart/cart-list/cart-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cartList:{
      type:Array,
      value:[]
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
    cartClick(e){
     const data = e.currentTarget.dataset.id
     this.triggerEvent('Cartclick',data,{})
     console.log(data)
    }
  }
})
