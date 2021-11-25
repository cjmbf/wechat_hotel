// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    img:'',
    tu:0
  },
  yyjl:function(){

    wx.navigateTo({
      url: '../list1/list1',
    })
  },
kanfang:function(){
  var type="1";
  wx.navigateTo({
    url: '../list1/list1',
  })
},
quanbu:function(){
    wx.navigateTo({
      url: '../list1/list1',
    })
},
zufang:function(){
  wx.navigateTo({
    url: '../list/list',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

    var that = this;
    
    // wx.request({
    //   url: "http://101.132.176.96:8081/v1/tenement/users/"+getApp().globalData.userid,
    //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
    //   // header: {}, // 设置请求的 header  
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data.data)
    //     var image=res.data.data.image
        
    //     that.setData({
    //        img:image
    //     })
    //   }
    //   // success: (res) => {
    //   //   this.setData({
    //   //     weatherData: res.data
    //   //   });
    //   // },
    // })
     if(that.data.img==''){
       that.setData({
         tu:0
       })
     }else{
       that.setData({
         tu:1
       })
     }
    this.setData({
      username: getApp().globalData.username,
      
    })
    console.log(getApp().globalData.username);
  },
logout:function(){
  wx.redirectTo({
    url: '../login/login',
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
     var that=this;
     that.setData({
       username: '',
       img: ''
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