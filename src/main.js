import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import 'bootstrap/dist/css/bootstrap.css'
createApp(App).use(store).use(router).use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBT5kuu8jag-YzjpqOahSjCEm4xEpEIfS8'
    }
  }).mount('#app')
