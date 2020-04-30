<template>
<div class="interactive-work-space-container">
  <div class="button-container">
    <aButton
      :label="'Сбросить настройки'"></aButton>
  </div>
  <workspace
    :blocks="blocks"></workspace>
</div>
</template>

<script>
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
  computed: {},
  methods: {},
  data() {
    return {
      blocks: [{
        height: '100px',
        width: '300px',
        x: '40px',
        y: '40px',
        title: 'title_1',
      }, {
        height: '100px',
        width: '300px',
        x: '500px',
        y: '500px',
        title: 'title_2',
      }],
    };
  },
  created() {
    if (!this.$store.state.interactiveWorkSpace) {
      this.$store.registerModule('interactiveWorkSpace', store);
    }
  },
  mounted() {
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
    }
  }
</style>
