import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VImagesPreview from 'v3-img-preview'

const app = createApp(App)

app.use(router)
app.use(VImagesPreview)
app.mount('#app')
