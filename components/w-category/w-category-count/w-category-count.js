// components/w-category/w-category-count/w-category-count.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    category_count:{
      type:Array,
      value:[]
    },
    countItem:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    countIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    countClick(event){
      const countIndex = event.currentTarget.dataset.index
      this.setData({
        countIndex
      })
      console.log(countIndex)
      const data = {index: this.data.countIndex}
      this.triggerEvent("countclick", data, {})
    }
  }
})
