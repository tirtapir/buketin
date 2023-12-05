<template>
  <div
    class="mt-8 bg-white rounded-xl drop-shadow-sm py-4 px-2 md:mx-auto md:container"
  >
    <div class="w-full px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="w-[-800px] h-[400px] rounded-xl">
          <img
            :src="`${useRuntimeConfig().public.API_URL}/images/${
              detailProduct.image
            }`"
            :alt="detailProduct.name"
            class="rounded-xl drop-shadow-xl object-cover h-full w-full"
          />
        </div>
        <div class="flex flex-col justify-between gap-10">
          <div>
            <h1 class="text-4xl text-[#76402F] font-primary mb-4">
              {{ detailProduct.name }}
            </h1>
            <p class="text-lg text-[#76402F] font-primary mb-4">
              {{ detailProduct.description }}
            </p>

            <h1 class="text-4xl text-[#76402F] font-primary mb-4">
              Rp. {{ detailProduct.price }},-
            </h1>
          </div>

          <div
            @click="handleTransaction"
            class="bg-[#BB9393] rounded-lg w-full flex justify-around items-center gap-5 p-5 hover:border-black cursor-pointer"
          >
            <div>
              <p class="text-2xl text-white font-primary font-normal">
                {{ detailProduct.name }}
              </p>
              <p class="text-lg text-white font-primary font-light">1 items</p>
            </div>

            <p
              class="text-2xl text-white font-primary font-light flex items-center justify-center"
            >
              Rp. {{ detailProduct.price }},-
            </p>

            <button @click="handleTransaction">
              <svg
                class="fill-white"
                height="60"
                width="60"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTransactionStore } from "../../store/transaction";

const transactionStore = useTransactionStore();

const config = useRuntimeConfig();
const route = useRoute().params;

const detailProduct = ref(null);
const count = ref(0);

const { data: dataProduct } = await useFetch(
  `${config.public.API_URL}/product/${route.id}`,
  {
    onResponse({ response }) {
      detailProduct.value = response._data.productData;
    },
  }
);

const handleTransaction = () => {
  transactionStore.id_product = detailProduct.value._id;
  transactionStore.total_price = detailProduct.value.price;
  console.log(transactionStore.id_product, transactionStore.total_price);
  navigateTo("/transaction/greeting-card");
};

const increment = function () {
  count.value++;
};

const decrement = function () {
  count.value--;
};

const totalPrice = computed(() => {
  return 100 * count.value;
});
</script>
