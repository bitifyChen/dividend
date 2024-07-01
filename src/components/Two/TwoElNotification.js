import { ElNotification } from 'element-plus'
import { showNotify } from 'vant'
import { isMobile } from '@/unit/useMobile.js'

export const useElNotification = (
  message,
  type = 'error',
  title = null,
  duration = 2000
) => {
  if (!isMobile())
    return new Promise((resolve) => {
      // eslint-disable-next-line no-unused-vars
      const notification = ElNotification({
        title: title || getTypeTitle(type),
        message,
        type,
        duration,
        onClose: () => {
          resolve()
        }
      })
    })
  if (isMobile())
    return showNotify({
      type: getVantType(type),
      message,
      duration
    })
}

const getTypeTitle = (type) => {
  switch (type) {
    case 'success':
      return 'SUCCESS'
    case 'warning':
      return 'WARNING'
    case 'info':
      return 'INFO'
    default:
      return ''
  }
}

const getVantType = (type) => {
  switch (type) {
    case 'info':
      return 'primary'
    case 'error':
      return 'warning'
    default:
      return type
  }
}
