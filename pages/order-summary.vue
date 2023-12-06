<template>
  <div class="mt-8 bg-white rounded-xl drop-shadow-sm py-4 px-16 md:mx-auto md:container">
    <h1 class="text-3xl text-[#76402F] font-primary text-center mb-[36px] mt-[36px] rounded-2xl">
      Order Summary
    </h1>
    <div class="border-2 border-[#76402F] px-6 py-6 rounded-xl">
      <div class="w-full border-2 border-[#76402F] py-4 px-4 flex rounded-xl gap-10 mb-3 justify-between">
        <div class="flex items-center space-x-8">
          <div class="w-[100px] h-[100px]">
            <img :src="`${useRuntimeConfig().public.API_URL}/images/${detailProduct.image
              }`" :alt="detailProduct.image" class="rounded-md" />
          </div>
          <div class="text-[#76402F] font-primary">
            <h3 class="text-lg font-bold">{{ detailProduct?.name }}</h3>
            <p class="text-sm text-[#76402F] font-primary mb-4">
              {{ detailProduct.description }}
            </p>
          </div>
          <div class="h-[100px] border border-[#76402F]"></div>
          <h3 class="text-[#76402F] font-primary text-xl">
            Rp. {{ detailProduct.price }},-
          </h3>
        </div>
        <!-- <div
          class="h-[32px] w-[32px] border border-[#76402F] rounded-md text-[#76402F] font-primary flex justify-center items-center"
        >
          <h5 class="text-xl">x1</h5>
        </div> -->
      </div>

      <div class="w-full border-2 border-[#76402F] py-4 px-4 flex rounded-xl gap-10 mb-5">
        <div>
          <h3 class="mb-4 text-[#76402F] font-primary font-thin text-md">
            Your greeting card to {{ greetingCardStore.data.recipient_name }}
          </h3>
          <div class="flex">
            <div class="flex">
              <img src="/images/gc1.png" alt="" class="w-[250px]" />
            </div>
            <div class="ml-10">
              <div class="flex items-center gap-10 py-4">
                <h3 class="w-[120px] text-[#76402F] font-primary font-thin text-md">
                  To
                </h3>
                <input type="text" readonly :value="greetingCardStore?.data.recipient_name"
                  class="border border-[#76402F] rounded-xl w-[400px]" />
              </div>
              <div class="flex items-center gap-10 pb-4">
                <h3 class="w-[120px] text-[#76402F] font-primary font-thin text-md">
                  From
                </h3>
                <input type="text" readonly :value="greetingCardStore?.data.sender_name"
                  class="border border-[#76402F] rounded-xl w-[400px]" />
              </div>
              <div class="flex items-center gap-10 pb-4">
                <h3 class="w-[120px] text-[#76402F] font-primary font-thin text-md">
                  Message
                </h3>
                <input type="text" readonly :value="greetingCardStore?.data.message"
                  class="border border-[#76402F] rounded-xl w-[400px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="border-2 border-[#76402F] rounded-xl px-4 py-2 text-[#76402F] font-primary text-lg drop-shadow-md w-full font-light mb-2">
        <p class="text-center max-w-3xl mx-auto py-6">
          To help us send your greeting card to the correct address, please fill out the shipping information form below.
          This information will help us to ensure that your greeting card arrives safely and on time.
          <br>
          <span class="font-bold italic">
            Please note that the item you will be receiving is a greeting card. This card should be given to the recipient
            of your gift..
          </span>
        </p>
        <div class="py-6 space-y-3">
          <h3 class="w-full text-[#76402F] font-primary font-thin text-md">
            Name:
          </h3>
          <input type="text" class="border border-[#76402F] rounded-xl w-full block"
            placeholder="Please enter your full name." v-model="shippingPayload.name" />
        </div>
        <div class="pb-6 space-y-3">
          <h3 class="text-[#76402F] font-primary font-thin text-md">
            WhatsApp Number:
          </h3>
          <input type="text" class="border border-[#76402F] rounded-xl w-full block"
            placeholder="Please enter your WhatsApp number. This number must be active." v-model="shippingPayload.whatsapp_number"/>
        </div>
        <div class="pb-6 space-y-3">
          <h3 class="text-[#76402F] font-primary font-thin text-md">
            Shipping Address:
          </h3>
          <input type="text" class="border border-[#76402F] rounded-xl w-full block"
            placeholder="Please enter the shipping address for your greeting card." v-model="shippingPayload.shipping_address" />
        </div>
      </div>
      <div
        class="border-2 border-[#76402F] rounded-xl px-4 py-2 text-[#76402F] text-center font-primary text-lg drop-shadow-md w-full font-light mb-4">
        <p class="font-bold text-3xl py-3">
          Total : Rp. {{ detailProduct.price }} <span class="text-xl">*(excluding shipping)</span>
        </p>
      </div>
      <div>
        <button @click="submitOrder()"
          class="bg-[#BB9393] rounded-xl px-4 py-2 text-white font-primary text-lg drop-shadow-md w-full font-light">
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

const shippingPayload = ref({
  name: null,
  whatsapp_number: null,
  shipping_address: null,
})

const { data: dataProduct } = await useFetch(
  `${config.public.API_URL}/product/${transactionStore.data.id_product}`,
  {
    onResponse({ response }) {
      detailProduct.value = response._data.productData;
    },
  }
);

const createGreetingCard = async () => {
  await useFetch('greeting-card', {
    baseURL: config.public.API_URL,
    method: 'POST',
    body: {
      receiver_name: greetingCardStore.data.recipient_name,
      sender_name: greetingCardStore.data.sender_name,
      message: greetingCardStore.data.message,
    },
    onResponse({ response }) {
      greetingCardStore.data._id = response._data.data._id
    }
  })
}

const submitOrder = async () => {
  await createGreetingCard()

  await useFetch('transaction', {
    baseURL: config.public.API_URL,
    method: 'POST',
    body: {
      item: transactionStore.data.id_product,
      greeting_card_id: greetingCardStore.data._id,
      total_price: transactionStore.data.total_price,
      buyer_name: shippingPayload.value.name,
      buyer_wa: shippingPayload.value.whatsapp_number,
      buyer_address: shippingPayload.value.whatsapp_number,
      status: 'belum dibayar',
      receiver_name: " ",
      receiver_wa: " ",
      receiver_address: " ",
    }
  })

  navigateTo("/complete");

};

</script>
