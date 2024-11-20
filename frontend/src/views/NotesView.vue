<script setup>
  import { ref, onMounted, getCurrentInstance } from 'vue'
  
  import BaseView from '@/views/BaseView.vue'
  import NoteModal from '@/components/NoteModal.vue'

  const app = getCurrentInstance()
  const $api = app.appContext.config.globalProperties.$api

  let items = ref(null)

  onMounted(async () => {
    const resp = await $api.notes.get()
    items.value = resp.data
  })
</script>

<template>
  <base-view>
    <div class="px-4">
      <div class="is-size-3">Notes</div>

      <div class="py-2">
        <b-button type="is-success" size="is-small"
                  @click="$refs.refNoteModal.show()">
          <b-icon icon="plus" size="is-small" />
          New note
        </b-button>
      </div>
      
      <b-table :data="items" bordered narrowed hoverable
               @click="$refs.refNoteModal.show($event.id)" v-if="items">
        <b-table-column field="id" label="ID" numeric centered v-slot="props">
          {{ props.row.id }}
        </b-table-column>

        <b-table-column field="created_at" label="Created at" v-slot="props">
          {{ new Date(props.row.created_at).toLocaleString() }}
        </b-table-column>

        <b-table-column field="text" label="Text" v-slot="props">
          {{ props.row.text }}
        </b-table-column>

        <template #empty>
          <div class="has-text-centered">No records</div>
        </template>
      </b-table>
    </div>

    <note-modal ref="refNoteModal" />
  </base-view>
</template>
