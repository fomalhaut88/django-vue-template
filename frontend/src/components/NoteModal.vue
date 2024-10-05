<template>
  <b-modal has-modal-card :can-cancel="true" v-model="isShown">
    <form action="">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <span v-if="note.id">Edit note [id={{ note.id }}]</span>
            <span v-else>New note</span>
          </p>
          <button type="button" class="delete" @click="hide()" />
        </header>
        <section class="modal-card-body">
          <b-notification type="is-danger is-light" :closable="false"
                          v-if="errorMessage">
            {{ errorMessage }}
          </b-notification>

          <b-field label="Text">
            <b-input
                type="textarea"
                v-model="note.text"
                placeholder="Enter text"
                required>
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <b-button
              label="Save"
              type="is-primary"
              @click="saveClick()" />
          <b-button
              label="Delete"
              type="is-danger"
              @click="deleteClick()"
              v-if="note.id" />
          <b-button
              label="Cancel"
              type="default"
              @click="hide()" />
        </footer>
      </div>
    </form>
  </b-modal>
</template>

<script>
  export default {
    data() {
      return {
        isShown: false,
        errorMessage: null,
        note: {
          id: null,
          text: "",
        },
      }
    },
    methods: {
      async saveClick() {
        try {
          if (this.note.id !== null) {
            await this.$api.notes.update({id: this.note.id}, this.note)
          } else {
            await this.$api.notes.save(this.note)
          }
          window.location.reload()
        }
        catch (err) {
          this.errorMessage = err.body.detail
        }
      },

      async deleteClick() {
        try {
          await this.$api.notes.delete({id: this.note.id})
          window.location.reload()
        }
        catch (err) {
          this.errorMessage = err.body.detail
        }
      },

      async load(noteId) {
        const resp = await this.$api.notes.get({id: noteId})
        this.note = resp.body
      },

      async show(noteId) {
        if (noteId !== undefined) {
          await this.load(noteId)
        } else {
          this.note = {
            id: null,
            text: "",
          }
        }
        this.isShown = true
      },

      hide() {
        this.isShown = false
      },
    },
  }
</script>
