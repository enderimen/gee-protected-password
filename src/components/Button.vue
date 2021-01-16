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
    background-color: var(--button-bg-color);
    border: 1px solid var(--button-border-color)!important;
    user-select: none;

    outline: none;
    border: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    color: var(--button-text-color);

    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

    &.-hidden {
      display: none;
    }
}
</style>