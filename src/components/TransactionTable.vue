<template>
  <div class="table-transactions-container">
    <table>
      <colgroup>
        <col span="1" style="width: 40%;">
        <col span="1" style="width: 40%;">
        <col span="1" style="width: 20%;">
      </colgroup>
      <thead>
        <tr>
          <th>from</th>
          <th>to</th>
          <th>sum</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="trans.x.hash"
          v-for="trans of transactions">
          <td>{{ trans.x.inputs.map(({ prev_out }) => prev_out.addr).join('\n') }}</td>
          <td>{{ trans.x.out.map(({ addr }) => addr).join('\n') }}</td>
          <td>{{ formatBTC(trans.x.size) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Message } from '@/types/types';

export default {
  name: 'TransactionTable',
  components: {},
  props: {
    transaction: {
      type: Message,
      required: true,
    },
  },
  watch: {
    transaction: {
      handler(newValue) {
        this.transactions = [newValue, ...this.transactions].slice(0, 20);
      },
      deep: true,
    },
  },
  computed: {},
  methods: {
    formatBTC(satoshi = 0) {
      return `${satoshi / 100000000} btc`;
    },
  },
  data() {
    return {
      transactions: [],
    };
  },
};
</script>

<style scoped lang="scss">
.table-transactions-container {
  width: 100%;
  height: 100%;
  position: relative;
  & table {
    width: 100%;
    border-collapse: collapse;
    & thead {
      & tr {
        border: 1px solid lightgrey;
      }
    }
    & tbody {
      & tr {
        & td {
          border: 1px solid lightgrey;
        }
      }
    }
  }
}

</style>
