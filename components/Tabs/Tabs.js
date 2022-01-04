// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    aaa:{
      //父向子传递数据
      //接收的数据类型
      type:String,
      //默认值
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"首页",
        isActive:true
      },
      {
        id:1,
        name:"原创",
        isActive:false
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"关于",
        isActive:false
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTabs(e){
      const index = e.currentTarget.dataset.index;
      const tabs = this.data.tabs;
      // forEach遍历（v,i）其中v改变了，元数组也会改变
      tabs.forEach((tab,i) => {
        if(i == index){
          tab.isActive = true;
        }else{
          tab.isActive = false;
        }
      });
      this.setData({
        tabs:tabs
      })

      this.triggerEvent("clickEvent",tabs)
    }
  }
})
