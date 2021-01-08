<template>
  <section class="m-newNote">
      <label for="title">
        <app-text class="-mb10" color="soft">Başlık giriniz</app-text>
        <input id="title" type="text" class="m-newNote__title" placeholder="Başlık giriniz">
      </label>
      <textarea class="m-newNote__type" placeholder="Notunuzu yazmaya başlayın..."></textarea>
  </section>
</template>

<script>
import appText from './Text.vue'
export default {
  components: { appText },
}
</script>

<style lang="scss">
.m-newNote {
    height: 100%;
    display: flex;
    flex-direction: column;

    & label {
        display: flex;
        flex-direction: column;
    }

    &__title {
        height: 40px;
        margin-bottom: 30px;
        padding-left: 15px;
        padding-right: 15px;
    }

    &__type {
        width: 100%;
        padding: 30px;
        border: 1px solid var(--line-bg-color);
        resize: none;
        margin-bottom: 30px;
        text-align: justify;
        flex: 2;
    }
}
</style>