<template>
  <div id="app">
    <div class="row" v-if="isAuthenticated()">
      <app-sidebar />
      <app-Content>
        <router-view/>
      </app-Content>
      <app-side-window></app-side-window>
    </div>
    <app-login-template v-else>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </app-login-template>
  </div>
</template>

<script>
import appSidebar from "@/views/Sidebar.vue";
import appContent from "@/views/Content.vue";
import appSideWindow from '@/components/SideWindow.vue';
import appLoginTemplate from "@/components/LoginTemplate.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    appSidebar,
    appContent,
    appSideWindow,
    appLoginTemplate
  },
  methods: {
    ...mapMutations(["setThemeName", "setTextureName"]),
    ...mapGetters(["isAuthenticated"])
  },
  created() {
    this.$store.dispatch("initAuth");
    this.$store.dispatch("fetchPasswordList");
    this.$store.dispatch("fetchNoteListFromServer");

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
.fade-enter-active, .fade-leave-active {
  transition: opacity .200s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>