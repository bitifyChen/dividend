import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store/index.js'
import router from './router/router.js'
import i18n from './lang'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'vant/lib/index.css'
import './index.css'
import '@/assets/main.scss' // 引入全局样式
import 'element-plus/dist/index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)
const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')
