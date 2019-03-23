// Base dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/views/Home.vue'
import Routes from '@/components/views/Routes.vue'
import Route from '@/components/views/Route.vue'

// Enable the ionic-vue router plugin
Vue.use(VueRouter)

// Create a new IonicVueRouter instance
// Define and export our routes
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/paths/*',
        component: Routes,
    },
    {
        path: '/path/:method/*',
        component: Route,
    },
    { path: '*', redirect: { path: '/' }}
  ],
})
export default router
