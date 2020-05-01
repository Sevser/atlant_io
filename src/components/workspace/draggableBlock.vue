<template>
<div
  class="draggable-block-container"
  :style="style">
  <div class="title">
    {{block.title}}
    <div
      @click="$emit('delete')"
      class="exit-button">-</div>
  </div>
  <div
    ref="resize"
    class="resize-handle">
  </div>
</div>
</template>

<script>
import Draggable from 'gsap/Draggable';

export default {
  name: 'draggableBlock',
  components: {},
  props: {
    block: Object,
    id: [Number, String],
  },
  watch: {
    block: function watcher() {
      this.reCalcPosition();
    },
    id: function watcher(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.setInitialPosition();
      }
    },
  },
  computed: {
    style() {
      return {
        height: `${this.sizeChanged ? this.changedHeight : this.block.height}px`,
        width: `${this.sizeChanged ? this.changedWidth : this.block.width}px`,
      };
    },
  },
  methods: {
    setInitialPosition() {
      this.$el.style.top = `${this.block.top}px`;
      this.$el.style.transform = 'unset';
      this.$el.style.left = `${this.block.left}px`;
      this.$refs.resize.style.top = `${this.block.height - 30}px`;
      this.$refs.resize.style.left = `${this.block.width - 30}px`;
      this.$refs.resize.style.transform = 'unset';
    },
    reCalcPosition() {
      this.changedHeight = this.block.height;
      this.changedWidth = this.block.width;
      this.sizeChanged = false;
    },
    dragHandler() {
      this.sizeChanged = true;
      this.changedHeight = this.changedHeight + this.draggable.deltaY;
      this.changedWidth = this.changedWidth + this.draggable.deltaX;
    },
    dragEndHandler() {
      this.$emit('update', {
        ...this.block,
        height: this.changedHeight,
        width: this.changedWidth,
      });
    },
  },
  data() {
    return {
      sizeChanged: false,
      changedHeight: false,
      changedWidth: false,
      draggable: null,
    };
  },
  mounted() {
    this.reCalcPosition();
    this.setInitialPosition();
    this.draggable = Draggable.create(this.$refs.resize, {
      type: 'x,y',
      liveSnap: true,
      // x: this.block.height,
      // y: this.block.width,
      onDragEnd: this.dragEndHandler,
      onDrag: this.dragHandler,
      onPress(e) {
        e.stopPropagation(); // cancel drag
      },
    })[0];
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
    & .resize-handle {
      position: absolute;
      border-right: 20px solid #bbbbbb;
      border-top: 20px solid transparent;
      height: 0;
      width: 0;
      cursor: nwse-resize;
      user-select: none;
    }
  }
</style>
