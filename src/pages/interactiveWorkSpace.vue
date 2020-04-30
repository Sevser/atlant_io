<template>
<div class="interactive-work-space-container">
  <div class="button-container">
    <aButton
      @click="resetBlocks"
      :label="'Сбросить настройки'"></aButton>
    <aButton
      :disabled="canReturnErasedBlock"
      @click="returnErasedBlockHandler"
      :label="'Вернуть удаленный блок'"></aButton>
    <!--<aButton-->
      <!--@click="addNewDefaultBlock"-->
      <!--:label="'Добавить новый блок'"></aButton>-->
  </div>
  <workspace
    ref="workspace"
    :blocks="blocks"></workspace>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import store from '@/store/interactiveWorkSpace';
import workspace from '../components/workspace/workspace';
import aButton from '../components/base/a-button';

export default {
  name: 'interactiveWorkSpace',
  components: {
    workspace,
    aButton,
  },
  props: {},
  computed: {
    ...mapGetters({
      blocks: 'interactiveWorkSpace/blocks',
      canReturnErasedBlock: 'interactiveWorkSpace/canReturnErasedBlock',
    }),
  },
  methods: {
    returnErasedBlockHandler() {
      this.returnErasedBlock({
        left: (this.$refs.workspace.$el.getBoundingClientRect().width / 2) - 150,
        top: (this.$refs.workspace.$el.getBoundingClientRect().height / 2) - 50,
      });
    },
    ...mapActions({
      initializeBlocks: 'interactiveWorkSpace/initializeBlocks',
      resetBlocks: 'interactiveWorkSpace/resetBlocks',
      returnErasedBlock: 'interactiveWorkSpace/returnErasedBlock',
      addNewDefaultBlock: 'interactiveWorkSpace/addNewDefaultBlock',
    }),
  },
  data() {
    return {
    };
  },
  created() {
    if (!this.$store.state.interactiveWorkSpace) {
      this.$store.registerModule('interactiveWorkSpace', store);
    }
  },
  mounted() {
    this.initializeBlocks();
  },
};
</script>

<style scoped lang="scss">
  @import "../styles/base";

  .interactive-work-space-container {
    @extend %fullHeightWidth;
    & .button-container {
      width: 100%;
      display: flex;
      justify-content: center;
      & button {
        margin-right: 1rem;
      }
    }
  }
</style>
