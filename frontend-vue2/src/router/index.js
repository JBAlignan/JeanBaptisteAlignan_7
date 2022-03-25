import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeComponent')
  },
  {
    path: '/publications',
    name: 'PostsList',
    component: () => import('../views/PostsListComponent')
  },
  {
  path: '/publications/:id',
  name: 'OnePost',
  component: () => import('../views/OnePostComponent')
}
]

const router = new VueRouter({
  routes
})

export default router
