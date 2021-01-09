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
    ...mapMutations(["setThemeName"])
  },
  created() {
    if(localStorage.getItem("theme-name") === null) {
      this.setThemeName("day-light");
    } else {
      this.setThemeName(localStorage.getItem("theme-name"));
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
</style>