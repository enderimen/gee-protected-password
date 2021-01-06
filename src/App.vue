<template>
  <div id="app">
    <div class="row">
      <app-sidebar />
      <app-Content>
        <router-view/>
      </app-Content>
    </div>
  </div>
</template>

<script>
import appSidebar from "@/views/Sidebar.vue"
import appContent from "@/views/Content.vue"

export default {
  components: {
    appSidebar,
    appContent
  }
}
</script>

<style lang="scss">
.row {
  display: flex;
}
</style>