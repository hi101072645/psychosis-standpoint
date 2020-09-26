import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index.vue'
import Result from '@/components/result'
Vue.use(Router);

export default new Router({
	// mode: 'hash',
	mode: 'history', //呈現在網址列沒有井字號的網址，但是使用的時候後端需要 url rewrite，不然跟目錄會跑到專案資料夾的真正跟目錄而非我們現在開發的跟目錄，導致開不開喔
	routes: [
		{
			path: '/',
			component: index
		},
		{
			path: '/result',
			component: Result
		},{
			path: '*',
			component: index
		},
	],
});