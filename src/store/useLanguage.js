import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('lang', {
  persist: true,
  state: () => ({
    langKey: 'zh-cn',
    langList: [
      { key: 'zh-cn', label: '简体中文' },
      { key: 'en-us', label: 'English' },
      { key: 'vi', label: 'Tiếng Việt' }
    ]
  }),
  getters: {
    currentLang: (state) =>
      state.langList.find((e) => e.key === state.langKey)?.label,
    currentLangKey: (state) => state.langKey
  },
  actions: {
    setLang(lang) {
      if (this.langList.find((item) => item.key === lang)) {
        this.langKey = lang
      }
    }
  }
})
