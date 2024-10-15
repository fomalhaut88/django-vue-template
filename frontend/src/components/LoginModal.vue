<script setup>
  import { ref, getCurrentInstance } from 'vue'

  const app = getCurrentInstance()
  const $api = app.appContext.config.globalProperties.$api

  let isShown = ref(true)
  let username = ref("")
  let password = ref("")
  let errorMessage = ref(null)

  async function loginClick() {
    const resp = await $api.users.login(null, {
      username: username.value,
      password: password.value,
    })
    if (resp.status == 200) {
      window.location.reload()
    } else {
      errorMessage.value = resp.data.detail
    }
  }
</script>

<template>
  <b-modal has-modal-card :can-cancel="false" v-model="isShown">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
        </header>
        <section class="modal-card-body">
          <b-notification type="is-danger is-light" :closable="false" 
                          v-if="errorMessage">
            {{ errorMessage }}
          </b-notification>

          <b-field label="Username">
            <b-input
                type="text"
                v-model="username"
                placeholder="Enter username"
                required>
            </b-input>
          </b-field>

          <b-field label="Password">
            <b-input
                type="password"
                v-model="password"
                password-reveal
                placeholder="Enter password"
                required>
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <b-button
              label="Login"
              type="is-primary"
              @click="loginClick()"
              :disabled="!(username && password)" />
        </footer>
      </div>
    </form>
  </b-modal>
</template>
