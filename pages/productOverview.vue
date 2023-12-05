<template>
  <div
    class="mt-8 bg-white rounded-xl drop-shadow-sm py-4 px-2 md:mx-auto md:container"
  >
    <div class="flex gap-16">
      <section>
        <div class="flex-col pl-4">
          <h1
            class="flex-none mb-2 text-[#76402F] text-xl font-primary font-light"
          >
            Categories
          </h1>
          <div
            class="flex flex-wrap border-2 border-[#76402F] w-[230px] rounded-xl px-2 py-2 gap-2"
          >
            <div
              id="categories-all"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">All</a>
            </div>
            <div
              id="giftbox"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Gift Box</a>
            </div>
            <div
              id="bouquet"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Bouquet</a>
            </div>
            <div
              id="souvenir"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Souvenir</a>
            </div>
            <div
              id="personal"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Personal</a>
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
              id="occasion-all"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">All</a>
            </div>
            <div
              id="corporate"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Corporate</a>
            </div>
            <div
              id="anniversary"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Anniversary</a>
            </div>
            <div
              id="graduation"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Graduation</a>
            </div>
            <div
              id="birthday"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Birthday</a>
            </div>
            <div
              id="mood-booster"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Mood Booster</a>
            </div>
            <div
              id="new-baby"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">New Baby</a>
            </div>
            <div
              id="wedding"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Wedding</a>
            </div>
            <div
              id="grand-opening"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Grand Opening</a>
            </div>
            <div
              id="get-well-soon"
              class="text-[#76402F] font-primary border border-[#76402F] px-2 py-2 rounded-lg mb-2 active:bg-[#BB9393] hover:bg-[#76402F] hover:text-white"
            >
              <a href="">Get Well Soon</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="w-[900px] px-4 py-4">
          <div class="grid grid-cols-2">
            <div class="w-[-800px] h-[400px] rounded-xl">
              <img
                src="/images/buket2.png"
                alt=""
                class="rounded-xl drop-shadow-xl object-cover h-full w-full"
              />
            </div>
            <div class="pl-6 w-[800ppx] h-[400px]">
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
                  class="border-2 h-[70px] w-[70px] border-white rounded-full hover:bg-white"
                >
                  <p class="text-4xl text-white font-medium hover:text-black">
                    +
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
  count.value--;
}

const totalPrice = computed(() => {
  return 100 * count.value
})

</script>
