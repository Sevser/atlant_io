<template>
<div class="interactive-work-space-container">
  <div class="button-container">
    <aButton
      @click="resetBlocks"
      :label="'Сбросить настройки'"></aButton>
    <aButton
      @click="addNewDefaultBlock"
      :label="'Добавить новый блок'"></aButton>
  </div>
  <workspace
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
    }),
  },
  methods: {
    ...mapActions({
      initializeBlocks: 'interactiveWorkSpace/initializeBlocks',
      resetBlocks: 'interactiveWorkSpace/resetBlocks',
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
