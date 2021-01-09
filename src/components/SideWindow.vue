<template>
  <section class="m-window" :class="{'-opened' : getIsOpenWindow}">
      <header class="m-window__header">
          <app-text tag="p" size="large">{{ getComponentOptions.title }}</app-text>
      </header>
      <div class="m-window__content">
        <component :is="getComponentOptions.name" />
        <div class="group">
            <app-button class="-mr20" @click.native="setIsOpenWindow({status: false, component: ''})">Vazgeç</app-button>
            <app-button>Kaydet</app-button>
        </div>
      </div>
  </section>
</template>

<script>
import appText from './Text.vue';
import appButton from './Button.vue';
import appNewPassword from '@/components/NewPassword.vue';
import appNewNote from '@/components/NewNote.vue';
import appNewAccount from '@/components/NewAccount.vue';
import appThemeOptionList from '@/components/ThemeOptionList.vue';
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    appButton,
    appNewPassword,
    appNewAccount,
    appText,
    appNewNote,
    appThemeOptionList
  },
  computed: {
    ...mapGetters(["getIsOpenWindow", "getComponentOptions"])
  },
  methods: {
    ...mapMutations(["setIsOpenWindow"])
  }
}
</script>

<style lang="scss">
.m-window {
    position: absolute;
    top: 0;
    right: -545px;
    height: 100vh;
    width: 545px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 10px rgba(0,0,0, .1);
    transition: all 300ms;

    &.-opened {
        right: 0;
    }

    &__header {
        height: 150px;
        padding-left: 30px;
        padding-right: 30px;
        color: var(--white);
        background-color: var(--sidemenu-bg-color);

        display: flex;
        align-items: center;
    }

    &__content {
        flex: 2;
        padding: 45px 83px;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .group {
            display: flex;
            justify-content: flex-end;
            width: 100%;
        }
    }
}
</style>