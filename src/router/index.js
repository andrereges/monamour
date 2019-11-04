import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import Cabecalho from '../components/Cabecalho'
import Filtro from '../components/Filtro'
import Carrossel from '../components/Carrossel'
import Dialog from '../components/Dialog'
import Thumbnails from '../components/Thumbnails'
import VideoSlide from '../components/VideoSlide'
import Imagem from '../components/Imagem'
import Rodape from '../components/Rodape'
import Menu from '../components/Menu'

Vue.use(VueRouter)
Vue.component('cabecalho', Cabecalho)
Vue.component('filtro', Filtro)
Vue.component('carrossel', Carrossel)
Vue.component('dialog', Dialog)
Vue.component('thumbnails', Thumbnails)
Vue.component('video-slide', VideoSlide)
Vue.component('imagem', Imagem)
Vue.component('rodape', Rodape)
Vue.component('menu', Menu)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
