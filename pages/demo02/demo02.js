// pages/demo02/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
  // 自定义方法
  clickBtn(e){
    const aaa = e.currentTarget.dataset.num
    this.setData({
      num:this.data.num + aaa
    })
  },
  // 小程序中给data中数据赋值
  // this.setData({ num:e.detail.value})
  inputChange(e){
    console.log(e.detail.value);
    this.setData({
      num:e.detail.value
    })
  }
})