<template>
  <section class="m-password">
      <section class="m-password__list" v-if="getPasswordListSize()">
        <app-password-item
        @click.self.native="currentAccount"
        v-for="password in getPasswordList()"
        :key="password.id"
        :password="password"
        :data-id="password.id"
        :class="{'-active': password.id == 1}"></app-password-item>

        <div class="-noResult" v-if="getPasswordListSize() !== 0 && getSearchQuery() != ''">
          <app-text tag="h3" size="large" weight="bold" color="soft">Sonuç Bulunamadı!</app-text>
        </div>
      </section>
      <section class="m-password__detail" v-if="getPasswordListSize()">
        <div class="m-password__summary">
          <app-text size="small" weight="bold" class="-mb10" color="soft">Kullanıcı Adı</app-text>
          <app-text size="small" weight="thin" class="-mb20">{{ getPasswordDetail().name }}</app-text>
          <app-text size="small" weight="bold" class="-mb10" color="soft">Parola</app-text>
          <div class="group">
            <input type="password" :value="getPasswordDetail().password" class="m-password__input" disabled>
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
        <app-copied-alert />
      </section>

      <app-no-content v-if="getPasswordListSize() === 0 && getSearchQuery() == ''">
        <icon-password class="icon -large -soft"/>
        <app-text tag="h3" size="large" weight="bold" class="-mt20">
            Tüm parolalarınız tek bir yerde!
        </app-text>
        <app-text tag="p" weight="thin" class="-mt20">
            Özenle korunan GEE kasanıza, şifrelerinizi hemen eklemeye başlayın.
        </app-text>
        <app-button class="-mt20" @click.native="setIsOpenWindow({status: isSettingsPage(), component: getCurrentComponentName()})">Yeni Şifre</app-button>
      </app-no-content>
  </section>
</template>

<script>
import appText from "@/components/Text.vue";
import appCopy from "@/icons/copy.svg";
import IconPassword from "@/icons/password.svg";
import appButton from "@/components/Button.vue";
import appPasswordItem from '@/components/PasswordItem.vue';
import appCopiedAlert from '@/components/CopiedAlert.vue';
import helperFuncs from "@/mixin/index.js";
import appNoContent from "@/components/NoContent.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    appText,
    appCopy,
    appPasswordItem,
    appCopiedAlert,
    IconPassword,
    appNoContent,
    appButton
  },
  data(){
    return {
      passwordDetail: {},
    }
  },
  created() {
    this.$store.commit("setPasswordDetail", this.$store.getters.getPassword(1))
  },
  methods: {
    ...mapGetters(["getPasswordList", "getPasswordDetail", "getSearchQuery", "getPasswordListSize"]),
    ...mapMutations(["setIsOpenWindow"]),
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
    isSettingsPage() {
      return this.getCurrentComponentName() === 'settings' ? false : true;
    }
  },
  mixins: [helperFuncs]
}
</script>

<style lang="scss" scoped>
.m-password {
  margin-left: -65px;
  margin-right: -65px;
  display: flex;
  height: calc(100% - var(--header-gap) - 30px);

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
    position: relative;
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

  & .-noResult {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>