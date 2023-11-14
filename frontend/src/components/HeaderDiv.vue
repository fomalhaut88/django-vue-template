<template>
  <b-navbar type="is-dark">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/logo.png">
      </b-navbar-item>
    </template>

    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <b-icon icon="information-variant-circle" size="is-small" />
        &nbsp;
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/notes' }">
        <b-icon icon="menu" size="is-small" />
        &nbsp;
        Notes
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-dropdown :label="$root.$user.first_name || 'User'" icon="menu">
        <b-navbar-item tag="a" href="/admin" v-if="$root.$user.is_staff">
          <b-icon icon="security" size="is-small" />
          &nbsp;
          Admin
        </b-navbar-item>
        <b-navbar-item tag="a" to="#" @click="logoutClick()">
          <b-icon icon="logout" size="is-small" />
          &nbsp;
          Logout
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
  export default {
    methods: {
      logoutClick() {
        this.$buefy.dialog.confirm({
          title: 'Logout',
          message: 'Are you sure you want to log out',
          confirmText: 'Logout',
          cancelText: 'Cancel',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: async () => {
            await this.$api.users.logout()
            window.location.reload()
          }
        })
      },
    },
  }
</script>
