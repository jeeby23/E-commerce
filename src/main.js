import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faCcVisa, faCcAmex,faCcMastercard,faCcDiscover,faCcPaypal,faApplePay,faGooglePay,faFacebookF,faTwitter,faInstagram,faPinterest,faTiktok,faYoutube,faSpotify,faFacebook} from '@fortawesome/free-brands-svg-icons'
library.add(fas, faQuoteLeft, faCcVisa, faCcAmex,faCcMastercard,faCcDiscover,faCcPaypal,faApplePay,faGooglePay,faFacebookF,faTwitter,faInstagram,faPinterest,faTiktok,faYoutube,faSpotify,faFacebook);

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .mount('#app')
