export const useTransactionStore = defineStore("transaction", {
  state: () => {
    return {
      data: {
        id_product: null,
        total_price: null,
        status: null,
      }
    };
  },
  getters: {},
  actions: {},
});
