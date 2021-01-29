<template>
  <form id="noteForm" class="m-newNote">
    <label for="title">
      <app-text class="-mb10" color="soft">Başlık giriniz</app-text>
      <input type="text" id="title" class="m-newNote__title" placeholder="Başlık giriniz" :value="title">
    </label>
    <textarea class="m-newNote__type" id="content" placeholder="Notunuzu yazmaya başlayın..." :value="content"></textarea>
    <div class="row">
      <app-button class="-mr20" @click.prevent.native="setIsOpenWindow({status: false, component: ''})">Kapat</app-button>
      <app-button v-if="getComponentOptions().title !== 'Notu Güncelle'" @click.prevent.native="saveNoteToNoteList()">Kaydet</app-button>
      <app-button v-else @click.prevent.native="editNoteToNoteList()" :class="{'-updated' : isUpdated}">{{ isUpdated ? "Güncellendi" : "Güncelle"}}</app-button>
    </div>
  </form>
</template>

<script>
import appText from './Text.vue';
import appButton from './Button.vue';
import helperFuncs from "@/mixin/index.js";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    appText,
    appButton
  },
  data() {
    return {
      isUpdated: false
    }
  },
  computed: {
    title() {
        return this.getCurrentItem() ? this.getCurrentItem().title : "";
    },
    content() {
        return this.getCurrentItem() ? this.getCurrentItem().content : "";
    }
  },
  methods: {
    ...mapGetters(["getCurrentItem", "getNoteListSize", "getComponentOptions"]),
    ...mapMutations(["saveNote", "setIsOpenWindow", "editNote", "setCurrentItem"]),
    saveNoteToNoteList() {
      const title = document.getElementById("title").value;
      const content = document.getElementById("content").value;

      const currentNote = {
        id: this.getNoteListSize() + 1,
        title: title,
        content: content,
        lastModified: this.getCurrentDate(),
        created: this.getCurrentDate()
      }

      this.saveNote(currentNote);
    },
    editNoteToNoteList() {
      const title = document.getElementById("title").value;
      const content = document.getElementById("content").value;

      const currentNote = {
        id: this.getCurrentItem().id,
        title: title,
        content: content,
        lastModified: this.getCurrentDate(),
        created: this.getCurrentItem().created
      }

      this.editNote(currentNote);

      this.setCurrentItem(currentNote);

      this.isUpdated = true;

      setTimeout(() => {
          this.isUpdated = false;
      }, 2000);
    }
  },
  mixins: [helperFuncs]
}
</script>

<style lang="scss" scoped>
.m-newNote {
    height: 100%;
    display: flex;
    flex-direction: column;

    & label {
      display: flex;
      flex-direction: column;
    }

    &__title {
      height: 40px;
      margin-bottom: 30px;
      padding-left: 15px;
      padding-right: 15px;
      border: 1px solid var(--line-bg-color);
    }

    &__type {
      width: 100%;
      padding: 15px;
      border: 1px solid var(--line-bg-color);
      resize: none;
      margin-bottom: 30px;
      text-align: justify;
      flex: 2;
    }

    & .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
    }
}
</style>