
export const ADD_TRANSACTION = (state, transaction) => {
  state.transactions.push(transaction);
  const outValue = transaction.x.out.reduce((acc, { addr, value }) => {
    acc.to.push(addr);
    acc.amount += value;
    return acc;
  }, { to: [], amount: 0 });
  state.transactionsClear.push({
    from: transaction.x.inputs.map(({ prev_out: { addr } }) => addr),
    ...outValue,
  });
  state.totalAmount += outValue.amount;
};

export const CLEAR_TRANSACTIONS = (state) => {
  state.transactions = [];
  state.transactionsClear = [];
  state.totalAmount = 0;
};
