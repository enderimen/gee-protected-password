<template>
  <section class="m-password">
      <section class="m-password__list">
        <div class="m-password__searchArea">
          <input type="text" class="m-password__search -mr20" placeholder="Hesap ya da şifre ara">
        </div>

        <app-password-item @click.native="currentAccount" v-for="password in passwordList" :key="password.id" :password="password" :data-id="password.id"></app-password-item>
      </section>

      <section class="m-password__detail">
        <div class="m-password__summary">
          <app-text size="small" weight="bold" class="-mb10" color="soft">Kullanıcı Adı</app-text>
          <app-text size="small" weight="thin" class="-mb20">{{ passwordDetail.name }}</app-text>
          <app-text size="small" weight="bold" class="-mb10" color="soft">Parola</app-text>

          <div class="group">
            <input type="password" :value="passwordDetail.password" class="m-password__input" disabled>
            <IconCopy class="icon -soft"/>
          </div>
        </div>

        <div class="m-password__info">
          <app-text size="small" weight="bold" class="-mb10" color="soft">Website</app-text>
          <a href="https://www.gmail.com" class="-mb20">
            <app-text size="small" weight="thin" color="soft" >{{ passwordDetail.website }}</app-text>
          </a>

          <app-text size="small" weight="bold" class="-mb10" color="soft">Last Modified</app-text>
          <app-text size="small" weight="thin" color="soft" class="-mb20">{{ passwordDetail.lastModified }}</app-text>

          <app-text size="small" weight="bold" class="-mb10" color="soft">created</app-text>
          <app-text size="small" weight="thin" color="soft" class="-mb20">{{ passwordDetail.created }}</app-text>
        </div>
      </section>
  </section>
</template>

<script>
import appText from "@/components/Text.vue";
import IconCopy from "@/icons/copy.svg";
import appPasswordItem from '@/components/PasswordItem.vue';

export default {
  components: {
    appText,
    IconCopy,
    appPasswordItem
  },
  data() {
    return {
      passwordList: [
        {
          id: 1,
          title: "Google Gmail",
          name: "imen.ender@gmail.com",
          password: "sdasdasdasasdsdsdasdasds",
          website: "https://www.gmail.com",
          lastModified: "Today at 12:09 PM",
          created: "Today at 03:25 AM"
        },
        {
          id: 2,
          title: "Google Gmail",
          name: "imen.ender@gmail.com",
          password: "sdasdasdasaasdasdasd",
          website: "https://www.gmail.com",
          lastModified: "Today at 12:09 PM",
          created: "Today at 02:25 AM"
        },
        {
          id: 3,
          title: "Google Gmail",
          name: "imen.ender@gmail.com",
          password: "sdasda",
          website: "https://www.gmail.com",
          lastModified: "Today at 12:09 PM",
          created: "Today at 07:25 AM"
        }
      ],
      passwordDetail: {
          id: 1,
          title: "Test Account",
          name: "test@gmail.com",
          password: "sdasdasdasasdsdsdasdas",
          website: "https://www.gee.com",
          lastModified: "Today at 12:09 PM",
          created: "Today at 03:25 AM"
        }
    }
  },
  methods: {
    currentAccount(event) {
      const tabList = document.querySelectorAll(".js-tab");

      tabList.forEach((passwordItem) => {
        if(passwordItem.classList.contains("-active")) {
          passwordItem.classList.remove("-active");
        }
      });

      event.target.classList.add("-active");
      this.showDetailPassword(event.target.dataset.id);
    },
    showDetailPassword(passwordId) {
      const currentPassword = this.passwordList.find((passwordItem) => {
        return parseInt(passwordId) === passwordItem.id
      });
      this.passwordDetail = currentPassword;
    }
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