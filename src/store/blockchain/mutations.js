export const ADD_TRANSACTION = (state, transaction) => {
  state.transactions.push(transaction);
  const outValue = transaction.x.out.reduce((acc, { addr, value }) => {
    acc.to.add(addr);
    acc.amount += value;
    return acc;
  }, { to: new Set(), amount: 0 });
  outValue.to = [...outValue.to];
  state.transactionsClear.push({
    from: [...(new Set(transaction.x.inputs.map(({ prev_out: { addr } }) => addr)))],
    ...outValue,
  });
  state.totalAmount += outValue.amount;
};

export const CLEAR_TRANSACTIONS = (state) => {
  state.transactions = [];
  state.transactionsClear = [];
  state.totalAmount = 0;
};
