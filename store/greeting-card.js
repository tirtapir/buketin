export const useGreetingCardStore = defineStore("greeting-card", {
  state: () => {
    return {
      data: {
        recipient_name: null,
        sender_name: null,
        message: null,
        _id: null
      }
    };
  },
  getters: {},
  actions: {},
});
