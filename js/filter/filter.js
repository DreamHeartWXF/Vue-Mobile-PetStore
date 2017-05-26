define(['lib/vue'],function (Vue) {
	// 定义过滤器
	// 价格过滤器
	Vue.filter('priceFilter', function (price) {
		return  price + '元';
	})
	//所在地过滤器
	Vue.filter('nativeFilter', function (native) {
		return "地区:" + native ;
	})
	//在售只数过滤器
	Vue.filter('onsaleFilter',function (onsale) {
		return onsale + "只";
	})
	//年龄过滤器
	Vue.filter('ageFilter',function (age) {
		return age + "个月";
	})
	//防疫过滤器
	Vue.filter('fangyiFilter',function (fangyi) {
		return fangyi + "针";
	})
})