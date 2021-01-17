<template>
  <section class="m-newNote">
      <label for="title">
        <app-text class="-mb10" color="soft">Başlık giriniz</app-text>
        <input id="title" type="text" class="m-newNote__title" placeholder="Başlık giriniz" :value="getCurrentItem().title ? getCurrentItem().title : ''">
      </label>
      <textarea class="m-newNote__type" placeholder="Notunuzu yazmaya başlayın..." :value="getCurrentItem().content"></textarea>
  </section>
</template>

<script>
import appText from './Text.vue';
import { mapGetters } from "vuex";

export default {
  components: { appText },
  methods: {
    ...mapGetters(["getCurrentItem"])
  }
}
</script>

<style lang="scss" scoped>
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