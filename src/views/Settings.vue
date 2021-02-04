<template>
  <form class="m-settings__form">
        <app-text tag="p" color="soft" weight="thin" class="-mb10">{{$t("username")}}</app-text>
        <input type="text" id="username" class="-border" :placeholder="$t('enterUsername')" :value="getUser.name" required>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">{{$t("enterEmail")}}</app-text>
        <input type="email" id="email" class="-border" :placeholder="$t('enterEmail')" :value="getUser.email" required>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">{{$t("enterPassword")}}</app-text>

        <div class="row">
            <input :type="changePasswordType" id="password" :placeholder="$t('enterPassword')" class="-border" :value="getUser.password" required>
            <icon-open-eye v-if="isShowPassword" class="icon -soft -openEye" @click.self="isShowPassword = !isShowPassword"></icon-open-eye>
            <icon-close-eye v-else class="icon -soft -openEye" @click.self="isShowPassword = !isShowPassword"></icon-close-eye>
        </div>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">{{$t("enterRepassword")}}</app-text>
        <div class="row">
            <input :type="changeRePasswordType" id="repassword" :placeholder="$t('enterRepassword')" class="-border" :value="getUser.password" required>
            <icon-open-eye v-if="isShowRePassword" class="icon -soft -openEye" @click.self="isShowRePassword = !isShowRePassword"></icon-open-eye>
            <icon-close-eye v-else class="icon -soft -openEye" @click.self="isShowRePassword = !isShowRePassword"></icon-close-eye>
        </div>
        <app-text tag="p" color="soft" weight="thin">{{$t("generatePassword")}}</app-text>
        <div class="group -mb20">
            <input type="text" class="-generate-password" :value="generatedPasswordHistory" disabled>
            <input type="text" class="-generate-password -hidden" :value="generatedPasswordHistory" data-generate-password>
            <icon-copy class="icon -soft -mr10" @click="copyClipboard('data-generate-password')"></icon-copy>
            <icon-generate class="icon -soft" @click="actionGeneratePassword"></icon-generate>
        </div>

        <div class="group">
            <app-button @click.prevent.native="updateUserInfo()">{{$t("updateButton")}}</app-button>
        </div>
        <app-copied-alert />
    </form>
</template>

<script>
import appButton from '@/components/Button.vue';
import appText from '@/components/Text.vue';
import IconGenerate from "@/icons/generate.svg";
import IconCopy from "@/icons/copy.svg";
import IconOpenEye from "@/icons/opened-eye.svg";
import IconCloseEye from "@/icons/closed-eye.svg";
import helperFuncs from "@/mixin/index.js";
import appCopiedAlert from "@/components/CopiedAlert.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
    components: {
        appText,
        IconGenerate,
        IconCopy,
        IconOpenEye,
        IconCloseEye,
        appButton,
        appCopiedAlert
    },
    data() {
        return {
            isShowRePassword: true,
            isShowPassword: true
        }
    },
    computed: {
        ...mapGetters(["getUser", "getUserListSize"]),
        changeRePasswordType() {
            return this.isShowRePassword ? "password" : "text";
        },
        changePasswordType() {
            return this.isShowPassword ? "password" : "text";
        }
    },
    methods: {
        ...mapMutations(["editUser"]),
        updateUserInfo() {
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const repassword = document.getElementById("repassword").value;

            if(username !== "" && email !== "" && (password === repassword)) {
                const userInfo = {
                    id: this.getUserListSize + 1,
                    name: username,
                    email: email,
                    password: password
                };
                this.$store.dispatch("editUser", userInfo);
            }
        }
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
        width: 100%;
        height: 50px;
        border: none;
        margin-bottom: 20px;
        padding-left: 25px;
        padding-right: 40px;
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
        justify-content: flex-end;
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

    & .icon.-openEye {
        position: absolute;
        right: 10px;
        top: 15px;
    }
}
</style>