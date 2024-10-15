<script setup>
  import { getCurrentInstance } from 'vue'

  const app = getCurrentInstance()
  const $buefy = app.appContext.config.globalProperties.$buefy
  const $api = app.appContext.config.globalProperties.$api
  const $user = app.appContext.config.globalProperties.$user
  const $ADMIN_URL = app.appContext.config.globalProperties.$ADMIN_URL

  const username = $user.username

  function logoutClick() {
    $buefy.dialog.confirm({
      title: 'Logout',
      message: 'Are you sure you want to log out',
      confirmText: 'Logout',
      cancelText: 'Cancel',
      type: 'is-danger',
      hasIcon: true,
      onConfirm: async () => {
        await $api.users.logout()
        window.location.reload()
      }
    })
  }
</script>

<template>
  <b-navbar type="is-dark">
    <template #brand>
      <b-navbar-item tag="router-link" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" to="/">
        <b-icon icon="information-variant-circle" size="is-small" />
        &nbsp;
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/notes">
        <b-icon icon="menu" size="is-small" />
        &nbsp;
        Notes
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-dropdown :label="username" icon="menu">
        <b-navbar-item tag="a" :href="$ADMIN_URL">
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
