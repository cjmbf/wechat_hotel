// pages/xgma/xgma.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    passw:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  formSubmit: function (e) {
    // console.log(e);
    var that=this;
    var oldpwd = e.detail.value.oldpwd;
    var newpwd = e.detail.value.newpwd;
    var newpwd2 = e.detail.value.newpwd2;
    // console.log(no);
    var re = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$', 'g');
    var rs = re.exec(newpwd);
    if(oldpwd!=that.data.passw){
      wx.showToast({
        title: '旧密码错误',
        icon: 'none',
        duration: 1000
      })
    }else if(!rs){
      wx.showToast({
        title: '请输入6到16位字母加数字密码',
        icon: 'none',
        duration: 1000
      }) 
    }
     else if (oldpwd == '' || newpwd == '' || newpwd2 == '') {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
        duration: 1000
      })
    } else if (newpwd != newpwd2) {
      wx.showToast({
        title: '两次输入不一致',
        icon: 'none',
        duration: 1000
      })
    } else {
      var url = 'http://localhost:8089/user/updateUser';
      wx.request({
        url: url, //仅为示例，并非真实的接口地址
        method: 'POST',
        data: {
          id: getApp().globalData.userid,
          password: newpwd
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: (res) => {
          console.log(res.data);
          if (res.data.error) {
            wx.showToast({
              title: '修改失败',
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.showToast({
              title:'修改成功',
              icon: 'success',
              duration: 2000,
              success: function () {
                setTimeout(function () {
                  wx.navigateBack({ belta: 1 })
                }, 2000)
              }
            })
          }

        }
      })
    }

  },
  
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "http://localhost:8089/user/findUser" ,
      data: {
        userId: getApp().globalData.userid,
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
      // header: {}, // 设置请求的 header  
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data.data)
        var password = res.data.data[0].password
        console.log(password)
        that.setData({
          passw:password
        })
        console.log(that.data.passw)
      }
      // success: (res) => {
      //   this.setData({
      //     weatherData: res.data
      //   });
      // },
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