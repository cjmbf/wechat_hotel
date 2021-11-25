// pages/personinfo/personinfo.js
var app=getApp();
// var nc;
// var zsxm;
// var mm;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // onPullDownRefresh: function () {
    //   wx.stopPullDownRefresh()
    // },
    myinfo: null,
    img: "",
    userId: '',
    phone: '',
    username: '',
    password:'',
    showView:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var stu = getApp().globalData.username;
    this.setData({ myinfo: stu });

    var that = this;
    var userId = getApp().globalData.userid;
    let formData = {
      userId: userId,
    }
    console.log(formData)
    wx.request({
      url: 'http://localhost:8089/user/findUser',
      data: formData,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "GET",
      success: function (res) {
        console.log(res)
        that.setData({
          phone:res.data.data[0].phone,
          userId:res.data.data[0].id,
          username:res.data.data[0].username
        })
          
           console.log("我的用户名"+app.globalData.username)
            console.log("我的id"+app.globalData.userid)
   
      },

   

    })


    // console.log(this.data.myinfo);
  },

  shuru:function(){
    wx.navigateTo({
      url:'../xgma/xgma'
    })
  },
  touxiang:function(){
    wx.navigateTo({
    url: '../xgtx/xgtx'
    })
  },
 
  // nicheng:function(){
  //   wx.navigateTo({
  //     url: '../xgnc/xgnc'
  //   })
  // },
  // xingming:function(){
  //   wx.navigateTo({
  //    url:'../zsmc/zsmc'
  //   })
  // },
  exit: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          //页面跳转
          wx.switchTab({
            url: '../me/me',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // resetpwd: function (e) {
  //   var no = this.data.myinfo.no;
  //   wx.navigateTo({
  //     url: '../password/password?no=' + no,
  //   })
  // },
  // setemail: function (e) {
  //   var no = this.data.myinfo.no;
  //   wx.navigateTo({
  //     url: '../email/email?no=' + no,
  //   })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     var that=this
     that.setData({
       myinfo: null,
       img: "",
       name: '',
       phone: '',
       userName: ''
     })
     that.onLoad();
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