<template>
  <b-modal has-modal-card :can-cancel="false" v-model="isShown">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
        </header>
        <section class="modal-card-body">
          <b-notification type="is-danger is-light" v-if="errorMessage">
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

<script>
  export default {
    data() {
      return {
        isShown: true,
        username: '',
        password: '',
        errorMessage: null,
      }
    },
    methods: {
      async loginClick() {
        try {
          await this.$api.users.login({
            username: this.username,
            password: this.password,
          })
          window.location.reload()
        }
        catch (err) {
          this.errorMessage = err.body.detail
        }
      },
    },
  }
</script>
