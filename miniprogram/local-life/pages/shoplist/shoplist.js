// pages/shoplist/shoplist.js
Page({

  data: {
    query: {},
    shopList: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isLoading: false
  },
  onLoad(options) {
    this.setData({
      query: options
    });
    this.getShopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
  },
  onReachBottom() {
    if (this.data.isLoading) return
    if (this.data.page * this.data.pageSize >= this.data.total) {
      wx.showToast({
        title: '数据加载完毕',
        icon: "none"
      })
      return
    }
    this.setData({
      page: ++this.data.page
    })
    this.getShopList()
  },
  onPullDownRefresh() {
    this.setData({
      page: 1,
      shopList: [],
      total: 0,
    })
    this.getShopList(() => {
      wx.stopPullDownRefresh()
    })
  },
  getShopList(cb) {
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: `https://applet-base-api-t.itheima.net/categories/${this.data.query.id}/shops`,
      method: 'GET',
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success: ({
        data,
        header
      }) => {

        this.setData({
          shopList: [...this.data.shopList, ...data],
          total: +header['X-Total-Count']
        });
      },
      complete: () => {
        wx.hideLoading();
        this.setData({
          isLoading: false
        })
        cb && cb()
      }
    })
  },

})