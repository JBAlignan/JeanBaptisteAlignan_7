import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/FormComponent')
  },
  {
    path: '/publications',
    name: 'PostsList',
    component: () => import('../components/PostsListComponent')
  },
  {
  path: '/publications/:id',
  name: 'OnePost',
  component: () => import('../components/OnePostComponent')
}
]

const router = new VueRouter({
  routes
})

export default router
