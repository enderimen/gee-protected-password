<template>
  <section class="m-password">
      <section class="m-password__list">
        <div class="m-password__item">
          <input type="text" class="m-password__search -mr20" placeholder="Hesap ya da şifre ara">
        </div>
        <div class="m-password__item -active">
          <app-text size="small" weight="bold" class="-mb10">Google Gmail</app-text>
          <app-text size="small" weight="thin">imen.ender@gmail.com</app-text>
        </div>
        <div class="m-password__item">
          <app-text size="small" weight="bold" class="-mb10">Google Gmail</app-text>
          <app-text size="small" weight="thin">imen.ender@gmail.com</app-text>
        </div>
        <div class="m-password__item">
          <app-text size="small" weight="bold" class="-mb10">Google Gmail</app-text>
          <app-text size="small" weight="thin">imen.ender@gmail.com</app-text>
        </div>
        <div class="m-password__item">
          <app-text size="small" weight="bold" class="-mb10">Google Gmail</app-text>
          <app-text size="small" weight="thin">imen.ender@gmail.com</app-text>
        </div>
      </section>

      <section class="m-password__detail">
        <div class="m-password__summary">
          <app-text size="small" weight="bold" class="-mb10" color="soft">Kullanıcı Adı</app-text>
          <app-text size="small" weight="thin" class="-mb20">imen.ender@gmail.com</app-text>
          <app-text size="small" weight="bold" class="-mb10" color="soft">Şifre</app-text>

          <div class="group">
            <input type="password" value="dassaasdasda" class="m-password__input" disabled>
            <IconCopy class="icon -soft"/>
          </div>
        </div>

        <div class="m-password__info">
          <app-text size="small" weight="bold" class="-mb10" color="soft">Website</app-text>
          <a href="https://www.gmail.com" class="-mb20">
            <app-text size="small" weight="thin" color="soft" >https://www.gmail.com</app-text>
          </a>

          <app-text size="small" weight="bold" class="-mb10" color="soft">Last Modified</app-text>
          <app-text size="small" weight="thin" color="soft" class="-mb20">Today at 12:09 PM</app-text>

          <app-text size="small" weight="bold" class="-mb10" color="soft">created</app-text>
          <app-text size="small" weight="thin" color="soft" class="-mb20">Today at 12:09 PM</app-text>
        </div>
      </section>
  </section>
</template>

<script>
import appText from "@/components/Text.vue";
import IconCopy from "@/icons/copy.svg";

export default {
  components: {
    appText,
    IconCopy
  }
}
</script>

<style lang="scss">
.m-password {
  padding-top: 10px;
  margin-left: -65px;
  margin-right: -65px;
  display: flex;
  height: calc(100% - var(--header-gap) - 10px);

  &__search {
    box-sizing: border-box;
    padding: 15px 20px;
    height: 50px;
    text-align: center;
    color: var(--soft-icon-color);
    font-size: 16px;
    font-weight: 300;
    background-color: var(--white);
    border-radius: 10px;
    border: none;
    outline: none;

    &::placeholder {
      color: var(--soft-icon-color);
    }
  }

  &__list {
    flex: 1;
    border-right: 1px solid var(--line-bg-color);
  }

  &__item {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    cursor: pointer;
    transition: ease-in 300ms;
    border-bottom: 1px solid var(--line-bg-color);

    &.-active {
      color: var(--light-text-color);
      background-color: var(--active-tab-bg-color);
    }

    &:not(.-active) {
      &:hover {
        transition: ease-out 300ms;
        background-color: var(--soft-content-bg-color);
      }
    }
  }

  &__detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    background-color: var(--soft-content-bg-color);
  }

  &__summary {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    height: 164px;
    width: 390px;
    background-color: var(--white);
    border-radius: 15px;
    border: 2px solid var(--line-bg-color);
  }

  .group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__input {
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: bold;
  }

  &__info {
    display: flex;
    flex-direction: column;
    padding: 30px;
    height: 134px;
    width: 390px;

    & a {
      text-decoration: none;
    }
  }
}
</style>