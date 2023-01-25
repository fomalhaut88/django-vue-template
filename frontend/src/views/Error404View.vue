<template>
  <base-view>
    <div class="px-4">
      <div class="is-size-3">Error 404. </div>
      Page not found:
      <a :href="getURL()">{{ getURL() }}</a>
    </div>
  </base-view>
</template>

<script>
  import BaseView from '@/views/BaseView'

  export default {
    components: {
      BaseView,
    },
    methods: {
      getURL() {
        return window.location.href
      },
    },
  }
</script>
