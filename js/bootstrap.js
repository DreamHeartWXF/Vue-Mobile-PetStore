//将vue 模块化
require.config({
	shim:{
		'lib/vue':{
			exports:'Vue'
		}
	},
	//定义css配置
	map:{
		'*':{
			'css':'lib/css'
		}
	}
})
require(['route/route'],function (route) {
	// console.log(route)
	route();
})