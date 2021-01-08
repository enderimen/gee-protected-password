<template>
  <section class="m-password">
      <section class="m-password__list">
        <div class="m-password__searchArea">
          <input type="text" class="m-password__search -mr20" placeholder="Hesap ya da şifre ara" @input="setSearchQuery">
        </div>

        <app-password-item
        @click.native="currentAccount"
        v-for="password in getPasswordList()"
        :key="password.id"
        :password="password"
        :data-id="password.id"
        :class="{'-active': password.id == 1}"></app-password-item>
      </section>

      <section class="m-password__detail">
        <div class="m-password__summary">
          <app-text size="small" weight="bold" class="-mb10" color="soft">Kullanıcı Adı</app-text>
          <app-text size="small" weight="thin" class="-mb20">{{ getPasswordDetail().name }}</app-text>
          <app-text size="small" weight="bold" class="-mb10" color="soft">Parola</app-text>

          <div class="group">
            <input type="password" :value="getPasswordDetail().password" class="m-password__input">
            <input type="text" :value="getPasswordDetail().password" class="m-password__input -hidden" data-copy-clipboard>
            <app-copy class="icon -soft" @click="copyClipboard('data-copy-clipboard')"/>
          </div>
        </div>
        <div class="m-password__info">
          <app-text size="small" weight="bold" class="-mb10" color="soft">Website Adresi</app-text>
          <a href="https://www.gmail.com" class="-mb20">
            <app-text size="small" weight="thin" color="soft" >{{ getPasswordDetail().website }}</app-text>
          </a>
          <app-text size="small" weight="bold" class="-mb10" color="soft">Son Düzenleme</app-text>
          <app-text size="small" weight="thin" color="soft" class="-mb20">{{ getPasswordDetail().lastModified }}</app-text>

          <app-text size="small" weight="bold" class="-mb10" color="soft">Oluşturulma</app-text>
          <app-text size="small" weight="thin" color="soft" class="-mb20">{{ getPasswordDetail().created }}</app-text>
        </div>
        <app-copied-alert/>
      </section>
  </section>
</template>

<script>
import appText from "@/components/Text.vue";
import appCopy from "@/icons/copy.svg";
import appPasswordItem from '@/components/PasswordItem.vue';
import appCopiedAlert from '@/components/CopiedAlert.vue';
import helperFuncs from "@/mixin/index.js";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    appText,
    appCopy,
    appPasswordItem,
    appCopiedAlert
  },
  data() {
    return {
      passwordDetail: {},
    }
  },
  created() {
    // NOTE: ilk elemanı çağıracak şekilde güncellenecek
    this.$store.commit("setPasswordDetail", this.$store.getters.getPassword(1))
  },
  methods: {
    ...mapGetters(["getPasswordList", "getPasswordDetail"]),
    currentAccount(event) {
      const tabList = document.querySelectorAll(".js-tab");

      tabList.forEach((passwordItem) => {
        if(passwordItem.classList.contains("-active")) {
          passwordItem.classList.remove("-active");
        }
      });

      event.target.classList.add("-active");
      this.$store.commit("setPasswordDetail", this.$store.getters.getPassword(event.target.dataset.id));
    },
    setSearchQuery(event) {
      this.$store.commit("setSearchQuery", event.target.value);
    },
  },
  mixins: [helperFuncs]
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
    &Area {
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 20px;
      border-bottom: 1px solid var(--line-bg-color);
    }

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
    overflow-y: scroll;
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

    &.-hidden {
      position: absolute;
      z-index: -9999;
      left: -100%;
      top: -100%;
    }
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