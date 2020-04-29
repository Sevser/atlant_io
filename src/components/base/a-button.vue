<template>
<button
  @click="$emit('click')"
  :class="componentClasses"
  :disabled="disabled">
  {{label}}
</button>
</template>

<script>

export default {
  name: 'a-button',
  components: {},
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: type => !!(['common', 'error', 'warning'].indexOf(type) + 1),
      default: 'common',
    },
  },
  computed: {
    componentClasses() {
      return {
        [this.type]: true,
        disabled: this.disabled,
      };
    },
  },
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
  @import "../../styles/colors";
  button {
    border-radius: 6px;
    padding: 9px 11px;
    border: 0;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:active,&:focus {
      outline: none;
    }
    &.disabled {
      cursor: default;
      pointer-events: none;
    }

    &.common {
      background-color: $button-common-background;
      color: $button-common-color;
    }
    &.error {
      background-color: $button-error-background;
      color: $button-error-color;
    }
    &.warning {
      background-color: $button-warning-background;
      color: $button-warning-color;
    }
  }
</style>
