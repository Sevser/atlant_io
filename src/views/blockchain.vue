<template>
  <div class="blockchain-route-container">
    <TransactionTable :transaction="transaction" />
  </div>
</template>

<script>
import blockchain from '@/utills/blockchain';
import TransactionTable from '@/components/TransactionTable';
import { Message } from '@/types/types';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'blockchain',
  components: {
    TransactionTable,
  },
  props: {},
  computed: {
    transaction() {
      // eslint-disable-next-line no-underscore-dangle
      return new Message(blockchain.lastMessage);
    },
  },
  methods: {},
  data() {
    return {
    };
  },
  mounted() {
    blockchain
      .init
      .then(() => {
        blockchain.subscribe();
      });
  },
  beforeUnmount() {
    blockchain.unsubscribe();
  },
});
</script>

<style scoped lang="scss">
@import "../styles/base";

.blockchain-route-container {
  position: relative;
  max-height: calc(100% - 5rem);
  @extend %flexColumn;
  & .handler-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem 40%;
  }
}
</style>
