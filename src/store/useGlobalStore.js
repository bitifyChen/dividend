import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalId', {
  state: () => ({
    routeKey: 0
  }),
  actions: {
    upDateClick() {
      this.routeKey++
    }
  }
})
