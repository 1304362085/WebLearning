import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import home from '@/components/home'
import test from '@/components/test'

Vue.use(Router)

const routes = [
	{
		path: '/',
		component:login
	},
	{
		path:'/home',
		component:home
	},
	{
	path: '/test',
	component:test
	}
];

const router = new Router({
	routes
});

export default router;


//export default new Router({
//routes: [
//  {
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  }
//]
//})
