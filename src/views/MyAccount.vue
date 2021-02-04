<template>
  <section class="m-account">
    <section class="m-account__list" v-if="getAccountList().length">
        <p class="m-account__title">{{$t("myEmailAddresses")}} ({{getAccountListSize()}})</p>
        <div class="m-widget__list">
          <app-account-item v-for="account in getAccountList()" :account="account" :key="account.id"></app-account-item>
          <app-copied-alert />
        </div>
    </section>

    <app-no-content v-if="getAccountList().length === 0 && getSearchQuery() == ''">
      <icon-account class="icon -large -soft"/>
      <app-text tag="h3" size="large" weight="bold" class="-mt20">
          Tüm e-posta adresleriniz bir yerde!
      </app-text>
      <app-text tag="p" weight="thin" class="-mt20">
          Özenle korunan GEE kasanıza, farklı hesaplarınızı hemen eklemeye başlayın.
      </app-text>
      <app-button class="-mt20" @click.native="setIsOpenWindow({status: isSettingsPage(), component: getCurrentComponentName()})">Yeni Hesap</app-button>
    </app-no-content>

    <div class="-noResult" v-if="getAccountList().length === 0 && getSearchQuery() != ''">
      <app-text tag="h3" size="large" weight="bold" color="soft">{{$t("noResultMsg")}}</app-text>
    </div>
  </section>
</template>

<script>
import appText from "@/components/Text.vue";
import appButton from "@/components/Button.vue";
import IconAccount from "@/icons/account.svg";
import appCopiedAlert from '@/components/CopiedAlert.vue';
import appAccountItem from '@/components/AccountItem.vue';
import appNoContent from "@/components/NoContent.vue";
import helperFuncs from "@/mixin/index.js";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    appText,
    appButton,
    IconAccount,
    appNoContent,
    appCopiedAlert,
    appAccountItem
  },
  methods: {
    ...mapGetters(["getAccountList", "getAccountListSize", "getSearchQuery"]),
    ...mapMutations(["setIsOpenWindow"]),
    isSettingsPage() {
      return this.getCurrentComponentName() === 'settings' ? false : true;
    }
  },
  mixins: [helperFuncs]
}
</script>

<style lang="scss" scoped>
.m-account {
  height: calc(100% - var(--header-gap) - 30px);

  &__list {
    font-family: var(--font-family);
  }

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
    flex-wrap: wrap;
    padding-top: 30px;
  }
}

.-noResult {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>