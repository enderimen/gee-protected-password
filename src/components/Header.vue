<template>
  <header class="m-header">
        <slot />
        <div class="m-searchArea" v-if="getCurrentComponentName() !== 'settings'">
          <input type="text" class="m-search__input -mr20" placeholder="Hesap, not ya da e-posta arayın" @input="getSearchQuery">
        </div>
        <div class="row">
            <app-text color="soft" class="-mr10">Hoşgeldin, Ender!</app-text>
            <button class="a-themeOption -mr20" title="Tema seçin" @click="setIsOpenWindow({status: true, component: 'theme-option'})"></button>
            <IconBell class="icon -black" />
        </div>
  </header>
</template>

<script>
import IconBell from "@/icons/bell.svg";
import appText from './Text.vue';
import helperFuncs from '@/mixin/index.js';
import { mapMutations } from "vuex";

export default {
    components: {
        IconBell,
        appText
    },
    methods: {
        ...mapMutations(["setIsOpenWindow", "setSearchQuery"]),
        getSearchQuery(event) {
            this.setSearchQuery(event.target.value);
        }
    },
    mixins: [helperFuncs]
}
</script>

<style lang="scss" scoped>
.m-header {
    height: var(--header-gap);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    & .row {
        display: flex;
        align-items: center;
        height: inherit;
        margin-left: auto;
    }
}
.m-search {

    &Area {
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: .5;
      padding-left: 20px;
      margin-left: auto;
      margin-right: auto;
    }

    &__input {
        box-sizing: border-box;
        padding: 15px 20px;
        height: 50px;
        text-align: center;
        color: var(--soft-icon-color);
        font-size: 16px;
        font-weight: 300;
        background-color: var(--white);
        border-radius: 10px;
        border: 1px solid var(--line-bg-color);
        outline: none;
    }

    &::placeholder {
      color: var(--soft-icon-color);
    }
}

.a-themeOption {
    height: 20px;
    width: 20px;
    background-color: var(--active-bg-color);
    border: 2px solid var(--white);
    border-radius: 20px;
    cursor: pointer;
    outline: none;
}
</style>