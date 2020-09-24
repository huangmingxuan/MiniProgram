// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartlist:[],
    allChecked:false,
    allPrice:0,
    ckeLenght:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cartlist=wx.getStorageSync('cart')||[]
    const allChecked=cartlist.length?cartlist.every(v => v.checked):false;
    this.setData({
      cartlist,
      allChecked,
      
    })
    this.totalPrice()
    this.checkedLenght()
  },
  totalPrice(){
       const allPrice=this.data.cartlist.filter(item =>{
        return item.checked
      }).reduce((preValue,item) => {
        return preValue +item.num * item.price
      },0).toFixed(2)
      this.setData({
        allPrice
      })
  
  },
  checkedLenght(){
    const ckeLenght = this.data.cartlist.filter(item => item.checked).length
    this.setData({
      ckeLenght
    })
  },
  cartClick(event){
    const iid=event.detail;
    let {cartlist} = this.data;
    let index = cartlist.findIndex(v => v.iid===iid)
    cartlist[index].checked=!cartlist[index].checked;
    const allChecked=cartlist.length?cartlist.every(v => v.checked):false;
    this.setData({
      cartlist,
      allChecked
    })
    wx.setStorageSync('cart', cartlist);
    this.totalPrice()
    this.checkedLenght()
  },
  ToallChecked(){
    let {cartlist} = this.data;
    
    cartlist.forEach(item => item.checked=!this.data.allChecked)
    const allChecked=cartlist.length?cartlist.every(v => v.checked):false;
    console.log(this.data.allChecked)
    this.setData({
      cartlist,
      allChecked
      
    })
    wx.setStorageSync('cart', cartlist);
    this.totalPrice()
    this.checkedLenght()
  }
  

 
})