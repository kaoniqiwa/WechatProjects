// my-second-behavior.js

module.exports = Behavior({
  behaviors: [],
  properties: {
    count: {
      type: Number,
      value: 2
    }
  },
  data: {
    age: 2,
    // myBehaviorData: 'my-second-behavior-data',
    myData: {
      title: 'second-behavior',
      behaviorId: 2,
    }
  },

  created: function () {
    console.log('[my-second-behavior] created')
  },
  attached: function () {
    console.log('[my-second-behavior] attached')
  },
  ready: function () {
    console.log('[my-second-behavior] ready')
  },

  methods: {
    myBehaviorMethod: function () {
      console.log('[my-second-behavior] log by myBehaviorMethod')
    }
  }
})