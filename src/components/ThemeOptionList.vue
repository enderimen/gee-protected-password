<template>
  <section class="m-themeOption__list">
    <app-theme-btn name="mona-lisa" color="mono-lisa" checked="true">Mona Lisa</app-theme-btn>
    <app-theme-btn name="mona-liq" color="bunker">Mona Lisa</app-theme-btn>
    <app-theme-btn name="mona-liw" color="science-blue">Mona Lisa</app-theme-btn>
  </section>
</template>

<script>
import Button from './Button.vue'
import appThemeBtn from './ThemeBtn.vue'
export default {
  components: { appThemeBtn },
}
</script>

<style lang="scss">
.m-themeOption__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  padding-top: 43px;
  height: 100%;
  overflow-y: scroll;
  color: red;
}
</style>