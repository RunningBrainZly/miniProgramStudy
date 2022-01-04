// pages/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aihao:[]
  },
  aaa(e){
    this.setData({
      aihao:e.detail.value
    })
  }
})