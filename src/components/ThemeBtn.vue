<template>
    <label class="theme-option" :for="name">
        <input :id="name" class="theme-option-checkbox" type="radio" name="theme" :checked="checked">
        <div class="theme-btn -mb10" :class="color"></div>
        <app-text color="soft"><slot/></app-text>
    </label>
</template>

<script>
import appText from './Text.vue'
export default {
  components: { appText },
    props: {
        name: String,
        color: String,
        checked: Boolean
    }
}
</script>

<style lang="scss">
.theme-option {
    margin: 20px;
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
            &.mono-lisa {
                background-color: var(--theme-mono-lisa);
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
                transform: rotate(-45deg);
            }
        }
    }

    span {
        font-family: var(--font-family);
    }
}
</style>