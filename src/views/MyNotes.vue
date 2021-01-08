<template>
  <section class="m-note">
    <div class="m-note__list">
      <app-note-item v-for="note in getNoteList()" :key="note.id" :note="note"></app-note-item>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import appNoteItem from '../components/NoteItem.vue';

export default {
    components: {
        appNoteItem
    },
    methods: {
      ...mapGetters(["getNoteList"])
    }
}
</script>

<style lang="scss">
.m-note {
  padding-top: 30px;
  margin-left: -20px;
  margin-right: -20px;
  height: calc(100% - var(--header-gap));

  &__list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>