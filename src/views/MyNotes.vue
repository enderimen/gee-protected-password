<template>
  <section class="m-note">
    <div class="m-note__list">
      <div class="m-note__item">
        <header class="m-note__header">
          <app-text size="small" weight="bold">Test Notu</app-text>
          <IconDelete class="icon -black"/>
        </header>
        <article class="m-note__content">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore adipisci nisi repellendus consectetur suscipit rem maxime culpa ex molestias. Esse!
        </article>
      </div>

      <div class="m-note__item">
        <header class="m-note__header">
          <app-text size="small" weight="bold">Test Notu</app-text>
          <IconDelete class="icon -black"/>
        </header>
        <article class="m-note__content">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit.
        </article>
      </div>

      <div class="m-note__item">
        <header class="m-note__header">
          <app-text size="small" weight="bold">Test Notu</app-text>
          <IconDelete class="icon -black"/>
        </header>
        <article class="m-note__content">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit.
        </article>
      </div>

      <div class="m-note__item">
        <header class="m-note__header">
          <app-text size="small" weight="bold">Test Notu</app-text>
          <IconDelete class="icon -black"/>
        </header>
        <article class="m-note__content">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit
        </article>
      </div>

      <div class="m-note__item">
        <header class="m-note__header">
          <app-text size="small" weight="bold">Test Notu</app-text>
          <IconDelete class="icon -black"/>
        </header>
        <article class="m-note__content">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit
        </article>
      </div>

      <div class="m-note__item">
        <header class="m-note__header">
          <app-text size="small" weight="bold">Test Notu</app-text>
          <IconDelete class="icon -black"/>
        </header>
        <article class="m-note__content">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit
        </article>
      </div>
      <div class="m-note__item">
        <header class="m-note__header">
          <app-text size="small" weight="bold">Test Notu</app-text>
          <IconDelete class="icon -black"/>
        </header>
        <article class="m-note__content">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit
        </article>
      </div>
      <div class="m-note__item">
        <header class="m-note__header">
          <app-text size="small" weight="bold">Test Notu</app-text>
          <IconDelete class="icon -black"/>
        </header>
        <article class="m-note__content">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit
        </article>
      </div>
      <div class="m-note__item">
        <header class="m-note__header">
          <app-text size="small" weight="bold">Test Notu</app-text>
          <IconDelete class="icon -black"/>
        </header>
        <article class="m-note__content">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit
        </article>
      </div>
      <div class="m-note__item">
        <header class="m-note__header">
          <app-text size="small" weight="bold">Test Notu</app-text>
          <IconDelete class="icon -black"/>
        </header>
        <article class="m-note__content">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import appText from '@/components/Text.vue';
import IconDelete from '@/icons/delete.svg';

export default {
    components: {
        appText,
        IconDelete
    }
}
</script>

<style lang="scss">
.m-note {
  padding-top: 30px;
  margin-left: -20px;
  margin-right: -20px;
  height: calc(100% - var(--header-gap));

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    height: inherit;
    width: 100%;
  }

  &__item {
    height: 200px;
    margin-bottom: 60px;
    width: 33.3333%;
    border-radius: 5px;
    padding: 20px;
    cursor: pointer;
  }

  &__header {
    height: 35px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #FBB901;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font-family);
  }

  &__content {
    padding: 13px;
    height: inherit;
    text-align: justify;
    background-color: #f7dc59;

    background-image: url("https://www.transparenttextures.com/patterns/lined-paper.png");

    // url("https://www.transparenttextures.com/patterns/skulls.png");

    // url("https://www.transparenttextures.com/patterns/xv.png");

    // url("https://www.transparenttextures.com/patterns/white-leather.png");

    // url("https://www.transparenttextures.com/patterns/flowers.png");
  }
}
</style>