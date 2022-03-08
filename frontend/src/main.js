import { createApp } from 'vue'
import App from './App.vue'


// Importation de Bootstrap.
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/css/app.css'

// Importation de VueRouter.
import * as VueRouter from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import FormComponent from './components/FormComponent.vue'
import PostsComponent from './components/PostsComponent'


// Configuration de VueRouter
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Header',
            component: HeaderComponent
        },
        {
            path: '/',
            name: 'Footer',
            component: FooterComponent
        },
        {
            path: '/',
            name: 'LoginSignUp',
            component: FormComponent
        },
        {
            path: '/publications',
            name: 'PostsComponent',
            component: PostsComponent
        }
    ]
})

const app = createApp(App)
app.use(router).mount('#app')
// app.mount('app')
