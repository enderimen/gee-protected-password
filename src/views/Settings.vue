<template>
  <form class="m-settings__form">
        <app-text tag="p" color="soft" weight="thin" class="-mb10" required>Kullanıcı Adı*</app-text>
        <input type="text" class="-border" placeholder="Kullanıcı adınızı girin">

        <app-text tag="p" color="soft" weight="thin" class="-mb10">E-Posta Adresini Değiştir</app-text>
        <input type="email" class="-border" placeholder="E-posta adresinizi girin">

        <app-text tag="p" color="soft" weight="thin" class="-mb10" required>Parolanı Değiştir</app-text>
        <input type="password" class="-passwordInput -border" placeholder="Parolanızı girin">

        <app-text tag="p" color="soft" weight="thin" class="-mb10" required>Parola Tekrarı</app-text>
        <input type="password" class="-passwordInput -border" placeholder="Parolanızı tekrarı girin">
        <app-text tag="p" color="soft" weight="thin">Parola Üret</app-text>
        <div class="group -mb20">
            <input type="text" class="-generate-password" :value="generatedPasswordHistory" disabled>
            <input type="text" class="-generate-password -hidden" :value="generatedPasswordHistory" data-generate-password>
            <icon-copy class="icon -soft -mr10" @click="copyClipboard('data-generate-password')"></icon-copy>
            <icon-generate class="icon -soft" @click="actionGeneratePassword"></icon-generate>
        </div>

        <div class="group">
            <app-button class="-mr20" @click.native="setIsOpenWindow({status: false, component: ''})">Kapat</app-button>
            <app-button>Kaydet</app-button>
        </div>
        <app-copied-alert />
    </form>
</template>

<script>
import appButton from '@/components/Button.vue';
import appText from '@/components/Text.vue';
import IconGenerate from "@/icons/generate.svg";
import IconCopy from "@/icons/copy.svg";
import helperFuncs from "@/mixin/index.js";
import appCopiedAlert from '@/components/CopiedAlert.vue';

export default {
    components: {
        appText,
        IconGenerate,
        IconCopy,
        appButton,
        appCopiedAlert
    },
    mixins: [helperFuncs]
}
</script>

<style lang="scss" scoped>
.m-settings__form {
    display: flex;
    padding-top: 40px;
    flex-direction: column;
    max-width: 400px;

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

        &.-border {
            border: 1px solid var(--placeholder-color);
            border-radius: 5px;
        }

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
}
</style>