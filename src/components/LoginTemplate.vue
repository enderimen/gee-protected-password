<template>
  <section class="o-loginPanel">
        <div class="o-loginPanel__intro">
            <div class="m-dashboard">
                <img src="./../assets/logo.png" alt="logo" height="58" class="-mr10">
                <p><strong>gee</strong>protected</p>
            </div>

            <div class="o-loginPanel__introContent">
                <IconMiniLock class="icon -xlarge -mb20" />
                <app-text tag="h1" color="white" size="xlarge">Parola Yöneticinize hoş geldiniz!</app-text>
                <app-text tag="p" color="white" class="thin">Kaydedilmiş şif***erinizi Android ya da Chrome'da yönetin.</app-text>
            </div>
            <img class="intro-bg" src="./../icons/lock-bg.png" alt="">
        </div>

        <section class="o-loginPanel__content">
            <slot />
        </section>
        <app-text tag="p" size="small" class="copyright -mr20 -mb20">Tüm hakları saklıdır. &copy; 2021</app-text>
  </section>
</template>

<script>
import appText from "@/components/Text.vue";
import IconMiniLock from "@/icons/mini-lock.svg";
import appLogin from '@/components/Login.vue';

export default {
    components: {
        appText,
        appLogin,
        IconMiniLock
    }
}
</script>

<style lang="scss" scoped>
.o-loginPanel {
    height: 100vh;
    width: 100%;
    $introWidth: 500px;
    display: flex;
    position: relative;

    &__intro {
        position: relative;
        height: inherit;
        padding: 55px;
        background-color: var(--login-sidecontent-bg-color);
        flex: 1;
        min-width: 500px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        &Content {
            h1 {
                max-width: 350px;
                margin-bottom: 55px;

                font-weight: 600;
            }
            p {
                font-weight: 300;
                max-width: 350px;
            }
            svg {
                color: var(--white);
            }
        }
    }

    .intro-bg {
        position: absolute;
        right: 0;
        bottom: 0;
        background: url("./../icons/lock-bg.svg")  no-repeat bottom / 100px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 4;

        height: inherit;
        background-color: var(--white);
    }

    & .copyright {
        position: absolute;
        right: 0;
        bottom: 0;
    }
}

.m-dashboard {
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: var(--font-family);

    margin-bottom: 100px;

    & p {
        font-size: 18px;
        text-transform: uppercase;
        color: var(--white);
        font-size: 18px;
        line-height: 27px;
        margin-right: auto;
        font-weight: 400;
    }

    & b {
        font-size: 18px;
        line-height: 27px;
    }
}
</style>