<template>
  <button class="btn">
      <slot />
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.btn {
    height: 50px;
    width: 150px;
    background-color: var(--theme-bg-color);

    outline: none;
    border: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    color: var(--light-text-color);

    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
}
</style>