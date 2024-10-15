<script setup>
  import { ref, onMounted } from 'vue'
  
  import BaseView from '@/views/BaseView.vue'

  let notes = ref(null)

  onMounted(async () => {
    notes.value = [
      {id: 1, created_at: "2024-10-14T21:55:29Z", text: "yes"}
    ]
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
      
      <b-table :data="notes" bordered narrowed hoverable
               @click="$refs.refNoteModal.show($event.id)" v-if="notes">
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

    <!-- <note-modal ref="refNoteModal" /> -->
  </base-view>
</template>
