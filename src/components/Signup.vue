<template>
    <form class="o-signup" @submit.prevent="signup()">
        <app-text tag="h3" color="darkblue" size="xlarge" class="-mb20">Kayıt Olun</app-text>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Kullanıcı Adı</app-text>
        <input type="text" v-model="user.name" placeholder="Kullanıcı adınızı girin" required>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">E-Posta Adresi</app-text>
        <input type="text" v-model="user.email" placeholder="E-posta adresinizi girin" required>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Şifre</app-text>
        <input type="password" v-model="user.password" placeholder="Şifrenizi giriniz" required>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Şifre Tekrarı</app-text>
        <input type="password" v-model="user.repassword" placeholder="Şifrenizi tekrar giriniz" required>

        <app-button class="-mb20 -mt10">Kayıt Ol</app-button>

        <div class="row">
            <app-text tag="p" size="small" class="-mr10">Hesabınız var mı? </app-text>

            <router-link tag="a" to="/login">
                <app-text tag="p" size="small">Giriş yapın!</app-text>
            </router-link>
        </div>
  </form>
</template>

<script>
import appText from './Text.vue';
import appButton from './Button.vue';
export default {
    components: {
        appText,
        appButton
    },
    data() {
        return {
            user: {
                name: null,
                email: null,
                password: null,
                repassword: null
            }
        }
    },
    methods: {
        signup() {
            if(this.user.name !== "" && this.user.email !== "" && (this.user.password === this.user.repassword)) {
                this.$store.dispatch("signup", {...this.user});
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.o-signup {
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
    border: 1px solid #E7E1E1;
    border-radius: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
        color: var(--placeholder-color);
    }
}
</style>