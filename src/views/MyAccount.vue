<template>
  <section class="m-account">
      <p class="m-account__title">E-Posta Adreslerim(3)</p>
      <div class="m-widget__list">
        <div class="m-widget__item">
          <div class="m-widget__card -mb15">
            <IconMessage class="icon -large"/>
          </div>
          <app-text weight="bold" class="-mb15">E-posta 1</app-text>
          <app-text weight="thin" size="small">imen.ender@gmail.com</app-text>
        </div>
        <div class="m-widget__item">
          <div class="m-widget__card -mb15">
            <IconMessage class="icon -large"/>
          </div>
          <app-text weight="bold" class="-mb15">E-posta 2</app-text>
          <app-text weight="thin" size="small">imen.ender@gmail.com</app-text>
        </div>
        <div class="m-widget__item">
          <div class="m-widget__card -mb15">
            <IconMessage class="icon -large"/>
          </div>
          <app-text weight="bold" class="-mb15">E-posta 3</app-text>
          <app-text weight="thin" size="small">imen.ender@gmail.com</app-text>
        </div>
        <app-copied-alert />
      </div>
  </section>
</template>

<script>
import appText from '@/components/Text.vue';
import IconMessage from '@/icons/message.svg';
import appCopiedAlert from '@/components/CopiedAlert.vue';

export default {
  components: {
    appText,
    IconMessage,
    appCopiedAlert
  }
}
</script>

<style lang="scss">
.m-account {
    font-family: var(--font-family);

    padding-top: 50px;

    &__title {
        padding-bottom: 30px;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: var(--placeholder-color);

        border-bottom: 1px solid var(--line-bg-color);
    }
}

.m-widget {
  &__list {
    display: flex;
    padding-top: 30px;
  }

  &__card {
    height: 106px;
    width: 167px;
    border-radius: 5px;
    background-color: var(--theme-bg-color);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item {
    display: flex;
    flex-direction: column;
    margin-right: 37px;
    color: var(--widget-text-color);
  }
}
</style>