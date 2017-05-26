//定义路由模块
define(['modules/app'],function (app) {
	//定义路由
	function route () {
		// #/home 		=> home
		// #list/type/1 => list
		// #product/10 	=> product
		// #/abc 		=>home
		// 定义路由就是解析hash，分析他们
		//获取hash
		var hash = location.hash;
		//处理hash,我们只需要home这部分，所以要删除#或者#/
		hash = hash.replace(/^#(\/)?/g,'');
		// 切割hash list/type/1  => ['list', 'type', '1']
		hash = hash.split('/');
		//我们需要的是hash[0]这部分，所以要知道哪些hash[0]可以直接使用
		//定义可以直接使用的
		var map = {
			home:true,
			list:true,
			pet:true
		};
		//将解析的结果赋值app的vue实例化对象中的vue属性
		// 在map对象中的hash[0]是可以直接使用的
		if(map[hash[0]]){
			app.view = hash[0];
		}else{
			app.view = 'home';
		}
		//保存路由参数 ['type', '1']
		app.query = hash.slice(1);
	}
		//订阅事件，获取新的路由，切换组件
	window.addEventListener('hashchange',route);
	//页面加载完成以后第一次执行路由方法
	// window.addEventListener('load', route);

	//暴露接口
	return route;
})