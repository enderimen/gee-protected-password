<template>
  <header class="m-header">
        <slot />
        <div class="row">
            <button class="a-themeOption -mr20" title="Tema seçin" @click="setIsOpenWindow({status: true, component: 'theme-option'})"></button>
            <IconBell />
        </div>
  </header>
</template>

<script>
import IconBell from "@/icons/bell.svg";
import { mapMutations } from "vuex";

export default {
    components: {
        IconBell
    },
    methods: {
        ...mapMutations(["setIsOpenWindow"]),
        getCurrentComponentName() {
            return this.$router.currentRoute.path.split("/")[1]
        }
    }
}
</script>

<style lang="scss">
.m-header {
    height: var(--header-gap);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.a-themeOption {
    height: 20px;
    width: 20px;
    background-color: var(--active-bg-color);
    border: 2px solid var(--theme-mono-lisa);
    border-radius: 20px;
    cursor: pointer;
    outline: none;
}
</style>