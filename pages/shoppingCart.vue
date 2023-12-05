<template>
  <div
    class="mt-8 bg-white rounded-xl drop-shadow-sm py-4 px-16 md:mx-auto md:container"
  >
    <h1
      class="text-3xl text-[#76402F] font-primary text-center mb-[52px] mt-[70px] rounded-2xl"
    >
      Shopping Cart
    </h1>
    <div class="border-2 border-[#76402F] px-6 py-6 rounded-xl">
      <ShoppingItem :data="item" v-for="item in items"></ShoppingItem>

      <button
        class="bg-[#BB9393] rounded-xl px-4 py-2 text-white font-primary text-lg drop-shadow-md w-full font-light"
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
      >
        Check Out your Gift
      </button>
    </div>
  </div>

  <div
    id="popup-modal"
    tabindex="-1"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
   >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-4 md:p-5 text-center">
          <h3
            class="my-5 text-lg font-normal font-primary text-[#76402F] dark:text-gray-400"
          >
            How many people will the gift you have chosen be given to?
          </h3>

          <div class="flex justify-center mb-4">
            <button
              class="h-[30px] w-[30px] border-2 border-[#76402F] rounded-md text-[#76402F] hover:bg-[#76402F] hover:text-white"
              @click="decrement"
            >
              -
            </button>
            <p class="px-4 text-[#76402F]">{{count}}</p>
            <button
              class="h-[30px] w-[30px] border-2 border-[#76402F] rounded-md text-[#76402F] hover:bg-[#76402F] hover:text-white"
              @click="increment"
            >
              +
            </button>
          </div>

          <button
            class="bg-[#BB9393] rounded-md w-[220px] h-[40px] p-2 hover:bg-[#9d6c6c]"
          >
            <span class="text-white text-base font-primary">
              Make your greeting card
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const count = ref(0);
// const total_count = ref(0)



const increment = function () {
  count.value++;
};

const decrement = function () {
  if (count.value != 0) {
    count.value--;
  }
};

const totalPrice = computed(() => {
  return 100 * count.value;
});

const items = ref([
  {
    id: "b1",
    name: "Roses Bouquet",
    price: "150000",
    desc: "Rangkaian Buket 5 bunga mawar dengan edelweiss sebagai hiasan tambahan",
    categories: "Bouquet",
    occasions: "anniversary",
    imgUrl: "/images/buket1.png",
  },

  {
    id: "b2",
    name: "Tulip Bouquet",
    price: "125000",
    desc: "Rangkaian Buket 5 bunga Tulip dengan edelweiss sebagai hiasan tambahan",
    categories: "Bouquet",
    occasions: "anniversary",
    imgUrl: "/images/buket2.png",
  },

  {
    id: "b3",
    name: "Lavender Bouquet",
    price: "150000",
    desc: "Rangkaian Buket 15 bunga Lavender dengan edelweiss sebagai hiasan tambahan",
    categories: "Bouquet",
    occasions: "anniversary",
    imgUrl: "/images/buket3.png",
  },
]);
</script>
