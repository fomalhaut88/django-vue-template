<script setup>
  import { inject, onBeforeMount, getCurrentInstance } from 'vue'

  onBeforeMount(async () => {
    const app = getCurrentInstance()
    const $cookies = app.appContext.config.globalProperties.$cookies
    const axios = app.appContext.config.globalProperties.axios

    const csrftoken = $cookies.get('csrftoken')

    const resp = await axios.post(
      "http://dev.local/api-auth/login/",
      {
        username: "admin",
        password: "qwerty123",
        csrfmiddlewaretoken: csrftoken,
        next: location.href,
      },
      {
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    )
    console.log(resp)
  })
</script>

<template>
  <router-view />
</template>
