<template>
  <section class="m-note">
    <div class="m-note__list" v-if="getNoteList().length > 0">
      <app-note-item v-for="note in getNoteList()" :key="note.id" :note="note"></app-note-item>
    </div>

    <app-no-content v-else>
      <icon-note class="icon -large -soft"/>
      <app-text tag="h3" size="large" weight="bold" class="-mt20">
          Tüm notlarınızı bir yerden yönetin!
      </app-text>
      <app-text tag="p" weight="thin" class="-mt20">
          Unutmak istemediğiniz notlarınızı GEE kasanıza, hemen kaydetmeye başlayın.
      </app-text>
      <app-button class="-mt20" @click.native="setIsOpenWindow({status: isSettingsPage(), component: getCurrentComponentName()})">Yeni Not</app-button>
    </app-no-content>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import appNoteItem from '@/components/NoteItem.vue';
import appNoContent from "@/components/NoContent.vue";
import appText from "@/components/Text.vue";
import IconNote from "@/icons/note.svg";
import appButton from "@/components/Button.vue";

export default {
    components: {
        appNoteItem,
        appText,
        IconNote,
        appNoContent,
        appButton
    },
    methods: {
      ...mapGetters(["getNoteList"]),
      ...mapMutations(["setIsOpenWindow"]),
        getCurrentComponentName() {
            return this.$router.currentRoute.path.split("/")[1]
        },
        isSettingsPage() {
            return this.getCurrentComponentName() === 'settings' ? false : true;
        }
    }
}
</script>

<style lang="scss" scoped>
.m-note {
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