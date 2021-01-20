<template>
  <form id="noteForm" class="m-newNote">
    <label for="title">
      <app-text class="-mb10" color="soft">Başlık giriniz</app-text>
      <input type="text" class="m-newNote__title" placeholder="Başlık giriniz" v-model="formData.title">
    </label>
    <textarea class="m-newNote__type" placeholder="Notunuzu yazmaya başlayın..." v-model="formData.content"></textarea>
    <div class="row">
      <app-button class="-mr20" @click.native="setIsOpenWindow({status: false, component: ''})">Vazgeç</app-button>
      <app-button v-if="getComponentOptions().title !== 'Notu Güncelle'" @click.prevent.native="saveNoteToNoteList()" :class="{'-disabled' : isSaveEnabled}" :disabled="isSaveEnabled">Kaydet</app-button>
      <app-button v-else @click.prevent.native="editNoteToNoteList()" :class="{'-disabled' : isSaveEnabled}" :disabled="isSaveEnabled">Güncelle</app-button>
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
  data() {
    return {
      formData: {
        title: "",
        content: ""
      }
    }
  },
  created() {
    this.formData.title = this.getCurrentItem().title ? this.getCurrentItem().title : '';
    this.formData.content = this.getCurrentItem().content ? this.getCurrentItem().content : '';
  },
  computed: {
    isSaveEnabled() {
      if(this.formData.title !== "" && this.formData.content !== "") {
        return false;
      }

      return true;
    }
  },
  methods: {
    ...mapGetters(["getCurrentItem", "getNoteListSize", "getComponentOptions"]),
    ...mapMutations(["saveNote", "setIsOpenWindow", "editNote"]),
    saveNoteToNoteList() {
      this.saveNote({
        id: this.getNoteListSize() + 1,
        title: this.formData.title,
        content: this.formData.content,
        lastModified: this.getCurrentDate(),
        created: this.getCurrentDate()
      });
    },
    editNoteToNoteList() {
      this.editNote({
        id: this.getCurrentItem().id,
        title: this.formData.title,
        content: this.formData.content,
        lastModified: this.getCurrentDate(),
        created: this.getCurrentItem().created
      });
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
    }

    &__type {
      width: 100%;
      padding: 30px;
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