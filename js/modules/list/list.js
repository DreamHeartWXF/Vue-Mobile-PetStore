define(['lib/vue','util/util','filter/filter','css!./list.css'],function (Vue,Util,filter) {
	// 列表页组件
	var List = Vue.extend({
		//注册属性数据
		props:['search'],
		template: Util.tpl('tpl_list'),
		
		//定义数据
		data:function () {
			return {
				rank:[
					{value: '价格排序', key: 'price'},
					{value: '销量排序', key: 'sale'},
					{value:'年龄',key:'age'},
					{value:'所属地区',key:'native'}
				],
				list:[],
				other:[]
			}
		},
		//method属性中定义回调函数
		methods:{
			showAll:function () {
				//将缓存的other数据添加到list中，将other清空
				this.list = this.list.concat(this.other);
				this.other = [];
			},
			sort:function (key) {
				// console.log(key);
				//排序就是对list 中的数据排序
				this.list.sort(function (a,b) {
					return a[key] - b[key];
				})
			}
		},
		created:function () {
			//缓存this
			var me = this;
			//通知父组件显示搜索框
			me.$dispatch('dealSearch',true);
			//获取query
			var query = this.$parent.query;
			//在地址的query中拼凑出传递给后端的数据
			var url = 'data/list.json';
			//有query,要讲query拼接出来
			if(query[0] !== undefined && query[1] !==undefined){
				url += '?' + query[0] + '=' + query[1]
			}
			
			//发送请求
			Util.ajax(url,function (res) {
				if(res && res.errno === 0){
					// console.log(res.data);
					//将数据存储在组件实例化对象中
					var  data =[];
					for(var i = 0; i<res.data.length;i++){
						if(query[1]  == res.data[i].id){
							data[data.length] = res.data[i];
						}
					}
					//前6个保存在list中，后3个缓存起来
	                me.list = data.slice(0,6);
	                me.other = data.slice(6);
	                clearInterval(window.timer)
				}
			})
		}
	})
	// 注册组件
	Vue.component('list', List);
})