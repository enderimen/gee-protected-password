<template>
  <section class="m-note">
    <div class="m-note__list" v-if="getNoteListSize > 0">
      <app-note-item v-for="note in getNoteList" :key="note.key" :note="note"></app-note-item>
    </div>

    <app-no-content v-if="getNoteListSize === 0 && getSearchQuery == ''">
      <icon-note class="icon -large -soft"/>
      <app-text tag="h3" size="large" weight="bold" class="-mt20">
          Tüm notlarınızı bir yerden yönetin!
      </app-text>
      <app-text tag="p" weight="thin" class="-mt20">
          Unutmak istemediğiniz notlarınızı GEE kasanıza, hemen kaydetmeye başlayın.
      </app-text>
      <app-button class="-mt20" @click.native="setIsOpenWindow({status: isSettingsPage(), component: getCurrentComponentName()})">{{$t('addNote')}}</app-button>
    </app-no-content>

    <div class="-noResult" v-if="getNoteList.length === 0 && getSearchQuery.length > 0">
      <app-text tag="h3" size="large" weight="bold" color="soft">{{$t("noResultMsg")}}</app-text>
    </div>
  </section>
</template>

<script>
import appNoteItem from '@/components/NoteItem.vue';
import appNoContent from "@/components/NoContent.vue";
import appText from "@/components/Text.vue";
import IconNote from "@/icons/note.svg";
import appButton from "@/components/Button.vue";
import helperFuncs from "@/mixin/index.js";
import { mapGetters, mapMutations } from "vuex";

export default {
    components: {
        appNoteItem,
        appText,
        IconNote,
        appNoContent,
        appButton
    },
    computed: {
      ...mapGetters(["getNoteList", "getNoteListSize", "getSearchQuery"]),
    },
    methods: {
      ...mapMutations(["setIsOpenWindow"]),
        isSettingsPage() {
            return this.getCurrentComponentName() === 'settings' ? false : true;
        }
    },
    mixins: [helperFuncs]
}
</script>

<style lang="scss" scoped>
.m-note {
  margin-left: -20px;
  margin-right: -20px;
  height: calc(100% - var(--header-gap) - 30px);

  &__list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }


  & .-noResult {
    position: absolute;
    top: 50%;
    left: 50%;
  }
}
</style>