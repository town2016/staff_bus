import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/widget/layout'
import routes from './routes.js'
Vue.use(Router)
export default new Router({
  routes: [
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
