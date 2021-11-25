// pages/yukan/yukan.js
var app=getApp();
const baseUrl = "http://localhost:8089/book/insertBook";
Page({
  
  
  data: {
    showModal: true,
    choosetime:'',
    phone:'',
    day:'',
    racPrice:'',
    roomName:'',
    picture:'',
    area:'',
    floor: '',  
  },
  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (e) {
     var that=this
     that.setData({
       phone:getApp().globalData.phone
     })
      let formData = {
        id:getApp().globalData.hosingid
      }
      wx.request({
        url: "http://localhost:8089/bed/selectBed",
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
            racPrice: res.data.data[0].racPrice,
            roomName:res.data.data[0].roomName,
            picture:res.data.data[0].picture,
            area:res.data.data[0].area,
            floor: res.data.data[0].floor,  
          })
        }
      })
  
  
  },

  handleSelecteDate(e) {
    var choosetime=e.detail.date;
    wx.showToast({ title: `${e.detail.date}`, icon: false });
    console.log(choosetime)
    this.setData({
      choosetime:choosetime
    });
    console.log(this.data.choosetime)
  },
 
  /** 
   * 隐藏模态对话框 
   */
  hideModal() {
    var that = this;
    that.setData({
      showModal: true,
    })
  },
  showModalBtn() {
    var that = this;
    
    that.setData({
      showModal: false
    })
  },
insertday:function(e){
   var that = this;
   that.setData({
      day:e.detail.value
  })
},
 
  submitInfo : function () {
    var that = this;
    //请求的时候需要提交的参数
     var checkIn=that.data.choosetime;
    var roomId = getApp().globalData.hosingid;
    //  var type=that.data.type;
    var day=that.data.day;
     var roomName=that.data.roomName;
     var racPrice=that.data.racPrice;
     var picture=that.data.picture;
     var area=that.data.area;
     var floor=that.data.floor;
 
    var userId = getApp().globalData.userid;
    // app.globalData.type=type;
    let formData1 = {
       checkIn:checkIn,
       roomId:roomId,
       day:day,
       userId: userId,
       racPrice:racPrice,
       roomName:roomName,
       picture:picture,
       area:area,
       floor: floor,  
    }
    console.log(getApp().globalData.hosingid)
    console.log(getApp().globalData.userid)
    console.log(formData1)
    //发送ajax请求将用户注册信息传递过去进行注册
    wx.request({
      url: baseUrl,
      data: formData1,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        console.log("成功")
        console.log(res);
        if(res.statusCode==200){
          wx.showToast({

            title: '预约成功',

            icon: 'success',

            duration: 5000

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