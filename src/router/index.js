import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/widget/layout'
import routes from './routes.js'
const Login = () => import('views/login.vue')
Vue.use(Router)
export default new Router({
  routes: [
		{
			name: 'login',
			path: '/login',
			component: Login
		},
   	{
   		name:'layout',
   		path:'/',
   		component:layout,
   		redirect:'/home',
   		children: [
				 ...routes
			 ]
   	}
  ]
})
