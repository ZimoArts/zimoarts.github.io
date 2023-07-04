import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SculptureView from '../views/SculptureView.vue'
import Photography from '../views/Photography.vue'
import Dramatic from '../views/Dramatic.vue'
import Other from '../views/Other.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/sculpture',
            name: 'sculpture',
            component: SculptureView
        },
        {
            path: '/photography',
            name: 'photography',
            component: Photography
        },
        {
            path: '/dramatic',
            name: 'dramatic',
            component: Dramatic
        },
        {
            path: '/other',
            name: 'other',
            component: Other
        },
    ]
})

export default router
