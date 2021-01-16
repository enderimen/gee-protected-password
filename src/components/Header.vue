<template>
  <header class="m-header">
        <slot />
        <div class="row">
            <app-text color="soft" class="-mr10">Hoşgeldin, Ender!</app-text>
            <button class="a-themeOption -mr20" title="Tema seçin" @click="setIsOpenWindow({status: true, component: 'theme-option'})"></button>
            <IconBell class="icon -black" />
        </div>
  </header>
</template>

<script>
import IconBell from "@/icons/bell.svg";
import { mapMutations } from "vuex";
import appText from './Text.vue';

export default {
    components: {
        IconBell,
        appText
    },
    methods: {
        ...mapMutations(["setIsOpenWindow"])
    }
}
</script>

<style lang="scss" scoped>
.m-header {
    height: var(--header-gap);
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .row {
        display: flex;
        align-items: center;
        height: inherit;
        margin-left: auto;
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