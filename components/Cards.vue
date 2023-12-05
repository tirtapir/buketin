<template>
  <div
    class="pt-2 px-2 w-full bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-[#bb8d30] hover:border-2 flex-col text-center"
  >
    <a href="/productOverview">
      <img class="rounded-t-lg" :src="data.imgUrl" alt="" />
    </a>
    <div class="p-5">
      <a href="/productOverview">
        <h5
          class="font-primary font-medium mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
        >
          {{ data.name }}
        </h5>
      </a>
      <p
        class="font-primary mb-3 font-light text-sm text-[#76402F] dark:text-gray-400"
      >
        {{ data.desc }}
      </p>
      <a
        href="/productOverview"
        class="font-primary inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black border border-[#76402F] rounded-lg hover:bg-[#BB9393] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {{ data.price }}
      </a>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
