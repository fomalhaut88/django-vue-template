<script setup>
  import { ref, getCurrentInstance } from 'vue'

  const app = getCurrentInstance()
  const $api = app.appContext.config.globalProperties.$api

  const itemDefault = {
    id: null,
    text: "",
  }

  let isShown = ref(false)
  let errorMessage = ref(null)
  let item = ref(itemDefault)

  async function show(itemId) {
    if (itemId !== undefined) {
      await load(itemId)
    } else {
      item.value = itemDefault
    }
    isShown.value = true
  }

  function hide() {
    isShown.value = false
  }

  async function load(itemId) {
    const resp = await $api.notes.get({id: itemId})
    item.value = resp.data
  }

  async function saveClick() {
    let resp = null;
    if (item.value.id !== null) {
      resp = await $api.notes.update({id: item.value.id}, item.value)
    } else {
      resp = await $api.notes.save(item.value)
    }
    if ([200, 201].includes(resp.status)) {
      window.location.reload()
    } else {
      errorMessage.value = resp.data.detail
    }
  }

  async function deleteClick() {
    const resp = await $api.notes.delete({id: item.value.id})
    if (resp.status == 204) {
      window.location.reload()
    } else {
      errorMessage.value = resp.data.detail
    }
  }

  defineExpose({
    show,
    hide,
  })
</script>

<template>
  <b-modal has-modal-card :can-cancel="true" v-model="isShown">
    <form action="">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <span v-if="item.id">Edit note [id={{ item.id }}]</span>
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
                v-model="item.text"
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
              v-if="item.id" />
          <b-button
              label="Cancel"
              type="default"
              @click="hide()" />
        </footer>
      </div>
    </form>
  </b-modal>
</template>
