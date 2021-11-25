//index.js
//获取应用实例
const app = getApp()
const baseUrl = "http://localhost:8089/bed/findBed";
Page({
  data: {
    // http://localhost:8089/user/selectUser?username=123&password=123

    list:'',
    imgUrls: [
      'img/adpic/adpic1.jpg',
      'img/adpic/adpic2.jpg',
      'img/adpic/adpic3.jpg'
    ],
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
    // 搜索页面跳回
    onLoad: function (options) {

      // 获取设备高度
      var res = wx.getSystemInfoSync();
      this.setData({
        appHeight: res.windowHeight
      });
  
      console.log(this.data.appHeight)
      var that = this;
      wx.request({
        url: baseUrl,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
        // header: {}, // 设置请求的 header  
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        
        success: function (res) {
          console.log(res)
          console.log(res.data.data)
          that.setData({
            list: res.data.data,
          })
        }
      })
    },
//跳转至详情页
detailInfo:function(e){
  let query = e.currentTarget.dataset['index'];
  console.log(query);
  //注意id  .....
  app.globalData.hosingid = query
  wx.navigateTo({
    url: '../imfor/imfor?query='+query,
  })
},
danchuang:function(e){
  wx.navigateTo({
    url: '../bedlist/bedlist',
  })
},
shuangchuang:function(e){
  wx.navigateTo({
    url: '../bedlist2/bedlist2',
  })
},
jiudian:function(e){
  wx.switchTab({
    url:  '../jiudian/jiudian',
  })
  
},
})
