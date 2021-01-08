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

export default {
  components: {
    appSidebar,
    appContent,
    appSideWindow
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