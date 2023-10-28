import { createApp } from 'vue'
import App from './src/App'
// import App from './src/ContextMenuDemo'
;(async () => {
  const app = createApp(App)

  app.mount('#app')
})()
