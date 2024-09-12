import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

try {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
  console.log('Vue app mounted successfully')
} catch (error) {
  console.error('Error initializing Vue app:', error)
  document.body.innerHTML += `<p>Error initializing Vue app: ${error.message}</p>`
}