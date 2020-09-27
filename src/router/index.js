import Vue from 'vue'
import VueRouter from 'vue-router'
import Presentacion from '../components/Presentacion.vue'
import Busquedas from '../components/Busquedas.vue'
import Ventas from '../components/Ventas.vue'
import Total from '../components/Total.vue'
import NotFound from '../components/NotFound.vue'
import listadob from '../components/listadob.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Presentacion
  },
  {
    path: '/busquedas',
    name:'Busquedas',
    component: Busquedas
  },
  {
    path: '/ventas',
    name:'Ventas',
    component: Ventas
  },
  {
    path: '/total',
    name:'Total',
    component: Total
  },
  {
    path: '/*',
    name:'404',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
