// components/my-hello/my-hello.js
let myBehavior = require('../../behaviors/my-behavior')
let mySecondBehavior = require('../../behaviors/my-second-behavior')

Component({
  // mySecondBehavior 中的 count 覆盖 myBehavior 中的count
  behaviors: [myBehavior, mySecondBehavior],
  properties: {
    // msg 覆盖所有 behaviors 中的 msg
    msg: {
      type: String,
      value: "hello-msg"
    }
  },
  data: {
    age: 0,
    myData: {
      title: 'component',
      componentId: 1,
    }
  },
  lifetimes: {
    created: function () {
      console.log('[my-component] created')
    },
    attached: function () {
      console.log('[my-component] attached')
    },
    ready: function () {
      console.log('[my-component] ready')
    },

  }
})