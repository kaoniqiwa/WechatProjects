// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],
    isLoading: false
  },
  onLoad() {
    this.getColors()
  },
  onReachBottom() {
    !this.data.isLoading && this.getColors()
  },
  onPullDownRefresh() {
    this.setData({
      colorList: [],
      isLoading: false
    })
    this.getColors(() => {
      wx.stopPullDownRefresh()
    })
  },
  tapHandler() {
    wx.hideLoading()
  },
  getColors(cb) {
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/color',
      success: ({
        data: {
          data: colors
        }
      }) => {
        this.setData({
          colorList: [...this.data.colorList, ...colors]
        });
        if (this.data.colorList.length <= 5) {
          this.getColors()
        }
      },
      complete: () => {
        this.setData({
          isLoading: false
        })
        wx.hideLoading()

        cb && cb()
      }
    })
  }
})