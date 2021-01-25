<template>
    <form class="m-password__form">
        <app-text tag="p" color="soft" weight="thin" class="-mb10">Başlık*</app-text>
        <input type="text" id="title" placeholder="Başlık giriniz" :value="title" required>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Kullanıcı Adı*</app-text>
        <input type="text" id="name" placeholder="Kullanıcı adı girin" :value="name" required>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Website Adı</app-text>
        <input type="text" id="website" placeholder="Website adresi girin" :value="website" required>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Parola*</app-text>

        <div class="row">
            <input :type="changePasswordType" id="password" placeholder="Parola girin" class="-passwordInput" :value="password" required>
            <icon-open-eye v-if="isShowPassword" class="icon -soft -openEye" @click.self="isShowPassword = !isShowPassword"></icon-open-eye>
            <icon-close-eye v-else class="icon -soft -openEye" @click.self="isShowPassword = !isShowPassword"></icon-close-eye>
        </div>

        <app-text tag="p" color="soft" weight="thin" class="-mb10">Parola Tekrar*</app-text>

        <div class="row">
             <input :type="changeRePasswordType" id="repassword" placeholder="Parola tekrarı girin" class="-passwordInput" :value="password" required>
            <icon-open-eye v-if="isShowRePassword" class="icon -soft -openEye" @click.self="isShowRePassword = !isShowRePassword"></icon-open-eye>
            <icon-close-eye v-else class="icon -soft -openEye" @click.self="isShowRePassword = !isShowRePassword"></icon-close-eye>
        </div>

        <app-text tag="p" color="soft" weight="thin">Parola Üret</app-text>
        <div class="group">
            <input type="text" class="-generate-password" :value="generatedPasswordHistory" disabled>
            <input type="text" class="-generate-password -hidden" :value="generatedPasswordHistory" data-generate-password>
            <icon-copy class="icon -soft -mr10" @click="copyClipboard('data-generate-password')"></icon-copy>
            <icon-generate class="icon -soft" @click="actionGeneratePassword"></icon-generate>
        </div>

        <div class="row -auto">
            <app-button class="-mr20" @click.prevent.native="setIsOpenWindow({status: false, component: ''})">Kapat</app-button>
            <app-button v-if="getComponentOptions().title !== 'Şifre Güncelle'" @click.prevent.enter.native="savePasswordToPasswordList()">Kaydet</app-button>
            <app-button v-else @click.prevent.native="editPasswordToPasswordList()" :class="{'-updated' : isUpdated}">{{ isUpdated ? "Güncellendi" : "Güncelle"}}</app-button>
        </div>
    </form>
</template>

<script>
import appText from './Text.vue';
import appButton from './Button.vue';
import IconGenerate from "@/icons/generate.svg";
import IconCopy from "@/icons/copy.svg";
import IconOpenEye from "@/icons/opened-eye.svg";
import IconCloseEye from "@/icons/closed-eye.svg";
import helperFuncs from "@/mixin/index.js";
import { mapGetters, mapMutations } from "vuex";

export default {
    components: {
        appText,
        IconCopy,
        IconGenerate,
        IconOpenEye,
        IconCloseEye,
        appButton
    },
    data() {
        return {
            formData: {
                title: "",
                name : "",
                website : "",
                password : "",
                rePassword : ""
            },
            isUpdated: false,
            isShowPassword: true,
            isShowRePassword: true
        }
    },
    computed: {
        changePasswordType() {
            return this.isShowPassword ? "password" : "text";
        },
        changeRePasswordType() {
            return this.isShowRePassword ? "password" : "text";
        },
        title() {
            return this.getCurrentItem() ? this.getCurrentItem().title : "";
        },
        name() {
            return this.getCurrentItem() ? this.getCurrentItem().name : "";
        },
        website() {
            return this.getCurrentItem() ? this.getCurrentItem().website : "";
        },
        password() {
            return this.getCurrentItem() ? this.getCurrentItem().password : "";
        }
    },
    methods: {
        ...mapMutations(["savePassword", "setIsOpenWindow", "editPassword", "setCurrentItem"]),
        ...mapGetters(["getPasswordListSize", "getCurrentItem", "getComponentOptions"]),
        savePasswordToPasswordList() {
            const title = document.getElementById("title").value;
            const name = document.getElementById("name").value;
            const website = document.getElementById("website").value;
            const password = document.getElementById("password").value;

            this.savePassword({
                id: this.getPasswordListSize() + 1,
                title: title,
                name: name,
                password: password,
                website: website,
                lastModified: this.getCurrentDate(),
                created: this.getCurrentDate()
            });
        },
        editPasswordToPasswordList() {
            const title = document.getElementById("title").value;
            const name = document.getElementById("name").value;
            const website = document.getElementById("website").value;
            const password = document.getElementById("password").value;

            if (title !== "" && name !== "" && website !== "" && password !== "")  {
                const currentPassword = {
                    id: this.getCurrentItem().id,
                    title: title,
                    name: name,
                    password: password,
                    website: website,
                    lastModified: this.getCurrentDate(),
                    created: this.getCurrentItem().created
                }

                this.editPassword(currentPassword);

                this.setCurrentItem(currentPassword);

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
.m-password__form {
    display: flex;
    flex-direction: column;
    height: 100%;

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

        &::placeholder {
            color: var(--placeholder-color);
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