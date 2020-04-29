<template>
<div>
  <viewer></viewer>
</div>
</template>

<script>
import store from '@/store/blockchain';
import viewer from '../components/blockchain/viewer';

export default {
  name: 'blockchain',
  components: {
    viewer,
  },
  props: {},
  computed: {
  },
  methods: {
  },
  data() {
    return {};
  },
  created() {
    if (!this.$store.state.blockchain) {
      this.$store.registerModule('blockchain', store);
    }
  },
  destroyed() {
    if (this.$store.state.blockchain) {
      this.$store.unregisterModule('blockchain');
    }
  },
};
</script>

<style scoped lang="scss">
  @import "../styles/base";

  .blockchain-container {
    @extend %fullHeightWidth;
    @extend %flexColumn;
    & .handler-container {
      display: flex;
      justify-content: space-between;
      padding: 1rem 40%;
    }
  }
</style>
