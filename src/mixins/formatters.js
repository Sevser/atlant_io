export default {
  methods: {
    formatterBitcons(satoshi = 0) {
      return satoshi / 100000000;
    },
  },
};
