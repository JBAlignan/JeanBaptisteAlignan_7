import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView')
  },
  {
    path: '/profil/:id',
    name: 'Profil',
    component: () => import ('../views/ProfilView')
  },
  {
    path: '/profil/:id/update',
    name: 'UpdateProfil',
    component: () => import ('../views/UpdateProfil')
  },
  {
    path: '/publications',
    name: 'PostsList',
    component: () => import('../views/PostsListView')
  },
  {
  path: '/publications/:id',
  name: 'OnePost',
  component: () => import('../views/OnePostView')
}
]

const router = new VueRouter({
  routes
})

export default router
