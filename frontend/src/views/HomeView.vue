<script setup>
  import { getCurrentInstance } from 'vue'

  import BaseView from '@/views/BaseView.vue'

  const app = getCurrentInstance()
  const $ADMIN_URL = app.appContext.config.globalProperties.$ADMIN_URL
</script>

<template>
  <base-view>
    <div class="px-4">
      <div class="is-size-3">Welcome!</div>
      <p>This is a template for an application powered by Vue + Django + PostgreSQL.</p>
      <p>Try CRUD: <router-link to="/notes">/notes</router-link></p>
      <p>Admin panel: <a :href="$ADMIN_URL">{{ $ADMIN_URL }}</a></p>
      <p>Source code: <a href="https://github.com/fomalhaut88/django-vue-template">https://github.com/fomalhaut88/django-vue-template</a></p>
    </div>
  </base-view>
</template>
