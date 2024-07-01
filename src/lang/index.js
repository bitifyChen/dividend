import { createI18n } from 'vue-i18n'

import zhCN from './cn.json'
import enUS from './en.json'
import zhTW from './tw.json'
import vi from './vi.json'
import tr from './tr.json'

const getCurrentLang = () => {
  const lang = JSON.parse(localStorage.getItem('lang'))
  return lang?.langKey ? lang?.langKey : 'zh-cn'
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 若 component 只有 template 用到 i18n，可以直接使用 $t，不需在將 t 解構
  locale: getCurrentLang(),
  fallbackLocale: 'zh-cn',
  messages: {
    'zh-cn': zhCN,
    'en-us': enUS,
    'zh-tw': zhTW,
    vi: vi,
    tr: tr
  }
})

export default i18n
