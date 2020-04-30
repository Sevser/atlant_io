<template>
  <div
    ref="container"
    class="grid">
    <draggableBlock
      :height="block.height"
      :width="block.width"
      :title="block.title"
      :top="block.top"
      :left="block.left"
      :id="block.id"
      :key="index"
      @delete="handleDelete(index)"
      :data-attr="`draggableBlock-${index}`"
      v-for="(block, index) in blocks">
    </draggableBlock>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
  watch: {
    blocks: function watcher(newValue) {
      this.draggableBlocks.forEach(item => item.kill());
      this.$nextTick(() => this.initDraggableBlocks(newValue));
    },
  },
  methods: {
    handleDelete(index) {
      this.draggableBlocks[index].kill();
      this.eraseBlock(index);
    },
    watcherWidth(endValue) {
      return Math.round(endValue / this.gridWidth) * this.gridWidth;
    },
    watcherHeight(endValue) {
      return Math.round(endValue / this.gridHeight) * this.gridHeight;
    },
    initDraggableBlocks(blocks = []) {
      this.draggableBlocks = blocks.map((block, index) => Draggable.create(`div[data-attr="draggableBlock-${index}"]`, {
        type: 'x,y',
        edgeResistance: 0.65,
        bounds: 'div.grid',
        autoScroll: true,
        liveSnap: true,
        snap: {
          x: this.watcherWidth.bind(this),
          y: this.watcherHeight.bind(this),
        },
      })[0]);
    },
    ...mapActions({
      eraseBlock: 'interactiveWorkSpace/eraseBlock',
    }),
  },
  data() {
    return {
      draggableBlocks: [],
      gridWidth: 10,
      gridHeight: 10,
    };
  },
  mounted() {
    this.initDraggableBlocks(this.blocks);
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
