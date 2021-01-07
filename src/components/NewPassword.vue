<template>
  <form class="m-password__form">
        <app-text tag="p" color="soft" weight="thin" class="-mb10">Kullanıcı Adı*</app-text>
        <input type="text" placeholder="Kullanıcı adı girin" required>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Website Adı</app-text>
        <input type="text" placeholder="Website adresi girin">

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Parola*</app-text>
        <input type="password" class="-passwordInput" placeholder="Parola girin" required>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Parola Tekrar*</app-text>
        <input type="password" class="-passwordInput" placeholder="Parola tekrarı girin" required>

        <app-text tag="p" color="soft" weight="thin">Parola Üret</app-text>
        <div class="group">
            <input type="text" class="-generate-password" data-generate-password="asaasdasd" value="xbD!DGfQGcV*" disabled required>
            <icon-copy class="icon -soft -mr10"></icon-copy>
            <icon-generate class="icon -soft"></icon-generate>
        </div>
  </form>
</template>

<script>
import appText from './Text.vue';
import IconGenerate from "@/icons/generate.svg";
import IconCopy from "@/icons/copy.svg";

export default {
  components: {
        appText,
        IconGenerate,
        IconCopy
    },
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
            padding-left: 0;
            margin-bottom: 0;
            margin-right: auto;
            background-color: transparent;
            font-weight: 300;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 2px;
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