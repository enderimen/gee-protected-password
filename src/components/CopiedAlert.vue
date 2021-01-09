<template>
  <div class="m-copied" :class="{'-hasWindow' : getIsOpenWindow()}" data-copy-alert>Parola kopyalandı 🎉</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    ...mapGetters(["getIsOpenWindow"])
  }
}
</script>

<style lang="scss">
.m-copied {
    position: fixed;
    right: 0px;
    bottom: 80px;
    transform: translateX(100%);
    z-index: 999;

    display: flex;
    align-items: center;
    text-align: center;
    padding: 18px 30px;

    background-color: var(--alert-bg-color);
    color: var(--white);

    font-family: var(--font-family);
    border-radius: 30px;
    box-shadow: 0px 8px 10px rgba(0,0,0, .1);
    transition: all 300ms;

    &.-copied {
        transform: translateX(-83px);
    }

    &.-hasWindow {
      bottom: 120px;
    }
}
</style>