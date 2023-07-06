import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SculpturePage from '../views/SculpturePage.vue'
import PhotographyPage from '../views/PhotographyPage.vue'
import DramaticPage from '../views/DramaticPage.vue'
import OtherPage from '../views/OtherPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/sculpture',
            name: 'sculpture',
            component: SculpturePage
        },
        {
            path: '/photography',
            name: 'photography',
            component: PhotographyPage
        },
        {
            path: '/dramatic',
            name: 'dramatic',
            component: DramaticPage
        },
        {
            path: '/other',
            name: 'other',
            component: OtherPage
        },
    ]
})

export default router
