const secondBehavior = require('./my-second-behavior')
const thirdBehavior = require('./my-third-behavior')
module.exports = Behavior({
	behaviors: [secondBehavior, thirdBehavior],
	properties: {
		msg: {
			type: String,
			value: "my-behavior-msg"
		},
		// 覆盖被引用的 behaviors(secondBehavior) 中的 count
		count: {
			type: Number,
			value: 1
		}
	},
	data: {
		age: 1,
		myData: {
			title: 'my-behavior',
			behaviorId: 1,
		},
		username: {
			firstName: "Jim",
			lastName: 'Green'
		}
	},
	observers: {
		count(val) {
			console.log('count', val);
		}
	},
	methods: {

	},
	lifetimes: {
		created() {
			console.log('[my-behavior] created')
		},
		attached() {
			console.log('[my-behavior] attached')
		},
		ready() {
			console.log('[my-behavior] ready')
		},
		moved() {},
		detached() {}
	},
	pageLifetimes: {
		show() {},
		hide() {},
		resize() {}
	}
})