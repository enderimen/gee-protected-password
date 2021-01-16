<template>
  <section>
    <app-text tag="h3" color="soft">Renkler</app-text>
    <section class="m-themeOption__list">
      <app-theme-btn title="colors" name="bunker" color="bunker">Bunker</app-theme-btn>
      <app-theme-btn title="colors" name="science-blue" color="science-blue">Science Blue</app-theme-btn>
      <app-theme-btn title="colors" name="klein-blue" color="klein-blue">Klein Blue</app-theme-btn>
      <app-theme-btn title="colors" name="day-light" color="day-light">White</app-theme-btn>
      <app-theme-btn title="colors" name="mona-lisa" color="mona-lisa">Mona Lisa</app-theme-btn>
    </section>
    <app-text tag="h3"  color="soft" class="-mt20">Dokular</app-text>
    <section class="m-themeOption__list">
      <app-theme-btn title="textures" name="skulls" color="skulls">Skulls</app-theme-btn>
      <app-theme-btn title="textures" name="white-leather" color="white-leather">White Leather</app-theme-btn>
      <app-theme-btn title="textures" name="flowers" color="flowers">Flowers</app-theme-btn>
      <app-theme-btn title="textures" name="xv" color="xv">Xv</app-theme-btn>
    </section>
  </section>
</template>

<script>
import appText from './Text.vue'
import appThemeBtn from './ThemeBtn.vue'
export default {
  components: { appThemeBtn, appText },
}
</script>

<style lang="scss" scoped>
.m-themeOption__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  overflow-y: scroll;
}
</style>