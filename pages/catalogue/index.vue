<template>
  <div class="w-full pt-8 px-4 md:px-0">
    <div class="flex md:container md:mx-auto h-[200px]">
      <img src="/images/katalogBar.png" alt="" class="w-1/3" />
      <div class="w-2/3 bg-[#BB9393] rounded-se-2xl">
        <h1 class="pl-6 pt-4 text-3xl font-primary text-white">
          Choose your Gift or Start Build
        </h1>
        <p class="pl-6 mt-2 text-white w-[500px] font-primary">
          You can build your own gift by filling in the it ems provided and
          curated by Buketin teams.
        </p>
      </div>
    </div>

    <div
      class="bg-white rounded-b-xl drop-shadow-sm py-4 px-2 md:mx-auto md:container"
    >
      <div class="flex">
        <!-- <div class="flex-col">
          <h1
            class="flex-none mb-2 text-[#76402F] text-xl font-primary font-light"
          >
            Categories
          </h1>
          <div
            class="flex flex-wrap border-2 border-[#76402F] w-[230px] rounded-xl px-2 py-2 gap-2"
          >
            <div
              v-for="category in categories"
              :class="
                selectedCategory == category._id
                  ? 'bg-[#76402F] text-white'
                  : 'bg-white text-[#76402F]'
              "
              @click="filter(), (selectedCategory = category._id)"
              class="font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 cursor-pointer hover:bg-[#76402F] hover:text-white"
            >
              <p>{{ category.name }}</p>
            </div>
          </div>
          <h1
            class="flex-none mb-2 mt-4 text-[#76402F] text-xl font-primary font-light"
          >
            Occasions
          </h1>
          <div
            class="flex flex-wrap border-2 border-[#76402F] w-[230px] rounded-xl px-2 py-2 gap-2"
          >
            <div
              v-for="occasion in occasions"
              :class="
                selectedOccasion == occasion._id
                  ? 'bg-[#76402F] text-white'
                  : 'bg-white text-[#76402F]'
              "
              @click="filter(), (selectedOccasion = occasion._id)"
              class="font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 cursor-pointer hover:bg-[#76402F] hover:text-white"
            >
              <p>{{ occasion.name }}</p>
            </div>
          </div>
        </div> -->

        <div class="flex px-[40px]">
          <div class="grid grid-cols-3 gap-8">
            <div class="" v-for="item in products">
              <Cards :data="item"></Cards>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const products = ref([]);
const categories = ref([]);
const occasions = ref([]);
const selectedCategory = ref("656deb2932fe30b8848f2f81");
const selectedOccasion = ref(["656dea1132fe30b8848f2f74"]);

const { data: dataProduct } = await useFetch(
  `${config.public.API_URL}/product`,
  {
    onResponse({ response }) {
      products.value = response._data.productData;
    },
  }
);

const { data: dataCategory } = await useFetch(
  `${config.public.API_URL}/category`,
  {
    onResponse({ response }) {
      categories.value = response._data.categoryData;
    },
  }
);

const { data: dataOcation } = await useFetch(
  `${config.public.API_URL}/occasion`,
  {
    onResponse({ response }) {
      occasions.value = response._data.occasionData;
    },
  }
);

const filter = async () => {
  await useFetch(`${config.public.API_URL}/product/filter`, {
    query: {
      category: selectedCategory.value,
      occasion: selectedOccasion.value,
    },
  });
};
</script>
