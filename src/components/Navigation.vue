<template>
       <nav class="flex justify-between">
          <div class="hidden lg:flex gap-6 font-bold font-base">
             <a href="/" class="transition-colors text-gray-400 duration-300 -ml-8 cursor-pointer hover:text-white">Home</a>
             <a href="/products" class="transition-colors text-gray-400 duration-300 cursor-pointer hover:text-white">Products</a>
             <a href="/" class="transition-colors duration-300 text-gray-400 cursor-pointer hover:text-white">Blog</a>
             <a href="/" class="transition-colors duration-300 text-gray-400 cursor-pointer hover:text-white">Contacts</a>
          </div>
          <a href="/" class="uppercase text-3xl text-white -ml-2 -mt-2 font-head font-extrabold">UrbaneHide</a>
          <div class="flex gap-4 text-white font-base relative -mr-4">
             <input v-model="text" type="text" class="hidden lg:block rounded-full bg-[#3B3B3B] px-3 py-1.5 pl-10 focus:ring-0 focus:outline-none placeholder:ml-5 placeholder:text-white" placeholder="Search">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5
                absolute top-2 mx-3 hidden lg:block 
                h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mt-1
             transition-colors duration-300 cursor-pointer hover:text-white text-gray-400 hidden lg:block 
             h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
             </svg>
             <Cart/>
          </div>
       </nav>
  </template>
  <script>
  import Cart from '@/components/Cart.vue';
  export default {
    name: 'Navigation',
    components: {
     Cart
    },
    data() {
        return {
            text: "",
        }
    },
    watch: {
    text(newVal, oldVal) {
      this.emitter.emit("updateSearch", newVal)
    }
  },
  }
  </script>
  <style>
  html {
    background-color: #212121;
  }
  </style>