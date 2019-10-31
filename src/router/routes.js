
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/anuncie', component: () => import('pages/Anuncie.vue') },
      { path: '/area-vip', component: () => import('pages/AreaVip.vue') },
      { path: '/fale-conosco', component: () => import('pages/FaleConosco.vue') },
      { path: '/perfil', component: () => import('pages/Perfil.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
