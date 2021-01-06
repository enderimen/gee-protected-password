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
body {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}

.row {
  display: flex;
}
</style>