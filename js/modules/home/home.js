define(['lib/vue','util/util','lib/zepto','lib/fx','css!./home.css'],function (Vue,Util,zepto,fx) {
	// 首页组件
	var Home = Vue.extend({
		template: Util.tpl('tpl_home'),
		// 数据通过data属性来设置
		data:function () {
			//通过返回值，将数据绑定
			return{
				nav:[
					{id:1,url:'dog1.jpg'},
					{id:2,url:'dog2.jpg'},
					{id:3,url:'dog3.jpg'},
					{id:4,url:'dog4.jpg'},
					{id:5,url:'dog5.jpg'},
					{id:6,url:'dog6.jpg'},
					{id:7,url:'dog7.jpg'},
					{id:1,url:'dog1.jpg'}
				],
				main:[
					{id:1,url:'01.jpg',breed:'泰迪'},
					{id:2,url:'02.jpg',breed:'比熊'},
					{id:3,url:'09.jpg',breed:'金毛'},
					{id:4,url:'04.jpg',breed:'拉布拉多'},
					{id:5,url:'05.jpg',breed:'萨摩耶'}
				],
				ad:[],
				items:[]
			}
		},
		methods:{
			//定义轮播图事件
			lbt:function(){
				var nowLeft = 0;
				// 定义id
				var imgId = 0;
				// 获取设备宽度
				var deviceW = $(window).width();
				// 获取ul的left值
				var left = parseInt($('.nav').css('left'));
				window.timer = setInterval(function(){
					imgId++;
					if(imgId>=8){
						imgId = 1;
						$('.nav').css('left',0);
					}
					nowLeft = deviceW *imgId;
					$('.nav').animate({left:-nowLeft},500);
				},2000)
			}
			
		},
		//定义声明周期
		created:function () {
			//缓存this
			var me = this;
			//通知父组件显示搜索框
			me.$dispatch('dealSearch',true)
			// 发送请求，获取数据，更新绑定的数据
			Util.ajax('data/home.json',function (res) {
				if(res && res.errno === 0){
					me.ad = res.data.ad;
					me.items = res.data.list;
					me.lbt();
				}
			})
		}
	})
	// 注册组件
	Vue.component('home', Home);
})