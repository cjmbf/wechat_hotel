
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:'',
    name:"全部双床",
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
    wx.request({
      url: 'http://localhost:8089/bed/selectBedByBed',
      data:{
        bed:"双床"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
      // header: {}, // 设置请求的 header  
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
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