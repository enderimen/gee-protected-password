<template>
    <div class="m-password__item js-tab">
        <app-text size="small" weight="bold" class="-mb10">{{ password.title }}</app-text>
        <app-text size="small" weight="thin">{{ password.name }}</app-text>
    </div>
</template>

<script>
import appText from "@/components/Text.vue";
export default {
    components: {
        appText
    },
    props: {
        password: Object
    }
}
</script>

<style lang="scss">
.m-password__item {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20px;
    cursor: pointer;
    transition: ease-in 300ms;
    border-bottom: 1px solid var(--line-bg-color);

    &.-active {
        color: var(--light-text-color);
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