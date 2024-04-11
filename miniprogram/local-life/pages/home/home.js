// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放轮播图数据
    swiperList: [],
    // 存放九宫格数据
    gridList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getSwiperList()
    this.getGridList()
  },
  /**
   * 获取轮播图
   */
  getSwiperList() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/slides',
      method: 'GET',
      success: ({
        data
      }) => {
        this.setData({
          swiperList: data
        });
      }
    })
  },
  getGridList() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/categories',
      method: "GET",
      success: ({
        data
      }) => {
        this.setData({
          gridList: data
        })
      }
    })
  }
})