// pages/reg/reg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    password: "",
    passwordconfirm: "",
    phone:"",
    idCard:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  usernameinput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  passwordinput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  passwordconfirminput: function (e) {
    this.setData({
      passwordconfirm: e.detail.value
    })
  },
  // 手机号验证
  phoneinput:function(e){
    this.setData({
      phone: e.detail.value
    })
  },
 idcardinput: function (e) {
   this.setData({
     idCard: e.detail.value
   })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  signin: function () {
    var that = this;
    //请求的时候需要提交的参数
    var name = that.data.username
    var pwd = that.data.password
    var phone = that.data.phone
     var idCard = that.data.idCard
    console.log(name + "-" + pwd + "-" + phone + "-" + idCard )
    let formData1 = {
      username: name,
      password: pwd,
      phone: phone,
      idCard: idCard,
    }
    console.log(formData1)
     var re = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$', 'g');
    var rs = re.exec(that.data.password);
  
    if (that.data.username == "") {
      wx.showModal({
        title: "信息提示",
        content: "用户名不能为空!"
      })
    } else if (that.data.password == "") {
      wx.showModal({
        title: "信息提示",
        content: "请输入密码!"
      })
    } else if (that.data.passwordconfirm == "") {
      wx.showModal({
        title: "信息提示",
        content: "请确认密码!"
      })
    } else if (that.data.passwordconfirm != that.data.password) {
      wx.showModal({
        title: "信息提示",
        content: "两次密码输入不一致!"
      })
    } else if (that.data.phone.length != 11) {
      wx.showModal({
        title: "信息提示",
        content: "手机号输入位数有误！"
      })
    }else if(that.data.idCard.length !=18){
      wx.showModal({
        title: "信息提示",
        content: "身份证输入位数有误！"
      })
    }else if(!rs){
      wx.showModal({
        title: "信息提示",
        content: "请输入6-16位数字和字母的组合的密码"
      })
    }else{
      // console.log("js中收到的用户名："+name+"，密码："+pwd)
      //发送ajax请求将用户注册信息传递过去进行注册
      wx.request({
        url: 'http://localhost:8089/user/insertUser',
        data: formData1,

        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
          // 'content-type': 'application/json'
        },
        method: "POST",
        success: function (res) {
          console.log("成功")
          console.log(res);
          console.log("响应的数据" + res.data)
          wx.redirectTo({
            url: '../login/login',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
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
    }
  },




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