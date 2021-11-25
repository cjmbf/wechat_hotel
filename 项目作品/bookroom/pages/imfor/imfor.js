// pages/imfor/imfor.js
const baseUrl = "http://localhost:8089/bed/selectBed";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:'',
    list:'',
    racPrice:'',
    memberPrice:'',
    roomName:'',
    area:'',
    picture:'',
    jianjie:'',
      markers: [{
        iconPath: "img/selectcollect.png",
        id: 0,
        width: 50,
        height: 50
      }],
         
          // controls: [{
          //   id: 1,
          //   iconPath: '../img/select/hosing.png',
          //   position: {
          //     left: 0,
          //     top: 300 - 50,
          //     width: 50,
          //     height: 50
          //   },
          //   clickable: true
          // }],
      imgUrls: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (options && options.query) {
      this.setData({
        query:options.query,
      });
    }
    var that = this;
  
    var id = that.data.query
    let formData = {
      id:id
    }
    wx.request({
      url: baseUrl,
      data:formData,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
      // header: {}, // 设置请求的 header  
      header: {
        'content-type': 'application/x-www-form-urlencoded'
        // 'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.data)
        console.log(res.data.data[0].racPrice)
        that.setData({
          list: res.data.data, 
          // address:res.data.data.address,
          racPrice: res.data.data[0].racPrice,
          memberPrice: res.data.data[0].memberPrice,
          title: res.data.data[0].title, 
          roomName:res.data.data[0].roomName,
          imgUrls:res.data.data,
          area:res.data.data[0].area,
          floor: res.data.data[0].floor,  
          jianjie:res.data.data[0].jianjie,
        })
      }
    })

  },
  guanzhu: function () {
    var that=this;
    var housingId;
    var userId;
    let formData = {
      housingId: that.data.query,
      userId: getApp().globalData.userid
    }
    wx.request({
      url: 'http://localhost:8089/book/insertBook',
      data: formData,
      header: {
        'content-type': 'application/x-www-form-urlencoded'// 默认值
      },
      method: "POST",
      success: function (res) {
        console.log(res);
        console.log(res.statusCode);
        if (res.statusCode == 200) {
        
          wx.showToast({

            title: res.data.data.result,

            icon: 'success',

            duration: 2000

          });
           wx.switchTab({
            url: '../collect/collect',
          })
        }
      }
      })
  },
  yuding: function () {
   wx.navigateTo({
     url: '../yuding/yuding',
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