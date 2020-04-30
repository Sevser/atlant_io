<template>
<div
  class="draggable-block-container"
  :style="style">
  <div class="title">
    {{title}}
    <div class="exit-button">-</div>
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
    title: String,
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width,
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
  @import "../../styles/base";
  @import "../../styles/colors";

  .draggable-block-container {
    border: 2px solid $common-separator;
    background-color: white;
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
