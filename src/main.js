import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import foxPreviewImage from "fox-preview-image";
import "fox-preview-image/lib/style.css";

const app = createApp(App)

app.use(router)
app.use(foxPreviewImage)
app.mount('#app')
