<template>
  <header class="m-header">
        <slot />

        <div class="row">
            <button class="choose-theme -mr20" title="Tema seçin"></button>
            <IconBell />
        </div>
  </header>
</template>

<script>
import IconBell from "@/icons/bell.svg";
export default {
    components: {
        IconBell
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

.choose-theme {
    height: 20px;
    width: 20px;
    background-color: var(--active-bg-color);
    border: 2px solid var(--theme-mono-lisa);
    border-radius: 20px;
    cursor: pointer;
    outline: none;
}
</style>