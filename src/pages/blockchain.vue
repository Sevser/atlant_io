<template>
<div class="blockchain-container">
  blockchain
</div>
</template>

<script>
import store from '@/store/blockchain';

export default {
  name: 'blockchain',
  components: {},
  props: {},
  computed: {},
  methods: {},
  data() {
    return {};
  },
  created() {
    if (!this.$store.state.blockchain) {
      this.$store.registerModule('blockchain', store);
    }
  },
  destroyed() {
    if (!this.$store.state.blockchain) {
      this.$store.unregisterModule('blockchain');
    }
  },
};
</script>

<style scoped lang="scss">
  @import "../styles/base";

  .blockchain-container {
    @extend %fullHeightWidth;
  }

</style>
