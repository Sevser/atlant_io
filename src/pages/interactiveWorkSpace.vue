<template>
<div class="interactive-work-space-container">
  interactiveWorkSpace
</div>
</template>

<script>
import store from '@/store/interactiveWorkSpace';

export default {
  name: 'interactiveWorkSpace',
  components: {},
  props: {},
  computed: {},
  methods: {},
  data() {
    return {};
  },
  created() {
    if (!this.$store.state.interactiveWorkSpace) {
      this.$store.registerModule('interactiveWorkSpace', store);
    }
  },
};
</script>

<style scoped lang="scss">
  @import "../styles/base";

  .interactive-work-space-container {
    @extend %fullHeightWidth;
  }
</style>
