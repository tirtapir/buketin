<template>
  <div>
    <div class="py-8 font-primary">
      <div class="container mx-auto">
        <div class="bg-white py-10 px-20 rounded-xl space-y-2 text-center">
          <h1 class=" font-bold text-4xl text-[#76402F]">Hello, {{ data.greeting_card_id.receiver_name }}</h1>
          <p class="text-[#ae8477] text-2xl">Welcome to the gift claim page!</p>

          <div class="inline-flex items-center justify-center w-full">
            <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
            <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <svg class="w-4 h-4 text-[#76402F] dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 18 14">
                <path
                  d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
            </div>
          </div>

          <div class="text-left pt-5 text-[#ae8477]" v-if="status === 'proses card'">
            <p class="text-2xl">Your friend, <span class="font-bold text-[#76402F]">{{ data.greeting_card_id.sender_name
            }} </span> has sent you a gift!</p>
            <p class="text-2xl mb-10">Please fill in the form below to claim your gift.</p>

            <div class="space-y-2 mb-4">
              <label for="name" class="text-2xl">Name : </label>
              <input type="text" id="name"
                class="border border-[#ae8477] rounded-xl block w-full placeholder:text-[#dfbfb6]"
                placeholder="Please enter your full name." v-model="receiverPayload.receiver_name" />
            </div>
            <div class="space-y-2 mb-4">
              <label for="phone" class="text-2xl">WhatsApp Number : </label>
              <input type="text" id="phone"
                class="border border-[#ae8477] rounded-xl block w-full placeholder:text-[#dfbfb6]"
                placeholder="Please enter your WhatsApp number. This number must be active."
                v-model="receiverPayload.receiver_wa" />
            </div>

            <div class="space-y-2 mb-4">
              <label for="address" class="text-2xl">Shipping Address :</label>
              <textarea id="address" class="border border-[#ae8477] rounded-xl block w-full placeholder:text-[#dfbfb6]"
                placeholder="Please enter the shipping address for your gift."
                v-model="receiverPayload.receiver_address" />
            </div>

            <div>
              <p class="italic">
                *After you have entered your information, please click the "Claim Gift" button.
                We will verify your information and ship your gift as soon as possible.
                Thank you for choosing us!
              </p>
            </div>

            <button @click="claim()"
              class="bg-[#BB9393] rounded-xl px-4 py-6 text-white font-primary text-2xl font-bold drop-shadow-md w-full hover:bg-[#8e6f6f] mt-4">
              Claim Gift!
            </button>
          </div>

          <div class="text-left pt-5 text-[#ae8477]" v-else-if="status === 'proses gift'">
            <p class="text-2xl">Your gift has been claimed!</p>
            <p class="text-2xl mb-10">Please wait for your gift to arrive.</p>
          </div>

          <div class="text-left pt-5 text-[#ae8477]" v-else-if="status === 'selesai'">
            <p class="text-2xl">Your gift has been claimed!</p>
            <p class="text-2xl mb-10"> Thank you for choosing us!</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = ref()
const status = ref()
const config = useRuntimeConfig()
const route = useRoute();
const receiverPayload = ref({
  receiver_name: null,
  receiver_wa: null,
  receiver_address: null,
})

await useFetch(`/transaction/${route.params.id}`, {
  baseURL: config.public.API_URL,
  onResponse({ response }) {
    data.value = response._data.transactionData
    status.value = response._data.transactionData.status
  }
})

const claim = async () => {
  await useFetch(`/transaction/claim/${route.params.id}`, {
    baseURL: config.public.API_URL,
    method: 'PUT',
    body: {
      receiver_address: receiverPayload.value.receiver_address,
      receiver_wa: receiverPayload.value.receiver_wa,
      receiver_name: receiverPayload.value.receiver_name,
      status: "proses gift"
    },
    onResponse({ response }) {
      status.value = response._data.transactionData.status
    }
  })
}

</script>

<style></style>