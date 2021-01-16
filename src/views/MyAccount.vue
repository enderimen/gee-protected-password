<template>
  <section class="m-account">
      <p class="m-account__title">E-Posta Adreslerim(3)</p>
      <div class="m-widget__list">
        <app-account-item v-for="account in getAccountList()" :account="account" :key="account.id"></app-account-item>
        <app-copied-alert />
      </div>
  </section>
</template>

<script>
import appCopiedAlert from '@/components/CopiedAlert.vue';
import appAccountItem from '@/components/AccountItem.vue';
import { mapGetters } from "vuex";

export default {
  components: {
    appCopiedAlert,
    appAccountItem
  },
  methods: {
    ...mapGetters(["getAccountList"])
  }
}
</script>

<style lang="scss" scoped>
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
    flex-wrap: wrap;
    padding-top: 30px;
  }
}
</style>