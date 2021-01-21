<template>
  <section class="o-themeOption">
    <app-text tag="h3" color="soft">Renkler</app-text>
    <section class="m-themeOption__list">
      <app-theme-btn title="colors" name="bunker" color="bunker">Bunker</app-theme-btn>
      <app-theme-btn title="colors" name="science-blue" color="science-blue">Science Blue</app-theme-btn>
      <app-theme-btn title="colors" name="klein-blue" color="klein-blue">Klein Blue</app-theme-btn>
      <app-theme-btn title="colors" name="day-light" color="day-light">White</app-theme-btn>
      <app-theme-btn title="colors" name="mona-lisa" color="mona-lisa">Mona Lisa</app-theme-btn>
    </section>
    <app-text tag="h3"  color="soft" class="-mt20">Dokular</app-text>
    <section class="m-textureOption__list">
      <app-theme-btn title="textures" name="skulls" color="skulls">Skulls</app-theme-btn>
      <app-theme-btn title="textures" name="white-leather" color="white-leather">White Leather</app-theme-btn>
      <app-theme-btn title="textures" name="flowers" color="flowers">Flowers</app-theme-btn>
      <app-theme-btn title="textures" name="xv" color="xv">Xv</app-theme-btn>
    </section>

    <div class="row">
      <app-button class="-mr20" @click.native="setIsOpenWindow({status: false, component: ''})">Kapat</app-button>
    </div>
  </section>
</template>

<script>
import appText from './Text.vue';
import appButton from './Button.vue';
import appThemeBtn from './ThemeBtn.vue';
import { mapMutations } from "vuex";

export default {
  components: {
    appThemeBtn,
    appText,
    appButton
  },
  methods: {
    ...mapMutations(["setIsOpenWindow"]),
  }
}
</script>

<style lang="scss" scoped>
.o-themeOption {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & .row {
    display: flex;
    justify-content: flex-end;
  }
}

.m-themeOption__list, .m-textureOption__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  overflow-y: scroll;
}
</style>