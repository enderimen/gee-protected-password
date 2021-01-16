<template>
    <label class="theme-option" :for="name" @click="isChecked">
        <input :id="name" class="theme-option-checkbox" type="radio" name="theme" :checked="name == getCurrentThemeName()">
        <div class="theme-btn -mb10" :class="color" :data-theme-name="name"></div>
        <app-text color="soft"><slot/></app-text>
    </label>
</template>

<script>
import appText from './Text.vue';
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: { appText },
    props: {
        name: String,
        color: String
    },
    methods: {
        ...mapMutations(["setThemeName"]),
        ...mapGetters(["getCurrentThemeName"]),
        isChecked(event) {
            const currentTheme = event.target.getAttribute("data-theme-name")
            if(currentTheme) {
                this.$store.commit("setThemeName", currentTheme);
            }
        }
    }
}
</script>

<style lang="scss">
.theme-option {
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-checkbox {
        display: none;
        position: absolute;
        opacity: 0;
        visibility: hidden;
        left: -9999;
        top: -9999;

        & + .theme-btn {
            position: relative;
            cursor: pointer;
            height: 40px;
            width: 40px;
            border-radius: 40px;

            &.bunker {
                background-color: var(--theme-bunker);
            }
            &.science-blue {
                background-color: var(--theme-science-blue);
            }
            &.mona-lisa {
                background-color: var(--theme-mono-lisa);
            }
            &.day-light {
                border: 1px solid var(--placeholder-color);
                background-color: var(--white);

                &:before {
                    border-radius: 2px;
                    border-bottom: 3px solid var(--black) !important;
                    border-left: 3px solid var(--black) !important;
                }
            }
            &.klein-blue {
                background-color: var(--theme-klein-blue);
            }
            &.skulls {
                background: var(--content-bg-color) url("https://www.transparenttextures.com/patterns/skulls.png") 100%;
            }
            &.white-leather {
                background: var(--content-bg-color) url("https://www.transparenttextures.com/patterns/white-leather.png") 100%;
            }
            &.flowers {
                background: var(--content-bg-color) url("https://www.transparenttextures.com/patterns/flowers.png") 100%;
            }
            &.xv {
                background: var(--content-bg-color) url("https://www.transparenttextures.com/patterns/xv.png") 100%;
            }
        }

        &:checked + .theme-btn {
            &:before {
                content: "";
                position: absolute;
                left: 10px;
                top: 13px;
                transform: translate(-50%, -50%);
                display: inline-block;

                height: 7px;
                width: 18px;
                border-bottom: 3px solid var(--white);
                border-left: 3px solid var(--white);
                border-radius: 2px;
                transform: rotate(-45deg);
            }
        }
    }

    span {
        font-family: var(--font-family);
    }
}
</style>