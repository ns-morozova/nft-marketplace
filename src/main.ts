import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/600.css'
import '@fontsource/space-mono/400.css'
import './styles/main.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
