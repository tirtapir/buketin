<template>
  <div
    class="mt-8 bg-white rounded-xl drop-shadow-sm py-4 px-16 md:mx-auto md:container"
  >
    <h1
      class="text-3xl text-[#76402F] font-primary text-center mb-[36px] mt-[36px] rounded-2xl"
    >
      Order Summary
    </h1>
    <div class="border-2 border-[#76402F] px-6 py-6 rounded-xl">
      <div
        class="w-full border-2 border-[#76402F] py-4 px-4 flex rounded-xl gap-10 mb-3 justify-between"
      >
        <div class="flex items-center space-x-8">
          <div class="w-[100px] h-[100px]">
            <img
              :src="`${useRuntimeConfig().public.API_URL}/images/${
                detailProduct.image
              }`"
              :alt="detailProduct.image"
              class="rounded-md"
            />
          </div>
          <div class="text-[#76402F] font-primary">
            <h3 class="text-lg">{{ detailProduct?.name }}</h3>
            <p class="text-sm text-[#76402F] font-primary mb-4">
              {{ detailProduct.description }}
            </p>
          </div>
          <div class="h-[100px] border border-[#76402F]"></div>
          <h3 class="text-[#76402F] font-primary text-md">
            Rp. {{ detailProduct.price }},-
          </h3>
        </div>
        <!-- <div
          class="h-[32px] w-[32px] border border-[#76402F] rounded-md text-[#76402F] font-primary flex justify-center items-center"
        >
          <h5 class="text-xl">x1</h5>
        </div> -->
      </div>

      <div
        class="w-full border-2 border-[#76402F] py-4 px-4 flex rounded-xl gap-10 mb-5"
      >
        <div>
          <h3 class="mb-4 text-[#76402F] font-primary font-thin text-md">
            {{ greetingCardStore.recipient_name }} gifts
          </h3>
          <div class="flex">
            <div class="flex">
              <img src="images/gc1.png" alt="" class="w-[250px]" />
            </div>
            <div class="ml-10">
              <div class="flex items-center gap-10 py-4">
                <h3
                  class="w-[120px] text-[#76402F] font-primary font-thin text-md"
                >
                  To
                </h3>
                <input
                  type="text"
                  :value="greetingCardStore?.recipient_name"
                  class="border border-[#76402F] rounded-xl w-[400px]"
                />
              </div>
              <div class="flex items-center gap-10 pb-4">
                <h3
                  class="w-[120px] text-[#76402F] font-primary font-thin text-md"
                >
                  From
                </h3>
                <input
                  type="text"
                  :value="greetingCardStore?.sender_name"
                  class="border border-[#76402F] rounded-xl w-[400px]"
                />
              </div>
              <div class="flex items-center gap-10 pb-4">
                <h3
                  class="w-[120px] text-[#76402F] font-primary font-thin text-md"
                >
                  Message
                </h3>
                <input
                  type="text"
                  :value="greetingCardStore?.message"
                  class="border border-[#76402F] rounded-xl w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="border-2 border-[#76402F] rounded-xl px-4 py-2 text-[#76402F] font-primary text-lg drop-shadow-md w-full font-light mb-2"
      >
        Complete the following information:
        <div class="flex items-center gap-10 py-6">
          <h3 class="w-[120px] text-[#76402F] font-primary font-thin text-md">
            Nama
          </h3>
          <input
            type="text"
            class="border border-[#76402F] rounded-xl w-[400px]"
          />
        </div>
        <div class="flex items-center gap-10 pb-6">
          <h3 class="w-[120px] text-[#76402F] font-primary font-thin text-md">
            No. Wa
          </h3>
          <input
            type="text"
            class="border border-[#76402F] rounded-xl w-[400px]"
          />
        </div>
        <div class="flex items-center gap-10 pb-6">
          <h3 class="w-[120px] text-[#76402F] font-primary font-thin text-md">
            Address
          </h3>
          <input
            type="text"
            class="border border-[#76402F] rounded-xl w-[400px]"
          />
        </div>
      </div>
      <div
        class="border-2 border-[#76402F] rounded-xl px-4 py-2 text-[#76402F] text-center font-primary text-lg drop-shadow-md w-full font-light mb-4"
      >
        Sub Total Your Order : Rp {{ detailProduct.price }},-
      </div>
      <div>
        <button
          class="bg-[#BB9393] rounded-xl px-4 py-2 text-white font-primary text-lg drop-shadow-md w-full font-light"
        >
          Complete the Order
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useTransactionStore } from "../../store/transaction";
import { useGreetingCardStore } from "../../store/greeting-card";

const config = useRuntimeConfig();

const transactionStore = useTransactionStore();
const greetingCardStore = useGreetingCardStore();

const detailProduct = ref(null);

const { data: dataProduct } = await useFetch(
  `${config.public.API_URL}/product/${transactionStore.id_product}`,
  {
    onResponse({ response }) {
      detailProduct.value = response._data.productData;
    },
  }
);

console.log(detailProduct.value);
</script>
