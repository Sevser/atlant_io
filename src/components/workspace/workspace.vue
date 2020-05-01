<template>
  <div
    ref="container"
    class="grid">
    <draggableBlock
      :block="block"
      :id="`${block.id}${index}`"
      :key="index"
      @delete="eraseBlock(block.id)"
      @update="updateBlock"
      :data-attr="`draggableBlock-${index}`"
      v-for="(block, index) in blocks">
    </draggableBlock>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Draggable from 'gsap/Draggable';
import draggableBlock from './draggableBlock';
import LSManager from '../../utills/localStorageManager';


export default {
  name: 'workspace',
  components: {
    draggableBlock,
  },
  props: {
    blocks: Array,
  },
  computed: {
    ...mapGetters({
      erasedBlocks: 'interactiveWorkSpace/erasedBlocks',
    }),
  },
  watch: {
    blocks: function watcher(newValue) {
      this.$nextTick(() => this.updateDraggableBlocks(newValue));
    },
  },
  methods: {
    watcherWidth(endValue) {
      return Math.round(endValue / this.gridWidth) * this.gridWidth;
    },
    watcherHeight(endValue) {
      return Math.round(endValue / this.gridHeight) * this.gridHeight;
    },
    dragEndHandler($event, index) {
      // debugger
      this.updateBlock({
        ...this.blocks[index],
        top: this.blocks[index].top + this.draggableBlocks[index].endY - this.draggableBlocks[index].startY,
        left: this.blocks[index].left + this.draggableBlocks[index].endX - this.draggableBlocks[index].startX,
      });
      this.$nextTick(() => this.draggableBlocks[index].update());
    },
    updateDraggableBlocks(blocks = []) {
      if (this.draggableBlocks.length !== this.blocks.length) {
        this.draggableBlocks.forEach(item => item.kill());
        this.draggableBlocks = blocks.map((block, index) => Draggable.create(`div[data-attr="draggableBlock-${index}"]`, {
          type: 'x,y',
          bounds: 'div.grid',
          autoScroll: true,
          liveSnap: true,
          onDragEnd: $event => this.dragEndHandler($event, index),
          snap: {
            x: this.watcherWidth,
            y: this.watcherHeight,
          },
        })[0]);
      } else {
        this.draggableBlocks.forEach(item => item.update());
      }
    },
    ...mapActions({
      eraseBlock: 'interactiveWorkSpace/eraseBlock',
      updateBlock: 'interactiveWorkSpace/updateBlock',
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
    window.onbeforeunload = () => {
      LSManager.updateBlocks(this.blocks);
      LSManager.updateErasedBlocks(this.erasedBlocks);
    };
    this.updateDraggableBlocks(this.blocks);
  },
  beforeDestroy() {
    LSManager.updateBlocks(this.blocks);
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
