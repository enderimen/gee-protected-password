<template>
  <section class="m-nocontent">
      <slot />
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.m-nocontent {
  height: calc(100% - var(--header-gap));
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>