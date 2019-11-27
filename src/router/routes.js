
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/anuncie', component: () => import('pages/Anuncie.vue') },
      { path: '/area-vip', component: () => import('pages/AreaVip.vue') },
      { path: '/parceiros', component: () => import('pages/Parceiros.vue') },
      { path: '/suporte', component: () => import('pages/Suporte.vue') },
      { path: '/perfil', component: () => import('pages/Perfil.vue') },
      { path: '/login', component: () => import('pages/Login.vue') }
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
