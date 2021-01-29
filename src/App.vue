<template>
  <div id="app">
    <div class="row">
      <app-sidebar />
      <app-Content>
        <router-view/>
      </app-Content>
      <app-side-window></app-side-window>
    </div>
  </div>
</template>

<script>
import appSidebar from "@/views/Sidebar.vue";
import appContent from "@/views/Content.vue";
import appSideWindow from '@/components/SideWindow.vue';
import { mapMutations } from "vuex";

export default {
  components: {
    appSidebar,
    appContent,
    appSideWindow
  },
  methods: {
    ...mapMutations(["setThemeName", "setTextureName"])
  },
  created() {
    if(localStorage.getItem("theme-name") === null) {
      this.setThemeName("day-light");
    } else {
      this.setThemeName(localStorage.getItem("theme-name"));
    }

    if(localStorage.getItem("texture-name")) {
      this.setTextureName(localStorage.getItem("texture-name"));
    }
  }
}
</script>

<style lang="scss">
body {
  position: relative;
}
.row {
  display: flex;
}
html:lang(ar) * {
  text-align: right !important;
}
html:lang(ar) .m-password__item .row {
  order: 2;
}
html:lang(ar) .m-password__item svg {
  order: 1;
}
</style>