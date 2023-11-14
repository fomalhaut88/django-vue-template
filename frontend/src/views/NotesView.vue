<template>
  <base-view>
    <div class="px-4">
      <div class="is-size-3">Notes</div>
      
      <b-table :data="notes" 
               :columns="columns" 
               :bordered="true"
               :narrowed="true"
               v-if="notes">
        <template #empty>
          <div class="has-text-centered">No records</div>
        </template>
      </b-table>
    </div>
  </base-view>
</template>

<script>
  import BaseView from  '@/views/BaseView.vue'

  export default {
    components: {
      BaseView,
    },
    data() {
      return {
        notes: null,
        columns: [
          {
            field: 'id',
            label: 'ID',
            numeric: true,
            centered: true,
            'header-сlass': 'table-cell',
            'cell-class': 'table-cell',
          },
          {
            field: 'created_at',
            label: 'Created at',
          },
          {
            field: 'text',
            label: 'Text',
          },
        ],
      }
    },
    async mounted() {
      const resp = await this.$api.notes.get()
      this.notes = resp.body
    },
  }
</script>
