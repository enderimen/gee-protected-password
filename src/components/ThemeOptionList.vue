<template>
  <section class="m-themeOption__list">
    <app-theme-btn name="bunker" color="bunker">Bunker</app-theme-btn>
    <app-theme-btn name="science-blue" color="science-blue">Science Blue</app-theme-btn>
    <app-theme-btn name="klein-blue" color="klein-blue">Klein Blue</app-theme-btn>
    <app-theme-btn name="day-light" color="day-light">White</app-theme-btn>
    <app-theme-btn name="mona-lisa" color="mona-lisa">Mona Lisa</app-theme-btn>
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
}
</style>