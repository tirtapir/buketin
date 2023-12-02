<template>
    <div
    class="mt-8 bg-white rounded-xl drop-shadow-sm py-4 px-2 md:mx-auto md:container">
    <div class="flex gap-16">
      
      <section>
        <div class="flex-col pl-4">
            <h1
              class="flex-none mb-2 text-[#76402F] text-xl font-primary font-light"
            >
              Categories
            </h1>
            <div
              class="flex flex-wrap border-2 border-[#76402F] w-[230px] rounded-xl px-2 py-2 space-x-2"
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
              class="flex flex-wrap border-2 border-[#76402F] w-[230px] rounded-xl px-2 py-2 space-x-2"
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
                <div class="w-[-800px] h-[400px] ">
                    <img src="/images/buket3.png" alt="" class="rounded-xl drop-shadow-xl object-cover h-full w-full">
                </div>
                <div class="pl-6 w-[800ppx] h-[400px]">
                    <p class="text-2xl text-[#76402F] font-primary mb-4">Items</p>

                    <div id="accordion-collapse" data-accordion="collapse" class="h-[350px] overflow-y-auto">
                        
                        <h2 id="rose-heading-1">
                        <button type="button" class="bg-white flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#rose-body-1" aria-expanded="true" aria-controls="rose-body-1">
                            <span>Rose</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>
                        </button>
                        </h2>
                        <div id="rose-body-1" class="hidden" aria-labelledby="rose-heading-1">
                        <div class="bg-white">
                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-white flex ">
                                <div class="">
                                    <img src="/images/rose2.png" alt="" class="w-[120px] rounded-md drop-shadow-lg object-cover">
                                </div>
                                <p class="w-[250px] text-gray-500 font-primary text-sm px-4"> Dianggap sebagai simbol keindahan yang datang dengan duri-duri sebagai perlambang bahwa keindahan tidak selalu tanpa rintangan atau kesulitan.</p>   
                                <div class="flex-none">
                                    <div class="space-y-1  ">
                                        <div class="w-[20px] h-[20px] rounded-sm bg-red-800 drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                        <div class="w-[20px] h-[20px] rounded-sm bg-[#FFCD00] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                        <div class="w-[20px] h-[20px] rounded-sm bg-[#FABACB] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                        <div class="w-[20px] h-[20px] rounded-sm bg-[#EDEBDE] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                        <div class="w-[20px] h-[20px] rounded-sm bg-[#AA32A7] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex align-center">
                                <p class="text-[#76402F] text-xl font-primary pl-5 pb-2 pr-[230px]">8.000</p>
                                <button class="w-[24px] h-[24px] border border-gray-700 px-1 py-1 rounded-sm">
                                    <span class="">+</span>
                                </button>
                                <div class="mx-4">10</div>
                                <button class="w-[24px] h-[24px] border border-gray-700 px-1 py-1 rounded-sm">
                                    <span>-</span>
                                </button>
                            </div>
                        </div>   
                        </div>

                        <h2 id="lily-1">
                        <button type="button" class="bg-white flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#lily-body-1" aria-expanded="false" aria-controls="lily-body-1">
                            <span>Lily</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>
                        </button>
                        </h2>
                        <div id="lily-body-1" class="hidden" aria-labelledby="lily-1">
                            <div class="bg-white">
                                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-white flex ">
                                    <div class="">
                                        <img src="/images/lily1.png" alt="" class="w-[120px] rounded-md drop-shadow-lg object-cover">
                                    </div>
                                    <p class="w-[250px] text-gray-500 font-primary text-sm px-4">Secara umum, bunga lili melambangkan kesucian, kemurnian, dan keabadian. Bunga ini sering digunakan dalam upacara keagamaan dan pernikahan.</p>   
                                    <div class="flex-none">
                                        <div class="space-y-1  ">
                                            <div class="w-[20px] h-[20px] rounded-sm bg-red-800 drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                            <div class="w-[20px] h-[20px] rounded-sm bg-[#FFCD00] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                            <div class="w-[20px] h-[20px] rounded-sm bg-[#CB389C] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                            <div class="w-[20px] h-[20px] rounded-sm bg-[#EDEBDE] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                            <div class="w-[20px] h-[20px] rounded-sm bg-[#EC4900] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex align-center">
                                    <p class="text-[#76402F] text-xl font-primary pl-5 pb-2 pr-[230px]">7.000</p>
                                    <button class="w-[24px] h-[24px] border border-gray-700 px-1 py-1 rounded-sm">
                                        <span class="">+</span>
                                    </button>
                                    <div class="mx-4">10</div>
                                    <button class="w-[24px] h-[24px] border border-gray-700 px-1 py-1 rounded-sm">
                                        <span>-</span>
                                    </button>
                                </div>
                            </div>   
                            </div>

                        <h2 id="tulip-heading-1">
                            <button type="button" class="bg-white flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#tulip-body-1" aria-expanded="false" aria-controls="tulip-body-1">
                                <span>Tulip</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                            </h2>
                            <div id="tulip-body-1" class="hidden" aria-labelledby="tulip-heading-1">
                                <div class="bg-white">
                                    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-white flex ">
                                        <div class="">
                                            <img src="/images/tulip1.jpeg" alt="" class="w-[120px] rounded-md drop-shadow-lg object-cover">
                                        </div>
                                        <p class="w-[250px] text-gray-500 font-primary text-sm px-4">Secara umum, bunga tulip melambangkan cinta, pengampunan, dan keabadian. Bunga ini juga sering dikaitkan dengan musim semi dan kelahiran kembali.</p>   
                                        <div class="flex-none">
                                            <div class="space-y-1  ">
                                                <div class="w-[20px] h-[20px] rounded-sm bg-red-800 drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                                <div class="w-[20px] h-[20px] rounded-sm bg-[#EDEBDE] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                                <div class="w-[20px] h-[20px] rounded-sm bg-[#FFCD00] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                                <div class="w-[20px] h-[20px] rounded-sm bg-[#9D0071] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                                <div class="w-[20px] h-[20px] rounded-sm bg-[#FF55A5] drop-shadow-sm hover:border-2 hover:border-black"> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex align-center">
                                        <p class="text-[#76402F] text-xl font-primary pl-5 pb-2 pr-[230px]">12.000</p>
                                        <button class="w-[24px] h-[24px] border border-gray-700 px-1 py-1 rounded-sm">
                                            <span class="">+</span>
                                        </button>
                                        <div class="mx-4">10</div>
                                        <button class="w-[24px] h-[24px] border border-gray-700 px-1 py-1 rounded-sm">
                                            <span>-</span>
                                        </button>
                                    </div>
                                </div>   
                                </div>

                        <h2 id="accordion-collapse-heading-3">
                        <button type="button" class="bg-white flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>Sun Flower</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>
                        </button>
                        </h2>
                        <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                            <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                            <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                            <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
  
                </div>
            </div>

            <div class="bg-[#BB9393] rounded-lg my-7 ">
                <div class="grid grid-cols-3">
                    <div class="grid grid-rows-2 px-4">
                        <p class="py-4 text-2xl text-white font-primary font-normal">Custom Bouquet</p>
                        <p class="text-lg text-white font-primary font-light">10 items</p>
                    </div>
                    <div class="grid grid-rows-2 px-4">
                        <p class="py-4 text-2xl text-white font-primary font-normal">30.000</p>
                        <p class="text-lg text-white font-primary font-light">80.000</p>
                    </div>
                    <p class="text-3xl text-white font-primary font-light flex items-center">110.000</p>
                </div>
            </div>
          </div>
      </section>
      
    </div>
    </div>
</template>
<script></script>