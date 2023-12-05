<template>
  <nav class="bg-black border-gray-200 dark:bg-white">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/icon/Buketin.png" class="h-8" alt="Buketin Logo" />
      </a>
      <div class="flex md:order-2">
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-search"
      >
        <div class="relative mt-3 md:hidden">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="bg-white w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-none dark:bg-gray-800 md:dark:bg-white dark:border-gray-700"
        >
          <li>
            <NuxtLink
              to="/"
              class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#bb8d30] md:p-0 md:dark:hover:text-[#bb8d30] dark:text-white dark:hover:bg-gray-700 hover:text-black md:dark:hover:bg-transparent dark:border-gray-700 font-main font-light active:bg-[#bb8d30]"
              aria-current="page"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/catalogue"
              class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#bb8d30] md:p-0 md:dark:hover:text-[#bb8d30] dark:text-white dark:hover:bg-gray-700 hover:text-black md:dark:hover:bg-transparent dark:border-gray-700 font-main font-light active:bg-[#bb8d30]"
              >Catalogue</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/"
              class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#bb8d30] md:p-0 dark:text-white md:dark:hover:text-[#bb8d30] dark:hover:bg-gray-700 hover:text-black md:dark:hover:bg-transparent dark:border-gray-700 font-main font-light active:bg-[#bb8d30]"
              >About Us</NuxtLink
            >
          </li>
          <li class="flex space-x-1"
          data-modal-target="popup-modal" data-modal-toggle="popup-modal" >
            <NuxtLink
              to="/"
              class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#bb8d30] md:p-0 dark:text-white md:dark:hover:text-[#bb8d30] dark:hover:bg-gray-700 hover:text-black md:dark:hover:bg-transparent dark:border-gray-700 font-main font-light active:bg-[#bb8d30]"
              >Cart</NuxtLink
            >
            <img src="/icon/mdi_cart-outline.svg" alt="cart_svg" />
          </li>
        </ul>
      </div>
    </div>
  </nav>

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
          <svg
            class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h2 class="mb-5 text-lg font-normal text-[#76402F] dark:text-gray-400">
            Sorry
          </h2>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            This Feature Will Be Coming Soon
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<style></style>
