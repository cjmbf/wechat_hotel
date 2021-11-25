// pages/login/login.js
var app = getApp();   
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: true,
    btnstate: "default",
    username: "",
    password: ""
  },
  accountInput: function (e) {
    var content = e.detail.value;
    if (content != '') {
      this.setData({ disabled: false, btnstate: "primary", username: content });
    } else {
      this.setData({ phone:content ,disabled: true, btnstate: "default" });
    }
    // console.log(content);
  },
  passwordInput: function (e) {
    var pwd = e.detail.value;
    this.setData({ password: pwd });
    // console.log(pwd)
  },
  login: function () {
    var that = this;
    //请求的时候需要提交的参数

    var pwd = that.data.password
    var username = that.data.username
    let formData = {
      password: pwd,
      username: username,
    }
    console.log(formData)
    // console.log("js中收到的用户名："+name+"，密码："+pwd)
    //发送ajax请求将用户注册信息传递过去进行注册
    wx.request({
      url: 'http://localhost:8089/user/selectUser',
      data: formData,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "GET",
      success: function (res) {
        console.log(res)
        console.log(res.data.data.length)
        if (res.data.data.length!="1"){
          wx.showToast({
            title: '用户名或密码错误！',
            icon: "none",
            duration: 2000
          });
        }else{
           app.globalData.phone=res.data.data[0].phone
           app.globalData.userid = res.data.data[0].id
           app.globalData.password=res.data.data[0].password
           app.globalData.username=res.data.data[0].username
           console.log("我的用户名"+app.globalData.username)
            console.log("我的id"+app.globalData.userid)
            wx.showToast({

          title: '登陆成功',

          icon: 'success',

          duration: 2000

        });
        wx.switchTab({
          url: '../index/index',
        })
        }
   
      },

      fail: function (res) {
        wx: wx.showToast({
          title: '服务器网络错误,请稍后重试',

          icon: 'loading',
          duration: 1500,
        })
      },
      complete: function (res) {

      }
    })

    if (that.data.username == "") {
      wx.showModal({
        title: "信息提示",
        content: "用户名不能为空!"
      })
    } 

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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