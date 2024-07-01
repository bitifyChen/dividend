import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { useElNotification } from '@/components/Two/TwoElNotification.js'
import { useCookies } from '@vueuse/integrations/useCookies'
const cookie = useCookies()

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
    const mobileView = document.getElementById('router-view')
    if (mobileView) mobileView.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

router.beforeEach((to, from, next) => {
  const token = cookie.get('token')
  if (to.meta.requiresAuth && !token) {
    useElNotification('请先登入')
    next({ name: 'LoginPage' })
  } else {
    next()
  }
})

export default router
