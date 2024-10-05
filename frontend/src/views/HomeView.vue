<template>
  <base-view>
    <div class="px-4">
      <div class="is-size-3">Welcome!</div>
      <p>This is a template for an application powered by Vue + Django + PostgreSQL.</p>
      <p>Try CRUD: <a href="/notes">/notes</a></p>
      <p>Admin panel: <a href="/admin">/admin</a></p>
      <p>Source code: <a href="https://github.com/fomalhaut88/django-vue-template">https://github.com/fomalhaut88/django-vue-template</a></p>
    </div>
  </base-view>
</template>

<script>
  import BaseView from  '@/views/BaseView.vue'

  export default {
    components: {
      BaseView,
    },
  }
</script>
