<template>
<div class="interactive-work-space-container">
  <workspace
    :blocks="blocks"></workspace>
</div>
</template>

<script>
import store from '@/store/interactiveWorkSpace';
import workspace from '../components/workspace/workspace';

export default {
  name: 'interactiveWorkSpace',
  components: {
    workspace,
  },
  props: {},
  computed: {},
  methods: {},
  data() {
    return {
      blocks: [{
        height: '150px',
        width: '300px',
        x: '40px',
        y: '40px',
        title: 'title_1',
      }, {
        height: '150px',
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
  }
</style>
