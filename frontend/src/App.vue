<script setup>
  import LoginModal from '@/components/LoginModal.vue'
  import { ref, onMounted, getCurrentInstance } from 'vue'

  const app = getCurrentInstance()
  const $cookies = app.appContext.config.globalProperties.$cookies
  const $axios = app.appContext.config.globalProperties.axios
  const $api = app.appContext.config.globalProperties.$api

  let isReady = ref(false)
  
  onMounted(async () => {
    // Set X-CSRFToken from the cookie csrftoken for all requests
    $axios.defaults.headers.common['X-CSRFToken'] = $cookies.get('csrftoken')

    // Try to set user data
    const resp = await $api.users.info()
    if (resp.status == 200) {
      app.appContext.config.globalProperties.$user = resp.data
    }
    isReady.value = true
  })

  function isAuthenticated() {
    return app.appContext.config.globalProperties.$user !== null
  }
</script>

<template>
  <div v-if="isReady">
    <div v-if="isAuthenticated()">
      <router-view />
    </div>
    <div v-else>
      <login-modal />
    </div>
  </div>
</template>
