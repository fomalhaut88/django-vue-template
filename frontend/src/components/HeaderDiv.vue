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
      </template>
    </b-navbar>
</template>
