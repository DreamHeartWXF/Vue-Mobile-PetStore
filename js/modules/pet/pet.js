define(['lib/vue','util/util','filter/filter','css!./pet.css'],function (Vue,Util,filter) {
	// 详情页组件
	var Pet = Vue.extend({
		//定义模板
		template: Util.tpl('tpl_pet'),
		data:function () {
			// 返回数据是绑定的数据
			return{
				data:{}
			}
		},
		created:function () {
			var me = this;
			//向父组件发送消息
			me.$dispatch('dealSearch',false);
			//拉取数据
			var query = this.$parent.query;
			// 发送请求，获取数据
			Util.ajax('data/pet.json?id=' + query[0],function (res) {
				if(res && res.errno === 0){
					// 存储数据
					me.data = res.data;
					// console.log(me);
				}
			})
		}
	}) 

	// 注册组件
	Vue.component('pet', Pet);
})