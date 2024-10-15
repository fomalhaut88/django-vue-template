<script setup>
  import BaseView from '@/views/BaseView.vue'

  function getURL() {
    return window.location.href
  }
</script>

<template>
  <base-view>
    <div class="px-4">
      <div class="is-size-3">Error 404. </div>
      Page not found:
      <a :href="getURL()">{{ getURL() }}</a>
    </div>
  </base-view>
</template>
