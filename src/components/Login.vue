<template>
    <form class="o-login" @submit.prevent="setLogin()">
        <app-text tag="h3" color="darkblue" size="xlarge" class="-mb20">Giriş Yapın</app-text>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Kullanıcı Adı</app-text>
        <input type="email" v-model="user.email" placeholder="Kullanıcı adınızı girin" required>

        <app-text tag="p" color="red" size="small" weight="thin" class="-mb10">{{ getAuthenticationMessage.email }}</app-text>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Şifre</app-text>
        <input type="password" v-model="user.password" placeholder="Şifre giriniz" required>
        <app-text tag="p" color="red" size="small" weight="thin" class="-mb10">{{ getAuthenticationMessage.password }}</app-text>

        <app-button class="-mb20 -mt10">Giriş yap</app-button>

        <div class="row">
            <app-text tag="p" size="small" class="-mr10">Hesabınız yok mu? </app-text>

            <router-link tag="a" to="/signup">
                <app-text tag="p" size="small">Kayıt olun!</app-text>
            </router-link>
        </div>
  </form>
</template>

<script>
import appText from "./Text.vue";
import appButton from "./Button.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        appText,
        appButton
    },
    data() {
        return {
            user: {
                email: null,
                password: null
            }
        }
    },
    computed: {
        ...mapGetters(["getAuthenticationMessage", "getUserListSize"]),
    },
    methods: {
        setLogin() {
            this.$store.dispatch("login", {id: this.getUserListSize + 1, name: "", ...this.user});
        }
    }
}
</script>

<style lang="scss" scoped>

.o-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 375px;

    & button {
        width: 100%;
    }

    & .row {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

input {
    width: 100%;
    height: 50px;
    border: none;
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 40px;
    color: var(--placeholder-color);
    background-color: var(--input-bg-color);
    border: 1px solid#E7E1E1;
    border-radius: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
        color: var(--placeholder-color);
    }
}
</style>