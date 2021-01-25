<template>
  <form class="m-newAccount">
    <app-text tag="p" color="soft" weight="thin" class="-mb10">Hesap Adı*</app-text>
    <input type="text" id="title" placeholder="Kullanıcı adı girin" :value="title" required>

    <app-text tag="p" color="soft" weight="thin" class="-mb10">E-Posta*</app-text>
    <input type="email" id="email" placeholder="E-posta adresi girin" :value="email">

    <app-text tag="p" color="soft" weight="thin" class="-mb10">Parola*</app-text>
    <input type="password" id="password" class="-passwordInput" placeholder="Parola girin" :value="password" required>

    <app-text tag="p" color="soft" weight="thin" class="-mb10">Parola Tekrar*</app-text>
    <input type="password" id="repassword" class="-passwordInput" placeholder="Parola tekrarı girin" :value="password" required>

    <app-text tag="p" color="soft" weight="thin">Parola Üret</app-text>
    <div class="group">
        <input type="text" class="-generate-password" :value="generatedPasswordHistory" disabled>
        <input type="text" class="-generate-password -hidden" :value="generatedPasswordHistory" data-generate-password>
        <icon-copy class="icon -soft -mr10" @click="copyClipboard('data-generate-password')"></icon-copy>
        <icon-generate class="icon -soft" @click="actionGeneratePassword"></icon-generate>
    </div>

     <div class="row -auto">
            <app-button class="-mr20" @click.prevent.native="setIsOpenWindow({status: false, component: ''})">Kapat</app-button>
            <app-button v-if="getComponentOptions().title !== 'Hesap Bilgilerini Güncelle'" @click.prevent.enter.native="saveAccountToAccountList()" :class="{'-updated' : isSaved}">{{ isSaved ? "Kaydedildi" : "Kaydet"}}</app-button>
            <app-button v-else @click.prevent.native="editSelectedAccount()" :class="{'-updated' : isUpdated}">{{ isUpdated ? "Güncellendi" : "Güncelle"}}</app-button>
        </div>
  </form>
</template>

<script>
import appText from './Text.vue';
import appButton from './Button.vue';
import IconGenerate from "@/icons/generate.svg";
import IconCopy from "@/icons/copy.svg";
import helperFuncs from "@/mixin/index.js";
import { mapMutations, mapGetters } from "vuex";

export default {
    components: {
        appText,
        appButton,
        IconGenerate,
        IconCopy
    },
    data() {
        return {
            isUpdated: false,
            isSaved: false
        }
    },
    computed: {
        title() {
            return this.getCurrentItem() ? this.getCurrentItem().title : "";
        },
        email() {
            return this.getCurrentItem() ? this.getCurrentItem().email : "";
        },
        password() {
            return this.getCurrentItem() ? this.getCurrentItem().password : "";
        }
    },
    methods: {
        ...mapMutations(["saveAccount", "setIsOpenWindow", "editAccount", "setCurrentItem"]),
        ...mapGetters(["getAccountListSize", "getCurrentItem", "getComponentOptions"]),
        saveAccountToAccountList() {

            const title = document.getElementById("title").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const repassword = document.getElementById("repassword").value;

            if (title !== "" && email !== "" && password !== "" && (password === repassword))  {

                const currentAccount = {
                id: this.getAccountListSize() + 1,
                title: title,
                password: password,
                email: email,
                lastModified: this.getCurrentDate(),
                created: this.getCurrentDate()
            }

                this.saveAccount(currentAccount);
                this.isSaved = true;

                 setTimeout(() => {
                    this.isSaved = false;
                }, 2000);
            }
        },
        editSelectedAccount() {
            const title = document.getElementById("title").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const repassword = document.getElementById("repassword").value;

            if (title !== "" && email !== "" && password !== "" && (password === repassword))  {
                const currentAccount = {
                    id: this.getCurrentItem().id,
                    title: title,
                    password: password,
                    email: email,
                    lastModified: this.getCurrentDate(),
                    created: this.getCurrentItem().created
                }

                this.editAccount(currentAccount);

                this.setCurrentItem(currentAccount);

                this.isUpdated = true;

                setTimeout(() => {
                    this.isUpdated = false;
                }, 2000);
            }
        }
    },
    mixins: [helperFuncs]
}
</script>

<style lang="scss" scoped>
.m-newAccount {
    display: flex;
    flex-direction: column;
    height: 100%;

    & input {
        height: 50px;
        border: none;
        margin-bottom: 20px;
        padding-left: 25px;
        padding-right: 25px;
        color: var(--placeholder-color);
        background-color: var(--input-bg-color);
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        &::placeholder {
            color: var(--placeholder-color);
        }

        &.-passwordInput {
            background: url('./../icons/opened-eye.svg') no-repeat center 22px;
        }

        &.-generate-password {
            padding-left: 0;
            margin-bottom: 0;
            margin-right: auto;
            background-color: transparent;
            font-weight: 300;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 2px;

            &.-hidden {
                position: absolute;
                left: -9999px;
                top: -9999px;
                opacity: 0;
            }
        }
    }

    & .row {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        &.-auto {
            margin-top: auto;
        }
    }

    & .group {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>