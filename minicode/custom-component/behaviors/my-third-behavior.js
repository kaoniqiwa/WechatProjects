// my-second-behavior.js

module.exports = Behavior({
  behaviors: [],
  data: {
    age: 3,
    myBehaviorData: 'my-third-behavior-data',
    myData: {
      title: 'third-behavior',
      behaviorId: 3,
    }
  },

  created: function () {
    console.log('[my-third-behavior] created')
  },
  attached: function () {
    console.log('[my-third-behavior] attached')
  },
  ready: function () {
    console.log('[my-third-behavior] ready')
  },

  methods: {
    myBehaviorMethod: function () {
      console.log('[my-third-behavior] log by myBehaviorMethod')
    }
  }
})