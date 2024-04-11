// pages/message/message.js
Page({
  data: {
    colorOffset: (Math.random() * 10 >> 0) + 10,
  },
  onShow() {

    this.setData({
      colorOffset: (Math.random() * 10 >> 0) + 10,
    })
  }
})