export const useGreetingCardStore = defineStore("greeting-card", {
  state: () => {
    return {
      recipient_name: null,
      sender_name: null,
      message: null,
    };
  },
  getters: {},
  actions: {},
});
