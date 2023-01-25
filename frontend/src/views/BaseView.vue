<template>
  <div>
    <header-div />

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import HeaderDiv from '@/components/HeaderDiv.vue'

  export default {
    components: {
      HeaderDiv,
    },
  }
</script>
