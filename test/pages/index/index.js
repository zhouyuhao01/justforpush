//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    tempratrue:"21摄氏度"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.request({
      url: 'http://www.help.bj.cn/apis/weather/?id=101060101', //仅为示例，并非真实的接口地址
      success: function(res) {
        that.setData({
          tempratrue : "20"
        })
        
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })



  }
})
