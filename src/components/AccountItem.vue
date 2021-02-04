<template>
    <div class="m-widget__item">
        <div class="m-widget__card -mb15">
            <IconMessage class="icon -large"/>
            <IconEdit class="icon -edit" :data-account-id="account.id" @click="editAccount($event)"/>
            <IconDelete class="icon -delete" :data-account-key="account.key" @click="deleteAccountFromList({title: account.title, id: account.key})"/>
        </div>
        <app-text weight="bold" class="-mb15">{{ account.title }}</app-text>
        <app-text weight="thin" size="small">{{ account.email }}</app-text>
    </div>
</template>

<script>
import appText from '@/components/Text.vue';
import IconMessage from '@/icons/message.svg';
import IconEdit from '@/icons/edit.svg';
import IconDelete from '@/icons/delete.svg';
import helperFuncs from "@/mixin/index.js";
import { mapMutations } from "vuex";

export default {
    components: {
        appText,
        IconMessage,
        IconEdit,
        IconDelete
    },
    props: {
        account: Object
    },
    methods: {
        ...mapMutations(["setIsOpenWindow", "deleteAccount"]),
        editAccount(event) {
            const accountId = event.target.getAttribute("data-account-id");
            this.$store.commit("setCurrentItem", this.$store.getters.getAccount(accountId));
            this.setIsOpenWindow({status: true, component: this.getCurrentComponentName(), title: "accountUpdateTitle"});
        },
        deleteAccountFromList(account) {
           if(confirm(`${account.title} başlıklı hesabı silmek istediğinizden emin misiniz?`)){
                this.$store.dispatch("deleteAccount", account.id);
            }
        }
    },
    mixins: [helperFuncs]
}
</script>

<style lang="scss" scoped>
.m-widget {
    &__card {
        height: 106px;
        width: 167px;
        border: 1px solid var(--widget-card-border-color);
        border-radius: 5px;
        background-color: var(--theme-bg-color);

        display: flex;
        align-items: center;
        justify-content: center;

        & .icon.-edit {
            position: absolute;
            right: 7px;
            top: 7px;
            color: var(--account-card-edit-color);
        }

        & .icon.-delete {
            position: absolute;
            right: 30px;
            top: 7px;
            color: var(--account-card-edit-color);
        }
    }

    &__item {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 20px 8px;
        color: var(--widget-text-color);
    }
}
</style>