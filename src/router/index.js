import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index.vue'
import Q1 from '@/components/q1.vue'
// import Q2 from '@/components/q2.vue'
// import Q3 from '@/components/q3.vue'
// import Q4 from '@/components/q4.vue'
// import Answer from '@/components/Answer.vue'
Vue.use(Router);

export default new Router({
	// mode: 'hash',
	mode: 'history', //呈現在網址列沒有井字號的網址，但是使用的時候後端需要 url rewrite，不然跟目錄會跑到專案資料夾的真正跟目錄而非我們現在開發的跟目錄，導致開不開喔
	routes: [
		{
			path: '/',
			component: index
		},{
			path: '/Q1',
			component: Q1
		},
		{
			path: '*',
			component: index
		},
	],
});