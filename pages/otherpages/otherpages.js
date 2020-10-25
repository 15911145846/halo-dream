// pages/otherpages/otherpages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: [{
      icon: 'timefill',
      color: 'yellow',
      badge: 0,
      name: '项目进展',
      url:'/pages/otherpages/demotime/demotime'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      name: '排行榜',
      url:'/pages/otherpages/rating/rating'
    },  {
      icon: 'more',
      color: 'purple',
      badge: 0,
      name: '其他功能待开发',
      url:'/pages/otherpages/otherpages'
    }],
    gridCol:3,
    skin: false
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