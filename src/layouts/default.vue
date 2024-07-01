<script setup>
  import { computed } from 'vue'
  import { useGlobalStore } from '@/store/useGlobalStore.js'

  const piniaGlobalStore = useGlobalStore()

  const routerKey = computed(() => piniaGlobalStore.routeKey)
</script>

<template>
  <header>header</header>
  <div class="base-wrap flex-1">
    <router-view :key="routerKey" />
  </div>
  <footer>footer</footer>
</template>

<style></style>
