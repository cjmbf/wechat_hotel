
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:'',
    name:"预约订单",
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 获取设备高度
    var res = wx.getSystemInfoSync();
    this.setData({
      appHeight: res.windowHeight
    });

    console.log(this.data.appHeight)
    var that = this;
    var userid=app.globalData.userid;
    wx.request({
      url: 'http://localhost:8089/book/selectBook',
      data:{
        userId:userid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
      // header: {}, // 设置请求的 header  
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          list: res.data.data
        })
        // console.log(that.data.list[0].id)
      }
    })
  },
//跳转至详情页

deleteyuding:function(e){
 var id=e.currentTarget.dataset.id;
   console.log(id)
   var that = this;
   
   wx.request({
     url: 'http://localhost:8089/book/deleteBook',
     data:{
       id:id
     },
     method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
     // header: {}, // 设置请求的 header  
     header: {
      'content-type': 'application/x-www-form-urlencoded'
     },
     success: function (res) {
       console.log(res)
       that.onLoad();
     }
    })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})