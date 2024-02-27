<template>
<div class="container mx-auto pb-6">
    <Navigation />

    <div class="mt-10 hidden lg:grid grid-cols-2 gap-x-12">
        <div class="bg-[#7A6C69] rounded-2xl pb-8">
            <div class="ml-16 flex flex-col gap-5">
                <h3 class="font-script text-white text-xl mt-5 text-start">The Fletcher</h3>
                <h3 class="font-head uppercase text-white text-5xl text-start">
                    elegant leather <br> men's backpacks
                </h3>
                <p class="text-white font-base text-lg text-start mr-5">
                    Beautifully crafted leather bags, by the world class makers. Enjoy our amazing very own longstanding, classic leather bag brand.
                    Beautifully crafted leather bags, by the world class makers. Enjoy our amazing very own longstanding, classic leather bag brand.

                </p>
                <button @click="goToProducts" class="bg-[#FFAB7D] w-36 rounded-full
              transition-opacity duration-300 cursor-pointer hover:opacity-80
              font-base text-black py-1.5">
                    Explore more
                </button>
                <div class="flex gap-4 mt-5 text-white font-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p>Nairobi, Kenya</p>
                </div>
            </div>
        </div>
        <div class="rounded-2xl bg-cover" :style="{ backgroundImage: `url(${require('@/assets/' + 'jakob-owens-BmH09wAkJa8-unsplash.jpg')})` }">
        </div>
    </div>
    <div class="bg-[#3B3B3B] hidden lg:block w-full h-40 mt-10 rounded-3xl">
        <div class="flex justify-between mr-10 ml-10">
            <div class="text-white font-base flex  flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 mt-5 h-20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                <p>Free shipping & Returns</p>
            </div>
            <div class="text-white font-base flex  flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 mt-5 h-20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>100% Money Back Guarantee</p>
            </div>
            <div class="text-white font-base flex  flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 mt-5 h-20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>
                <p>High Quality Material</p>
            </div>
            <div class="text-white font-base flex  flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 mt-5 h-20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <p>Safe & Secure Checkout</p>
            </div>
        </div>
    </div>
    <div class="mt-10 hidden lg:grid lg:grid-cols-2 grid-cols-1 gap-y-5 lg:gap-5">
        <div class="h-96">
            <h1 class="text-white mt-3 font-head text-5xl uppercase lg:text-start text-center">about us</h1>
            <p class="font-base text-white text-lg lg:text-start text-center mt-3">
                We deal in sales of premium leather bags that match your everyday style and gives you a sense of swag.
            </p>

            <p class="font-base text-white text-lg text-start mt-5">
                Beautifully crafted leather bags, by the world class makers. Enjoy our amazing very own longstanding, classic leather bag brand.
            </p>

            <p class="font-base text-white text-lg text-start mt-5">
                Beautifully crafted leather bags, by the world class makers. Enjoy our amazing very own longstanding, classic leather bag brand.
            </p>

            <p class="font-base text-white text-lg text-start mt-5">
                Beautifully crafted leather bags, by the world class makers. Enjoy our amazing very own longstanding, classic leather bag brand.
            </p>
        </div>
        <div class="rounded-2xl bg-cover" :style="{ backgroundImage: `url(${require('@/assets/' + 'andrew-neel-fqoYO9MjLLQ-unsplash.jpg')})` }">
        </div>
    </div>
    <div class="bg-[#F5F5F5] w-11/12 ml-4 lg:ml-0 lg:w-full pb-12 mt-10 rounded-3xl">
        <div class="flex justify-between ml-8 mr-8">
            <h1 class="text-black mt-10 font-head lg:text-5xl uppercase text-start">latest arrivals</h1>

            <p v-if="cartUpdated" class="font-base text-lg text-green-500 mt-12">Product added to cart.</p>
            <p v-else class="font-base hidden lg:block text-black mt-12">Browse through a wide collection of items.</p>

            <button @click="goToProducts" class="bg-[#FFAB7D] lg:w-40 px-4 lg:px-0
           transition-opacity duration-300 cursor-pointer hover:opacity-80
           rounded-full font-base text-black -py-4 mt-10">
                All Products
            </button>
        </div>
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-x-5 gap-y-5 mt-8 ml-8 mr-8">
            <div>
                <div class="lg:pb-8 pb-4 bg-gray-50 rounded-2xl">
                    <span class="flex justify-end items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mr-2 
                    transition-colors duration-300 cursor-pointer hover:text-[#FFAB7D]
                    mt-2 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </span>
                    <div class="flex justify-center items-center">
                        <img class="lg:h-64 h-32 rounded-3xl w-48 object-cover" src="../assets/bag_1.png" alt="">
                    </div>
                </div>
                <div class="flex justify-between mt-3 font-base text-black">
                    <div class="mt-2 flex flex-col text-start lg:flex-row lg:gap-4">
                        <h3>Bag
                        </h3>
                        <h3> KES 2100.00</h3>

                    </div>
                    <span class="bg-[#FFAB7D] h-8 w-8  mt-4 lg:mt-0
                 transition-opacity duration-300 cursor-pointer hover:opacity-80 flex justify-center items-center
                 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </span>
                </div>
            </div>
            <div>
                <div class="lg:pb-8 pb-4 bg-gray-50 rounded-2xl">
                    <span class="flex justify-end items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mr-2 
                    transition-colors duration-300 cursor-pointer hover:text-[#FFAB7D]
                    mt-2 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </span>
                    <div class="flex justify-center items-center">
                        <img class="lg:h-64 h-32 rounded-3xl w-48 object-cover" src="../assets/bg_5.png" alt="">
                    </div>
                </div>
                <div class="flex justify-between mt-3 font-base text-black">
                    <div class="mt-2 flex flex-col text-start lg:flex-row lg:gap-4">
                        <h3>Bag
                        </h3>
                        <h3> KES 2100.00</h3>

                    </div>
                    <span class="bg-[#FFAB7D] h-8 w-8  mt-4 lg:mt-0
                 transition-opacity duration-300 cursor-pointer hover:opacity-80 flex justify-center items-center
                 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </span>
                </div>
            </div>
            <div>
                <div class="lg:pb-8 pb-4 bg-gray-50 rounded-2xl">
                    <span class="flex justify-end items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mr-2 
                    transition-colors duration-300 cursor-pointer hover:text-[#FFAB7D]
                    mt-2 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </span>
                    <div class="flex justify-center items-center">
                        <img class="lg:h-64 h-32 rounded-3xl w-48 object-cover" src="../assets/bg_6.png" alt="">
                    </div>
                </div>
                <div class="flex justify-between mt-3 font-base text-black">
                    <div class="mt-2 flex flex-col text-start lg:flex-row lg:gap-4">
                        <h3>Bag
                        </h3>
                        <h3> KES 2100.00</h3>

                    </div>
                    <span class="bg-[#FFAB7D] h-8 w-8  mt-4 lg:mt-0
                 transition-opacity duration-300 cursor-pointer hover:opacity-80 flex justify-center items-center
                 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </span>
                </div>
            </div>
            <div>
                <div class="lg:pb-8 pb-4 bg-gray-50 rounded-2xl">
                    <span class="flex justify-end items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mr-2 
                    transition-colors duration-300 cursor-pointer hover:text-[#FFAB7D]
                    mt-2 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </span>
                    <div class="flex justify-center items-center">
                        <img class="lg:h-64 h-32 rounded-3xl w-48 object-cover" src="../assets/bg_2.png" alt="">
                    </div>
                </div>
                <div class="flex justify-between mt-3 font-base text-black">
                    <div class="mt-2 flex flex-col text-start lg:flex-row lg:gap-4">
                        <h3>Bag
                        </h3>
                        <h3> KES 2100.00</h3>

                    </div>
                    <span class="bg-[#FFAB7D] h-8 w-8  mt-4 lg:mt-0
                 transition-opacity duration-300 cursor-pointer hover:opacity-80 flex justify-center items-center
                 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="rounded-2xl  w-11/12 ml-4 lg:ml-0 lg:w-full h-80 mt-16 lg:mt-12 bg-cover flex flex-col items-center justify-center" :style="{ backgroundImage: `url(${require('@/assets/' + 'jakob-owens-BmH09wAkJa8-unsplash.jpg')})` }">
        <h3 class="font-head uppercase text-white lg:text-6xl text-lg text-center">
            fashion is what designers offer you four times a <br> year. and the style is what you choose
        </h3>
        <h3 class="font-script text-white text-3xl mt-5 text-center">Laura Houtoh</h3>
    </div>
    <div class="mt-12  w-11/12 ml-4 lg:ml-0 lg:w-full">
        <div class="flex flex-col lg:flex-row lg:justify-between">
            <h3 class="font-head uppercase text-white text-6xl text-center">
                our blog
            </h3>
            <p class="text-white font-base">
                Read our latest articles.
            </p>
            <button class="bg-[#FFAB7D] 
           transition-opacity duration-300 cursor-pointer hover:opacity-80
           w-32 rounded-full font-base text-black h-10 hidden lg:block">
                Open page
            </button>
        </div>
        <div class="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-5 gap-y-10">
            <div class="flex relative gap-6">
                <img class="w-1/2 rounded-3xl h-64 object-cover" src="../assets/alex-azabache-5oqnTWcrWto-unsplash.jpg" alt="">
                <div class="w-1/2 flex flex-col gap-y-8">
                    <p class="text-white text-start font-base mr-5">
                        Beautiful hand-crafted leather bags, by the world class makers.
                        Enjoy our amazing very own longstanding, classic leather bag brand.
                    </p>
                    <p class="text-white hidden lg:block text-start font-base mr-5">
                        Beautiful hand-crafted leather bags, by the world class makers.
                        Enjoy our amazing very own longstanding.
                    </p>

                    <button class="bg-[#ffffff] absolute bottom-2 w-32 rounded-full font-base text-black py-1">
                        Read more
                    </button>
                </div>
            </div>
            <div class="flex relative gap-6">
                <img class="w-1/2 rounded-3xl h-64 object-cover" src="../assets/andrew-neel-HqtYwlY9dxs-unsplash.jpg" alt="">
                <div class="w-1/2 flex flex-col gap-y-8">
                    <p class="text-white text-start font-base mr-5">
                        Beautiful hand-crafted leather bags, by the world class makers.
                        Enjoy our amazing very own longstanding, classic leather bag brand.
                    </p>
                    <p class="text-white hidden lg:block text-start font-base mr-5">
                        Beautiful hand-crafted leather bags, by the world class makers.
                        Enjoy our amazing very own longstanding.
                    </p>

                    <button class="bg-[#ffffff] absolute bottom-2 w-32 rounded-full font-base text-black py-1">
                        Read more
                    </button>
                </div>
            </div>
            <div class="flex relative gap-6">
                <img class="w-1/2 rounded-3xl h-64 object-cover" src="../assets/karsten-winegeart-H8q1vyFq5F4-unsplash.jpg" alt="">
                <div class="w-1/2 flex flex-col gap-y-8">
                    <p class="text-white text-start font-base mr-5">
                        Beautiful hand-crafted leather bags, by the world class makers.
                        Enjoy our amazing very own longstanding, classic leather bag brand.
                    </p>
                    <p class="text-white hidden lg:block text-start font-base mr-5">
                        Beautiful hand-crafted leather bags, by the world class makers.
                        Enjoy our amazing very own longstanding.
                    </p>

                    <button class="bg-[#ffffff] absolute bottom-2 w-32 rounded-full font-base text-black py-1">
                        Read more
                    </button>
                </div>
            </div>
            <div class="flex relative gap-6">
                <img class="w-1/2 rounded-3xl h-64 object-cover" src="../assets/jonathan-borba-k3n8TN5WwJk-unsplash.jpg" alt="">
                <div class="w-1/2 flex flex-col gap-y-8">
                    <p class="text-white text-start font-base mr-5">
                        Beautiful hand-crafted leather bags, by the world class makers.
                        Enjoy our amazing very own longstanding, classic leather bag brand.
                    </p>
                    <p class="text-white hidden lg:block text-start font-base mr-5">
                        Beautiful hand-crafted leather bags, by the world class makers.
                        Enjoy our amazing very own longstanding.
                    </p>

                    <button class="bg-[#ffffff] absolute bottom-2 w-32 rounded-full font-base text-black py-1">
                        Read more
                    </button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';
import {
    mapActions
} from 'vuex';

export default {
    name: 'HomeView',
    components: {
        Navigation,
        Footer
    },
    data() {
        return {
            products: [{}],
            text: "",
            cartUpdated: false,
        }
    },
    computed: {
        filteredProducts() {
            return this.products.filter((product) => {
                return product.name.toLowerCase().includes(this.text.toLowerCase())
            })
        },
    },
    methods: {
        ...mapActions({
            getProducts: 'getProducts',
        }),
        fetchProducts() {
            this.getProducts({
                cb: (res => {
                    this.products = res.slice(-4)
                })
            })
        },
        goToProducts() {
            this.$router.push({
                "name": "products"
            })
        },
        addToCart(product) {
            this.emitter.emit("updateCart", product)
            this.showNotification()
        },
        showNotification() {
            this.cartUpdated = true
            setTimeout(() => this.cartUpdated = false, 2000)
        },
    },
    mounted() {
        this.emitter.on("updateSearch", value => {
            this.text = value
        })
        this.fetchProducts()
    }

}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    background-color: #212121;
}
</style>
