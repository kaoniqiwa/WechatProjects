Component({
  properties: {
    colorOffset: {
      type: Number,
      default: 5
    }
  },
  data: {
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0,0,0'
  },
  observers: {
    "_rgb.**": function (color) {
      this.setData({
        fullColor: color.r + ',' + color.g + "," + color.b
      })
    }
  },
  pageLifetimes: {
    show() {
      this._randomColor()
    }
  },
  methods: {
    handleTapR() {
      this.setData({
        "_rgb.r": Math.min(255, this.data._rgb.r + this.data.colorOffset)
      })
    },
    handleTapG() {
      this.setData({
        "_rgb.g": Math.min(255, this.data._rgb.g + this.data.colorOffset)
      })
    },
    handleTapB() {
      this.setData({
        "_rgb.b": Math.min(255, this.data._rgb.b + this.data.colorOffset)
      })
    },
    _randomColor() {
      this.setData({
        _rgb: {
          r: Math.random() * 256 >> 0,
          g: Math.random() * 256 >> 0,
          b: Math.random() * 256 >> 0,
        }
      })
    }
  }
})