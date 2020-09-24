import {getCategory,getSubcategory} from "../../service/category"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryCount:[],
    currentType:'3627',
    countIndex:0,
    countitem:{}
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCategory()
    this._getSubcategory(this.data.currentType)
  },
  _getCategory(){
    getCategory().then(res => {
      const data = res.data.data.category.list
      const categoryCount = data
      this.setData({
        categoryCount
      })
      console.log(categoryCount)
      
    })
  },
  countclickitem(event){
    const countIndex = event.detail.index
    this.setData({
      countIndex,
      currentType:this.data.categoryCount[countIndex].maitKey
    })
    this._getSubcategory(this.data.currentType)
    console.log(this.data.currentType)
    
  },
  _getSubcategory(count){
    getSubcategory(count).then(res => {
      const countitem = res.data
      this.setData({
        countitem
      })
     console.log(countitem)
    })
  }
  
 
 
})