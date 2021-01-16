<template>
    <form class="m-password__form">
        <app-text tag="p" color="soft" weight="thin" class="-mb10" required>Kullanıcı Adı*</app-text>
        <input type="text" placeholder="Kullanıcı adı girin">

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Website Adı</app-text>
        <input type="text" placeholder="Website adresi girin">

        <app-text tag="p" color="soft" weight="thin" class="-mb10" required>Parola*</app-text>
        <input type="password" class="-passwordInput" placeholder="Parola girin">

        <app-text tag="p" color="soft" weight="thin" class="-mb10" required>Parola Tekrar*</app-text>
        <input type="password" class="-passwordInput" placeholder="Parola tekrarı girin">
        <app-text tag="p" color="soft" weight="thin">Parola Üret</app-text>
        <div class="group">
            <input type="text" class="-generate-password" :value="generatedPasswordHistory" disabled>
            <input type="text" class="-generate-password -hidden" :value="generatedPasswordHistory" data-generate-password>
            <icon-copy class="icon -soft -mr10" @click="copyClipboard('data-generate-password')"></icon-copy>
            <icon-generate class="icon -soft" @click="actionGeneratePassword"></icon-generate>
        </div>
    </form>
</template>

<script>
import appText from './Text.vue';
import IconGenerate from "@/icons/generate.svg";
import IconCopy from "@/icons/copy.svg";
import helperFuncs from "@/mixin/index.js";

export default {
    components: {
        appText,
        IconGenerate,
        IconCopy
    },
    mixins: [helperFuncs]
}
</script>

<style lang="scss">
.m-password__form {
    display: flex;
    flex-direction: column;

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
}
</style>