<template>
    <form class="m-password__form">
        <app-text tag="p" color="soft" weight="thin" class="-mb10" required>Başlık*</app-text>
        <input type="text" placeholder="Başlık giriniz" v-model="formData.title">

        <app-text tag="p" color="soft" weight="thin" class="-mb10" required>Kullanıcı Adı*</app-text>
        <input type="text" placeholder="Kullanıcı adı girin" v-model="formData.username">

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Website Adı</app-text>
        <input type="text" placeholder="Website adresi girin" v-model="formData.website">

        <app-text tag="p" color="soft" weight="thin" class="-mb10" required>Parola*</app-text>
        <input type="password" class="-passwordInput" placeholder="Parola girin" v-model="formData.password">

        <app-text tag="p" color="soft" weight="thin" class="-mb10" required>Parola Tekrar*</app-text>
        <input type="password" class="-passwordInput" placeholder="Parola tekrarı girin" v-model="formData.rePassword">
        <app-text tag="p" color="soft" weight="thin">Parola Üret</app-text>
        <div class="group">
            <input type="text" class="-generate-password" :value="generatedPasswordHistory" disabled>
            <input type="text" class="-generate-password -hidden" :value="generatedPasswordHistory" data-generate-password>
            <icon-copy class="icon -soft -mr10" @click="copyClipboard('data-generate-password')"></icon-copy>
            <icon-generate class="icon -soft" @click="actionGeneratePassword"></icon-generate>
        </div>

        <div class="row">
            <app-button class="-mr20" @click.native="setIsOpenWindow({status: false, component: ''})">Kapat</app-button>
            <app-button @click.prevent.native="savePasswordToPasswordList()" :class="{'-disabled' : isSaveEnabled}" :disabled="isSaveEnabled">Kaydet</app-button>
        </div>
    </form>
</template>

<script>
import appText from './Text.vue';
import appButton from './Button.vue';
import IconGenerate from "@/icons/generate.svg";
import IconCopy from "@/icons/copy.svg";
import { mapGetters, mapMutations } from "vuex";
import helperFuncs from "@/mixin/index.js";

export default {
    components: {
        appText,
        IconGenerate,
        IconCopy,
        appButton
    },
    data() {
        return {
            formData: {
                title: "",
                username: "",
                website: "",
                password: "",
                rePassword: ""
            }
        }
    },
    computed: {
    isSaveEnabled() {
        if (this.formData.title !== "" &&
            this.formData.username !== "" &&
            this.formData.password !== "" &&
            (this.formData.password === this.formData.rePassword)) {
                return false;
            } else {
                return true;
            }
        }
    },
    methods: {
        ...mapMutations(["savePassword", "setIsOpenWindow"]),
        ...mapGetters(["getPasswordListSize"]),
        savePasswordToPasswordList() {
            this.savePassword({
                id: this.getPasswordListSize() + 1,
                title: this.formData.title,
                name: this.formData.username,
                password: this.formData.password,
                website: this.formData.website,
                lastModified: this.getCurrentDate(),
                created: this.getCurrentDate()
            });
        }
    },
    mixins: [helperFuncs]
}
</script>

<style lang="scss" scoped>
.m-password__form {
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
            width: 80%;
            padding-left: 0;
            margin-bottom: 0;
            margin-right: auto;
            background-color: transparent;
            font-weight: 300;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 2px;
            user-select: none;
            -moz-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            -o-user-select: none;

            &.-hidden {
                position: absolute;
                left: -9999px;
                top: -9999px;
                opacity: 0;
            }
        }
    }

    & .group {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
    }
}
</style>