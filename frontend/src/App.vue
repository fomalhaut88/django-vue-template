<template>
  <div id="app" v-if="isReady">
    <div v-if="$root.$user">
      <router-view />
    </div>

    <div v-else>
      <login-modal ref="refLoginModal" />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  
  import LoginModal from '@/components/LoginModal.vue'

  export default {
    name: 'App',
    components: {
      LoginModal,
    },
    data() {
      return {
        isReady: false,
      }
    },
    async mounted() {
      const csrftoken = this.$cookies.get('csrftoken')
      Vue.http.headers.common['X-CSRFToken'] = csrftoken

      try {
        const resp = await this.$api.users.info()
        this.$root.$user = resp.body
      }
      catch {/**/}

      this.isReady = true
    },
  }
</script>
