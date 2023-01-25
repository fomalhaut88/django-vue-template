<template>
  <base-view>
    <div class="px-4">
      <div class="is-size-3">Welcome!</div>
      <p>This is a template for an application powered by Vue + Django + PostgreSQL.</p>
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
