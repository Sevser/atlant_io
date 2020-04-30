<template>
  <div
    ref="container"
    class="grid">
    <draggableBlock
      :height="block.height"
      :width="block.width"
      :title="block.title"
      :key="index"
      :data-attr="`draggableBlock-${index}`"
      v-for="(block, index) in blocks">
    </draggableBlock>
  </div>
</template>

<script>
import Draggable from 'gsap/Draggable';
import draggableBlock from './draggableBlock';

export default {
  name: 'workspace',
  components: {
    draggableBlock,
  },
  props: {
    blocks: Array,
  },
  computed: {},
  methods: {
    watcherWidth(endValue) {
      return Math.round(endValue / this.gridWidth) * this.gridWidth;
    },
    watcherHeight(endValue) {
      return Math.round(endValue / this.gridHeight) * this.gridHeight;
    },
  },
  data() {
    return {
      draggableBlocks: [],
      gridWidth: 10,
      gridHeight: 10,
    };
  },
  mounted() {
    this.draggableBlocks = this.blocks.map((block, index) => Draggable.create(`div[data-attr="draggableBlock-${index}"]`, {
      type: 'x,y',
      edgeResistance: 0.65,
      bounds: 'div.grid',
      autoScroll: true,
      liveSnap: true,
      snap: {
        x: this.watcherWidth.bind(this),
        y: this.watcherHeight.bind(this),
      },
    }));
  },
};
</script>

<style scoped lang="scss">
  @import "../../styles/base";
  .grid {
    position: relative;
    height: calc(100% - 5rem);
    width: 100%;
    & .draggeble-box {
      height: 50px;
      width: 50px;
      background-color: red;
    }
  }
</style>
