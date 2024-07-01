<script setup>
  import { ref } from 'vue'
  import { getUser } from '@/api/user.js'
  import { useElNotification } from '@/components/Two/TwoElNotification.js'
  import { useCookies } from '@vueuse/integrations/useCookies'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const cookie = useCookies()
  const list = ref([])
  const getUserMethod = () => {
    getUser().then((res) => {
      list.value = res
    })
  }
  const params = ref({
    username: '',
    password: ''
  })
  const loginMethod = async () => {
    if (list.value.length === 0) await getUserMethod() //如已經有資料就不再次請求
    const _findUser = list.value.find(
      (e) =>
        e.username === params.value.username &&
        e.password === params.value.password
    )
    if (_findUser) {
      cookie.set('token', _findUser.token)
      useElNotification('登入成功', 'success')
      router.push({ name: 'IndexPage' })
    } else {
      useElNotification('帳密錯誤')
    }
  }
</script>

<template>
  <el-input type="text" v-model="params.username" />
  <el-input type="password" v-model="params.password" />
  <button @click="loginMethod">登入</button>

  <router-link to="/register">註冊</router-link>
</template>

<style scoped lang="scss"></style>

<route>
  {
    name: "LoginPage",
    meta: {
      layout: "empty"
    }
  }
</route>
