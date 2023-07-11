import { createRouter, createWebHashHistory } from 'vue-router'
import SplashPage from '../views/SplashPage.vue'
import HomePage from '../views/HomePage.vue'
import SculpturePage from '../views/SculpturePage.vue'
import PhotographyPage from '../views/PhotographyPage.vue'
import DramaticPage from '../views/DramaticPage.vue'
import OtherPage from '../views/OtherPage.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'splash',
            component: SplashPage
        },
        {
            path: '/home',
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
