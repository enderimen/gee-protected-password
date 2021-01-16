<template>
    <div class="m-widget__item">
        <div class="m-widget__card -mb15">
        <IconMessage class="icon -large"/>
        </div>
        <app-text weight="bold" class="-mb15">{{ account.title }}</app-text>
        <app-text weight="thin" size="small">{{ account.email }}</app-text>
    </div>
</template>

<script>
import appText from '@/components/Text.vue';
import IconMessage from '@/icons/message.svg';
export default {
    components: {
        appText,
        IconMessage
    },
    props: {
        account: Object
    }
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
  }

  &__item {
    display: flex;
    flex-direction: column;
    margin: 20px 8px;
    color: var(--widget-text-color);
  }
}
</style>