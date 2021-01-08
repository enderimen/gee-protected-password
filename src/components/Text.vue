<template>
  <component class="-font" :is="tag" :class="[size, weight, color]">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CustomText',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal', // normal:14, small:12, xsmall:11, xxsmall:10
      validator: function(value) {
        return ['large', 'normal', 'small', 'xsmall', 'xxsmall'].indexOf(value) !== -1
      }
    },
    weight: {
      type: String,
      validator: function(value) {
        return ['thin', 'bold'].indexOf(value) !== -1
      }
    },
    color: {
      type: String,
      validator: function(value) {
        return ['soft'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
.-font {
  font-family: var(--font-family);
  user-select: none;
}
/* size */
.large {
  font-size: 24px;
  line-height: 36px;
}
.normal {
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
}
.small {
  font-size: 14px;
}
.xsmall {
  font-size: 11px;
}
.xxsmall {
  font-size: 10px;
}

/* weight */
.thin {
  font-weight: 300;
}
.bold {
  font-weight: 500;
}

/* color */
.soft {
  color: var(--soft-icon-color);
}
</style>