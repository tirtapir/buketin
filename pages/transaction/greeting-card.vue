<template>
  <div class="w-full pt-8 px-4 md:px-0">
    <div class="flex md:container md:mx-auto h-[200px]">
      <img src="images/KatalogBar.png" alt="" class="w-1/3" />
      <div class="w-2/3 bg-[#BB9393] rounded-se-2xl">
        <h1 class="pl-6 pt-4 text-3xl font-primary text-white">
          Make Your Greeting Card
        </h1>
        <p class="pl-6 mt-2 text-white w-[500px] font-primary">
          You can make a greeting card by choosing the template that we have
          provided. You only need to add your name and the message you want to
          convey.
        </p>
      </div>
    </div>

    <div
      class="bg-white rounded-b-2xl drop-shadow-sm py-4 px-4 md:mx-auto md:container"
    >
      <h1 class="text-xl text-[#76402F] font-primary pb-8">
        Choose Your Greeting Card Templates
      </h1>
      <div class="flex justify-between">
        <div class="pl-4">
          <img src="/images/gc1.png" alt="" class="w-[500px]" />
          <h3 class="text-xl text-[#76402F] font-primary pt-4">
            Greeting cards 1 of 2 recipients
          </h3>
        </div>
        <form @submit.prevent="handleGreetingCard">
          <div class="pb-5">
            <h3 class="text-lg text-[#76402F] font-primary">Recipient Name</h3>
            <input
              type="text"
              v-model="greetingCardPayload.recipient_name"
              class="w-[400px] rounded-lg border border-[#76402F]"
            />
          </div>
          <div class="pb-5">
            <h3 class="text-lg text-[#76402F] font-primary">Sender Name</h3>
            <input
              type="text"
              v-model="greetingCardPayload.sender_name"
              class="w-[400px] rounded-lg border border-[#76402F]"
            />
          </div>
          <div class="pb-5">
            <h3 class="text-lg text-[#76402F] font-primary">
              Write Message For The Gift Recipient
            </h3>
            <input
              type="text"
              v-model="greetingCardPayload.message"
              class="w-[400px] h-[80px] rounded-xl border border-[#76402F]"
            />
          </div>
          <button
            type="submit"
            class="bg-[#BB9393] rounded-lg py-2 px-4 hover:bg-[#9d6c6c]"
          >
            <span class="text-white text-base font-primary">
              Save Greeting Cards
            </span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGreetingCardStore } from "../../store/greeting-card";

const greetingCardStore = useGreetingCardStore();

const greetingCardPayload = ref({
  recipient_name: null,
  sender_name: null,
  message: null,
});

const handleGreetingCard = () => {
  greetingCardStore.recipient_name = greetingCardPayload.value.recipient_name;
  greetingCardStore.sender_name = greetingCardPayload.value.sender_name;
  greetingCardStore.message = greetingCardPayload.value.message;
  navigateTo("/order-summary");
  console.log(
    greetingCardStore.recipient_name,
    greetingCardStore.sender_name,
    greetingCardStore.message
  );
};
</script>
