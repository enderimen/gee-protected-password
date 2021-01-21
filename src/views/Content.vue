<template>
  <section class="m-content">
      <app-header>
          <app-button :class="{'-hidden' : !isSettingsPage()}" @click.native="setIsOpenWindow({status: isSettingsPage(), component: getCurrentComponentName()})">
              <IconPlus class="icon -small -mr15"/>
              Ekle
          </app-button>
      </app-header>
      <slot/>
  </section>
</template>

<script>
import appHeader from "@/components/Header.vue";
import appButton from "@/components/Button.vue";
import IconPlus from "@/icons/plus.svg";
import { mapMutations } from "vuex";

export default {
    components: {
        appHeader,
        appButton,
        IconPlus
    },
    methods: {
        ...mapMutations(["setIsOpenWindow"]),
        getCurrentComponentName() {
            return this.$router.currentRoute.path.split("/")[1]
        },
        isSettingsPage() {
            return this.getCurrentComponentName() === 'settings' ? false : true;
        }
    }
}
</script>

<style lang="scss" scoped>
.m-content {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    padding-left: 65px;
    padding-right: 65px;
    background: var(--content-bg-texture);
}
</style>