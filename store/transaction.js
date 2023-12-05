export const useTransactionStore = defineStore("transaction", {
  state: () => {
    return {
      id: null,
      id_product: null,
      total_price: null,
      status: null,
    };
  },
  getters: {},
  actions: {},
});
