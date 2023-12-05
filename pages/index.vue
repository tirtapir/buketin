<template>
  <div>
    <section class="bg-black h-96 relative py-4">
      <div class="flex justify-end absolute bottom-0 right-0 h-full">
        <img
          src="/images/home-banner.png"
          alt="banner home"
          class="w-full object-center h-96 object-cover"
        />
      </div>
      <div class="text-white px-5 relative flex flex-col items-center md:py-6">
        <h1
          class="text-lg font-light text-center mb-5 py-5 md:text-3xl md:font-semibold md:w-[420px] font-main"
        >
          Celebrate The Moment With a Personalized Gift, Make it Memorable With
          Us
        </h1>
        <div class="flex justify-center space-x-8 md:space-x-24">
          <div class="flex flex-col items-center">
            <p class="font-extralight text-base mb-4">Personalized Now</p>
            <nuxt-link to="/bouquetCustomFlower" class="">
              <button
                class="rounded-full border px-4 py-2 border-white font-extralight hover:bg-white hover:text-black hover:font-semibold"
              >
                Click here
              </button>
            </nuxt-link>
          </div>

          <div class="flex flex-col items-center">
            <p class="font-extralight text-base mb-4">Choose the Gift Now</p>
            <nuxt-link to="/catalogue" class="">
              <button
                class="rounded-full border px-4 py-2 border-white font-extralight hover:bg-white hover:text-black hover:font-semibold"
              >
                Click here
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-8 container mx-auto">
      <h1
        class="flex-none text-center text-[#76402F] font-medium text-3xl mb-8 font-primary"
      >
        How it Works
      </h1>
      <div class="grid grid-cols-3">
        <div class="flex flex-col items-center text-center space-y-4">
          <div
            class="flex items-center justify-center h-10 w-10 rounded-full bg-[#76402F] md:h-12 md:w-12"
          >
            <span class="text-white text-2xl font-semibold md:font-bold"
              >1</span
            >
          </div>
          <p class="text-[#76402F] font-semibold text-base md:text-lg">
            Personalized Gift
          </p>
          <p
            class="text-[#76402F] font-light text-base text-center md:font-normal"
          >
            With Buketin you can make your own custom gift, package and greeting
            cards according to your occassions or or you can choose a gift that
            we have provided with existing trend recommendations
          </p>
        </div>
        <div class="flex flex-col items-center text-center space-y-4">
          <div
            class="flex items-center justify-center h-10 w-10 rounded-full bg-[#76402F] md:h-12 md:w-12"
          >
            <span class="text-white text-2xl font-semibold md:font-bold"
              >2</span
            >
          </div>
          <p class="text-[#76402F] font-semibold text-base md:text-lg">
            Make it Easy
          </p>
          <p
            class="text-[#76402F] font-light text-base text-center md:font-normal"
          >
            With us you can make sending gifts easier, so you don't need to be
            embarrassed and bother bringing gifts anywhere, anytime and on any
            occasion.
          </p>
        </div>
        <div class="flex flex-col items-center text-center space-y-4">
          <div
            class="flex items-center justify-center h-10 w-10 rounded-full bg-[#76402F] md:h-12 md:w-12"
          >
            <span class="text-white text-2xl font-semibold md:font-bold"
              >3</span
            >
          </div>
          <p class="text-[#76402F] font-semibold text-base md:text-lg">
            Get the gift
          </p>
          <p
            class="text-[#76402F] font-light text-base text-center md:font-normal"
          >
            The recipient of your gift just scans the QR code on the greeting
            card and the gift will immediately be in their hands.
          </p>
        </div>
      </div>
    </section>

    <section class="pt-6">
      <h5 class="text-xl text-[#76402F] font-semibold pl-4 md:2xl font-primary">
        Discover Your Next Level Occasion Celebration
      </h5>
      <p
        class="text-xs text-[#76402F] font-light pl-4 pt-2 md:text-sm font-primary"
      >
        Gift Inspirations by the occasion based on trend research
      </p>
      <div class="overflow-x-auto flex space-x-4 px-4 py-4">
        <div
          class="flex flex-shrink-0 justify-center items-center h-32 w-64 bg-white rounded-lg relative md:h-40 md:w-72 drop-shadow-md"
        >
          <img
            src="/images/anv.png"
            alt="anv"
            class="object-cover h-32 w-64 rounded-lg absolute md:h-40 md:w-72 drop-shadow-lg"
          />
          <div
            class="bg-black/50 absolute w-full h-full rounded-lg md:h-40 md:w-72"
          ></div>
          <h5 class="text-white font-medium text-xl relative">Anniversary</h5>
        </div>

        <div
          class="flex flex-shrink-0 justify-center items-center h-32 w-64 bg-white rounded-lg relative md:h-40 md:w-72 drop-shadow-md"
        >
          <img
            src="/images/grdt.png"
            alt="anv"
            class="object-cover h-32 w-64 rounded-lg absolute md:h-40 md:w-72"
          />
          <div
            class="bg-black/50 absolute w-full h-full rounded-lg md:h-40 md:w-72"
          ></div>
          <h5 class="text-white font-medium text-xl relative">Graduation</h5>
        </div>

        <div
          class="flex flex-shrink-0 justify-center items-center h-32 w-64 bg-white rounded-lg relative md:h-40 md:w-72 drop-shadow-md"
        >
          <img
            src="/images/crprt.png"
            alt="anv"
            class="object-cover h-32 w-64 rounded-lg absolute md:h-40 md:w-72"
          />
          <div
            class="bg-black/50 absolute w-full h-full rounded-lg md:h-40 md:w-72"
          ></div>
          <h5 class="text-white font-medium text-xl relative">Corporate</h5>
        </div>

        <div
          class="flex flex-shrink-0 justify-center items-center h-32 w-64 bg-white rounded-lg relative md:h-40 md:w-72 drop-shadow-md"
        >
          <img
            src="/images/bd.png"
            alt="anv"
            class="object-cover h-32 w-64 rounded-lg absolute md:h-40 md:w-72"
          />
          <div class="bg-black/50 absolute w-full h-full rounded-lg"></div>
          <h5 class="text-white font-medium text-xl relative">Birthday</h5>
        </div>

        <div
          class="flex flex-shrink-0 justify-center items-center h-32 w-64 bg-white rounded-lg relative md:h-40 md:w-72 drop-shadow-md"
        >
          <img
            src="/images/gws.png"
            alt="anv"
            class="object-cover h-32 w-64 rounded-lg absolute md:h-40 md:w-72"
          />
          <div
            class="bg-black/50 absolute w-full h-full rounded-lg md:h-40 md:w-72"
          ></div>
          <h5 class="text-white font-medium text-xl relative">Get Well Soon</h5>
        </div>

        <div
          class="flex flex-shrink-0 justify-center items-center h-32 w-64 bg-white rounded-lg relative md:h-40 md:w-72 drop-shadow-md"
        >
          <img
            src="/images/wdg.png"
            alt="anv"
            class="object-cover h-32 w-64 rounded-lg absolute md:h-40 md:w-72"
          />
          <div class="bg-black/50 absolute w-full h-full rounded-lg"></div>
          <h5 class="text-white font-medium text-xl relative">Wedding</h5>
        </div>
        <div
          class="flex flex-shrink-0 justify-center items-center h-32 w-64 bg-white rounded-lg relative md:h-40 md:w-72 drop-shadow-md"
        >
          <img
            src="/images/nb.png"
            alt="anv"
            class="object-cover h-32 w-64 rounded-lg absolute md:h-40 md:w-72"
          />
          <div class="bg-black/50 absolute w-full h-full rounded-lg"></div>
          <h5 class="text-white font-medium text-xl relative">New Baby</h5>
        </div>

        <div
          class="flex flex-shrink-0 justify-center items-center h-32 w-64 bg-white rounded-lg relative md:h-40 md:w-72"
        >
          <img
            src="/images/mb.png"
            alt="anv"
            class="object-cover h-32 w-64 rounded-lg absolute md:h-40 md:w-72"
          />
          <div class="bg-black/50 absolute w-full h-full rounded-lg"></div>
          <h5 class="text-white font-medium text-xl relative">Mood Booster</h5>
        </div>
      </div>
    </section>

    <section class="">
      <h2
        class="text-xl text-[#76402F] font-normal pl-4 mt-16 md:text-2xl font-primary"
      >
        Categories
      </h2>

      <div
        class="mt-8 grid cols-1 md:grid-cols-2 md:w-[1400px] md:pl-7 md:mb-6 md:drop-shadow-xl"
      >
        <img
          src="/images/ctgr1.png"
          alt="giftbox"
          class="w-full h-[360px] object-cover flex justify-center items-center md:h-[450px] md:rounded-l-3xl"
        />

        <div
          class="bg-[#363535] w-full h-[360px] flex flex-col items-center text-center justify-center md:h-[450px] md:rounded-r-3xl"
        >
          <h1 class="py-0 text-white font-medium text-3xl">Gift Box</h1>
          <p class="py-4 w-56 text-white font-light">
            Open the gift box. Your magical and special moment awaits inside
            this beautiful gift box!
          </p>
          <nuxt-link to="" class="">
            <button
              class="text-white rounded-full border px-4 py-0 border-white font-extralight hover:bg-white hover:text-black hover:font-semibold"
            >
              Click here
            </button>
          </nuxt-link>
        </div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 md:w-[1400px] md:pl-7 md:mb-6 md:drop-shadow-xl"
      >
        <img
          src="/images/ctgr2.png"
          alt="giftbox"
          class="w-full h-[360px] object-cover flex justify-center items-center md:order-last md:h-[450px] md:rounded-r-3xl"
        />
        <div
          class="bg-[#BB7347] w-full h-[360px] flex flex-col items-center text-center justify-center md:h-[450px] md:rounded-l-3xl"
        >
          <h1 class="py-0 text-white font-medium text-3xl">Bouquet</h1>
          <p class="py-4 w-56 text-white font-light">
            Floral Symphony: Where every bloom plays a note of happiness!
          </p>
          <nuxt-link to="" class="">
            <button
              class="text-white rounded-full border px-4 py-0 border-white font-extralight hover:bg-white hover:text-black hover:font-semibold"
            >
              Click here
            </button>
          </nuxt-link>
        </div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 md:w-[1400px] md:pl-7 md:mb-6 md:drop-shadow-xl"
      >
        <img
          src="/images/ctgr3.png"
          alt="giftbox"
          class="w-full h-[360px] object-cover flex justify-center items-center md:h-[450px] md:rounded-l-3xl"
        />
        <div
          class="bg-[#A9BFD3] w-full h-[360px] flex flex-col items-center text-center justify-center md:h-[450px] md:rounded-r-3xl"
        >
          <h1 class="py-0 text-white font-medium text-3xl">Souvenir</h1>
          <p class="py-4 w-56 text-white font-light">
            Each souvenir carries a unique story from this special moment
          </p>
          <nuxt-link to="" class="">
            <button
              class="text-white rounded-full border px-4 py-0 border-white font-extralight hover:bg-white hover:text-black hover:font-semibold"
            >
              Click here
            </button>
          </nuxt-link>
        </div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 md:w-[1400px] md:pl-7 md:drop-shadow-xl"
      >
        <img
          src="/images/ctgr4.png"
          alt="giftbox"
          class="w-full h-[360px] object-cover flex justify-center items-center md:order-last md:h-[450px] md:rounded-r-3xl"
        />
        <div
          class="bg-[#BB9393] w-full h-[360px] flex flex-col items-center text-center justify-center md:h-[450px] md:rounded-l-3xl"
        >
          <h1 class="py-0 text-white font-medium text-3xl">Personal</h1>
          <p class="py-4 w-56 text-white font-light">
            Never hesitate to be the best version of yourself. Every second is a
            new opportunity to create happiness.
          </p>
          <nuxt-link to="" class="">
            <button
              class="text-white rounded-full border px-4 py-0 border-white font-extralight hover:bg-white hover:text-black hover:font-semibold"
            >
              Click here
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>
