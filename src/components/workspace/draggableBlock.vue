<template>
<div
  class="draggable-block-container"
  :style="style">
  <div class="title">
    {{title}}
    <div
      @click="$emit('delete')"
      class="exit-button">-</div>
  </div>
</div>
</template>

<script>

export default {
  name: 'draggableBlock',
  components: {},
  props: {
    height: String,
    width: String,
    left: String,
    top: String,
    id: [String, Number],
    title: String,
  },
  watch: {
    id: function watcher(newValue, oldValue) {
      this.reCalcPosition();
    },
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width,
      };
    },
  },
  methods: {
    reCalcPosition() {
      this.$el.style.top = this.top;
      this.$el.style.left = this.left;
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.reCalcPosition();
  },
};
</script>

<style scoped lang="scss">
  @import "../../styles/base";
  @import "../../styles/colors";

  .draggable-block-container {
    border: 2px solid $common-separator;
    background-color: white;
    position: absolute;
    & .title {
      border-bottom: 2px solid $common-separator;
      padding: 0.5rem;
      position: relative;
      & .exit-button {
        border: 1px solid $common-separator;
        padding: 0 0.25rem;
        cursor: pointer;
        position: absolute;
        top: 0.5rem;
        left: 2rem;
      }
    }
  }
</style>
