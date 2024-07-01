export const isMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  const mobileDevices = [
    'ipad',
    'iphone os',
    'midp',
    'rv:1.2.3.4',
    'ucweb',
    'android',
    'windows ce',
    'windows mobile'
  ]
  // 检查是否为触摸设备
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  // 检查用户代理字符串是否包含任何移动设备标识符
  const isMobileDevice = mobileDevices.some((device) =>
    userAgent.includes(device)
  )

  return isMobileDevice || isTouchDevice
}
