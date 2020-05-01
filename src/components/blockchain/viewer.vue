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
    {{formatterBitcons(totalAmount)}} BTC
  </div>
  <div class="table-transactions">
    <div
      class="header">
      <div>From</div>
      <div>To</div>
      <div>Sum</div>
    </div>
    <div
      class="row"
      :key="index"
      v-for="(item, index) in transactionsClear">
      <div>
        <div
          :key="`from_${index}_${address}`"
          v-for="address in item.from">
          {{address}}
        </div>
      </div>
      <div>
        <div
          :key="`to_${index}_${address}`"
          v-for="address in item.to">
          {{address}}
        </div>
      </div>
      <div>
        {{formatterBitcons(item.amount)}} BTC
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import aButton from '../base/a-button';
import formatters from '../../mixins/formatters';

export default {
  mixins: [formatters],
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
      this.clearTransactions();
    },
    addTransactionHandler(transaction) {
      this.addTransaction(transaction);
    },
    ...mapActions({
      subscribe: 'blockchain/subscribe',
      setMessageCallback: 'blockchain/setMessageCallback',
      addTransaction: 'blockchain/addTransaction',
      clearTransactions: 'blockchain/clearTransactions',
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
  @import "../../styles/colors";

  .viewer-container {
    position: relative;
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
    & .table-transactions {
      @extend %flexColumn;
      width: 100%;
      overflow: auto;
      height: calc(100% - 5rem);
      & .header {
        position: sticky;
        top: 0;
        background: white;
        border-top: 1px solid $common-separator;
        display: flex;
        align-items: center;
        padding: 1rem;
        & > div {
          width: 33%;
          @extend %flexColumn;
          cursor: default;
        }
      }
      & .row {
        border-top: 1px solid $common-separator;
        &:last-child {
          border-bottom: 1px solid $common-separator;
        }
        display: flex;
        align-items: center;
        padding: 1rem;
        & > div {
          width: 33%;
          @extend %flexColumn;
          text-decoration: underline;
          cursor: default;
        }
      }
    }
  }
</style>
