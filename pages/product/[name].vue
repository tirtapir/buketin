<template>
    <div
      class="mt-8 bg-white rounded-xl drop-shadow-sm py-4 px-2 md:mx-auto md:container"
    >      
        <section>
          <div class="w-full px-4 py-4">
            <div class="grid grid-cols-2">
              <div class="h-full pl-8">
                <img
                  src="/images/buket2.png"
                  alt=""
                  class="rounded-xl drop-shadow-xl object-cover h-full w-[500px]"
                />
              </div>
              <div class="pl-0 w-[800ppx] h-[400px]">
                <p class="text-4xl text-[#76402F] font-primary mb-4">
                  Roses Bouquet
                </p>
                <p class="text-lg text-[#76402F] font-primary mb-4">
                  Rangkaian Buket 5 bunga mawar dengan edelweiss sebagai hiasan
                  tambahan
                </p>
                <h1 class="text-3xl text-[#76402F] font-primary mb-4"
                {{ 
                  
                    itemData.price
                  
                 }}
                >
  
                </h1>
                <div class="flex mt-10">
                  <button
                    @click="increment"
                    class="h-[30px] w-[30px] rounded-md border-2 border-[#76402F] hover:text-white hover:bg-[#BB9393] font-semibold"
                  >
                    +
                  </button>
                  <p
                    class="mx-4 text-[#76402F] text-2xl font-primary font-semibold"
                  >
                    {{count}}
                  </p>
                  <button
                    @click="decrement"
                    class="h-[30px] w-[30px] rounded-md border-2 border-[#76402F] hover:text-white hover:bg-[#BB9393] font-semibold"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-[#BB9393] rounded-lg my-7">
              <div class="grid grid-cols-3">
                <div class="flex items-center justify-center">
                  <div class="grid grid-rows-2 px-4">
                    <p class="py-4 text-2xl text-white font-primary font-normal">
                      Roses Bouquet
                    </p>
                    <p class="text-lg text-white font-primary font-light">
                      {{count}} items
                    </p>
                  </div>
                </div>
  
                <p
                  class="text-3xl text-white font-primary font-light flex items-center justify-center"
                >
                  {{totalPrice}}
                </p>
  
                <div class="flex justify-center items-center">
                  <button
                    class="border-2 py-2 px-4 border-white rounded-xl hover:bg-white/50 hover:text-[#76402F] hover:border-[#76402F]"
                  >
                    <p class="text-xl text-white font-medium hover:text-[#76402F]">
                      Add to Cart
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // const total = ref(0);
  const count = ref(0);
  
  const increment = function(){
    count.value++;
  }
  
  const decrement = function(){
    if (count.value != 0){
        count.value--;
    }
  }
  
  const totalPrice = computed(() => {
    return 100 * count.value
  })
  
  </script>
  