<template>
    <div>
        <div
        class="w-full border-2 border-[#76402F] py-4 px-4 flex rounded-xl gap-10 mb-5"
      >
        <div class="w-[55%] flex items-center">
          <input
            type="checkbox"
            id="default-checkbox"
            class="mr-6 w-4 h-4 text-[#76402F] bg-gray-100 border-gray-300 rounded focus:ring-[#76402F] dark:focus:ring-[#76402F] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
            <img :src="data.imgUrl" alt="" 
            class="w-[100px] h-[100px] rounded-md drop-shadow-md mr-10"
            />
          <div class="space-y-4">
            <p class="text-[#76402F] font-primary text-lg">{{data.name}}</p>
            <p class="text-[#76402F] font-primary text-md font-thin">{{data.categories}}</p>
          </div>
        </div>
        <div class="w-[45%] flex items-center">
          <div class="h-[100px] border border-[#76402F] mr-10"></div>
          <div class="space-y-4">
            <p class="text-[#76402F] font-primary text-lg">Rp {{data.price}},-</p>
            <div class="flex">
              <button
                class="h-[30px] w-[30px] border-2 border-[#76402F] rounded-md text-[#76402F] hover:bg-[#76402F] hover:text-white"
                @click="decrement"
              >
                -
              </button>
              <p class="px-4 text-[#76402F]">{{count}}</p>
              <button
                @click="increment"
                class="h-[30px] w-[30px] border-2 border-[#76402F] rounded-md text-[#76402F] hover:bg-[#76402F] hover:text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>


const props = defineProps({
        data: {
            type: Object,
            required: true,
        }
    })

let count = ref(0)

const increment = function(){
    count.value++
}
const decrement = function(){
    if (count.value != 0)
    count.value--
}

</script>
