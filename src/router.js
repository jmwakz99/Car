import Vue from 'vue'
import Router from 'vue-router'
import Car from './components/Car'
import CarDetails from './components/CarDetails'
import Register from './components/Register'
import Login from './components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'car',
      component: Car
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cars/:model',
      name: 'CarDetails',
      props: true,
      component: CarDetails
    }
  ]
})
