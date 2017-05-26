define(['lib/vue','modules/home/home','modules/list/list','modules/pet/pet','css!./app.css'],function (Vue,home,list,pet) {
	// 实例化vue实例化对象
	var app = new Vue({
		el: '#app',
		data: {
			//定义视图变量
			view:'',
			//定义路由参数变量
			query:[],
			//定义搜索词
			search:'',
			//传递给子组件的搜索字段
			searchQuery:'',
			//是否显示搜索框
			isShowSearch:true
		},
		// 定义方法
		methods:{
			// 搜索框中按下enter键
			showResult:function () {
				// 更新searchQuery
				this.searchQuery = this.search;
				//清空search
				this.search = '';
			},
			goBack:function () {
				history.go(-1);
			}
		},
		//注册消息
		events:{
			dealSearch:function (msg) {
				//作用域是vue实例化对象
				this.isShowSearch = msg;
				// console.log(msg);
			}
		}
	})
	//暴露接口
	return app;
})