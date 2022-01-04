// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:""
  },
  getRadioValue(e){
    this.setData({
      sex:e.detail.value
    })
  }
})