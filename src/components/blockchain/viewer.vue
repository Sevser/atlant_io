<template>
<div class="viewer-container">
  <div class="handler-container">
    <aButton
      @click="launchHandler"
      :label="'Запуск'">
    </aButton>
    <aButton
      @click="stopHandler"
      :type="'error'"
      :label="'Остановка'">
    </aButton>
    <aButton
      @click="clearHandler"
      :type="'warning'"
      :label="'Сброс'">
    </aButton>
  </div>
  <div class="total-amount">
    {{totalAmount}}
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import aButton from '../base/a-button';

export default {
  name: 'viewer',
  components: {
    aButton,
  },
  props: {},
  computed: {
    ...mapGetters({
      transactions: 'blockchain/transactions',
      transactionsClear: 'blockchain/transactionsClear',
      totalAmount: 'blockchain/totalAmount',
    }),
  },
  methods: {
    launchHandler() {
      this.subscribe();
    },
    stopHandler() {
      this.unSubscribe();
    },
    clearHandler() {

    },
    addTransactionHandler(transaction) {
      this.addTransaction(transaction);
    },
    ...mapActions({
      subscribe: 'blockchain/subscribe',
      setMessageCallback: 'blockchain/setMessageCallback',
      addTransaction: 'blockchain/addTransaction',
      unSubscribe: 'blockchain/unSubscribe',
    }),
  },
  data() {
    return {};
  },
  mounted() {
    this.setMessageCallback(this.addTransaction);
  },
};
</script>

<style lang="scss" scoped>
  @import "../../styles/base";

  .viewer-container {
    @extend %fullHeightWidth;
    @extend %flexColumn;
    & .handler-container {
      display: flex;
      justify-content: space-between;
      padding: 1rem 40%;
    }
    & .total-amount {
      text-align: center;
      padding: 1rem 40%;
    }
  }
</style>
