<script setup>
  import { computed } from 'vue'
  import { useScreenOrientation } from '@vueuse/core'
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import en from 'element-plus/dist/locale/en.mjs'
  import vi from 'element-plus/dist/locale/vi.mjs'
  import { useLanguageStore } from '@/store/useLanguage.js'

  const piniaLanguage = useLanguageStore()

  //橫向模式
  const { angle } = useScreenOrientation()
  const isLandscape = computed(() => angle.value === 90 || angle.value === 270)
  const currentLangKey = computed(() => piniaLanguage.currentLangKey)

  const mappingLocale = {
    'zh-cn': zhCn,
    'en-us': en,
    vi: vi
  }
  const setLocale = computed(() => mappingLocale[currentLangKey.value])
  /**
   * 暫時關閉，為了修正手機板沙盒問題
   */
  // const visibilityMethod = () => {
  //   document.addEventListener('visibilitychange', function () {
  //     if (document.visibilityState === 'hidden') {
  //       console.log('hidden')
  //     }
  //     // 用户打开或回到页面
  //     if (document.visibilityState === 'visible') {
  //       console.log('show')
  //     }
  //   })
  // }
</script>

<template>
  <div v-show="isLandscape" class="is-landscape-wrap">
    <div class="is-landscape">
      <font-awesome-icon :icon="['fas', 'mobile-screen']" class="icon" />
      <p class="text">橫向模式不支援</p>
    </div>
  </div>
  <div class="relative flex flex-1 flex-col">
    <el-config-provider :locale="setLocale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<style lang="scss">
  html,
  body {
    height: 100%;
    font-size: 14px;
    .el-tour {
      .el-tour__content {
        width: 90%;
      }
      .el-tour__footer {
        .el-button {
          background-color: #f98c11;
          border-radius: 30px;
          border: 1px solid #f98c11;
        }
      }
    }
  }
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
