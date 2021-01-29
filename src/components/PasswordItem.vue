<template>
    <div class="m-password__item js-tab">
        <div class="row -mr10">
            <app-text size="small" weight="bold" class="-mb10">{{ password.title }}</app-text>
            <app-text size="small" weight="thin">{{ password.name }}</app-text>
        </div>

        <IconEdit class="icon -black -mr10" :data-password-id="password.id" @click="editPassword($event)"/>
    </div>
</template>

<script>
import appText from "@/components/Text.vue";
import IconEdit from "@/icons/edit.svg";
import helperFuncs from "@/mixin/index.js";
import { mapMutations } from "vuex";

export default {
    components: {
        appText,
        IconEdit
    },
    props: {
        password: Object
    },
    methods: {
        ...mapMutations(["setIsOpenWindow"]),
        editPassword(event) {
            const passwordId = event.target.getAttribute("data-password-id");
            this.$store.commit("setCurrentItem", this.$store.getters.getPassword(passwordId));
            this.setIsOpenWindow({status: true, component: this.getCurrentComponentName(), title: "Şifre Güncelle"});
        }
    },
    mixins: [helperFuncs]
}
</script>

<style lang="scss" scoped>
.m-password__item {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;
    transition: ease-in 300ms;
    color: var(--tab-text-color);
    border-bottom: 1px solid var(--line-bg-color);

    & .row {
        display: flex;
        flex-direction: column;
    }

    &.-active {
        color: var(--white);
        background-color: var(--active-tab-bg-color);
        border: 0
    }

    &:not(.-active) {
      &:hover {
        transition: ease-out 300ms;
        background-color: var(--soft-content-bg-color);
      }
    }
}
</style>