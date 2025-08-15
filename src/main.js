import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   

const app = createApp(App)

 
app.use(router).mount('#app')
App.config.errorHandler = () => {};
if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.error = () => {};
    console.warn = () => {};
}
