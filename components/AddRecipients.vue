<template>

    <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Toggle modal
    </button>

    <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-4 md:p-5 text-center">
                    <h3 class="my-5 text-lg font-normal font-primary text-[#76402F] dark:text-gray-400">How many people will the gift you have chosen be given to?</h3>
                    
                    <div class="flex justify-center mb-4">
                        <button class="h-[30px] w-[30px] border-2 border-[#76402F] rounded-md text-[#76402F] hover:bg-[#76402F] hover:text-white">+</button>
                        <p class="px-4 text-[#76402F]">2</p>
                        <button class="h-[30px] w-[30px] border-2 border-[#76402F] rounded-md text-[#76402F] hover:bg-[#76402F] hover:text-white">-</button>
                    </div>

                    <button class="bg-[#BB9393] rounded-md w-[220px] h-[40px] p-2 hover:bg-[#9d6c6c]">
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

</script>