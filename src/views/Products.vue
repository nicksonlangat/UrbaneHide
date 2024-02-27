<template>
<div class="container mx-auto pb-6">
    <Navigation />
    <div class="text-[#F5F5F5] w-full pb-12 mt-10 rounded-3xl">
        <div class="flex justify-between ml-8 mr-8">
            <h1 class="mt-10 font-head text-5xl uppercase text-start">latest arrivals</h1>
            <p v-if="show" class="font-base text-lg text-green-500 mt-12">Product added to cart.</p>
        </div>
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-x-5 gap-y-5 mt-8 ml-8 mr-8">
            <!-- <div v-for="product in filteredProducts">
                <div class="pb-8 bg-gray-50 rounded-2xl">
                    <span class="flex justify-end items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mr-2 
                    transition-colors duration-300 cursor-pointer hover:text-[#FFAB7D]
                    mt-2 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </span>
                    <div class="flex justify-center items-center">
                        <img class="lg:h-64 h-32 rounded-3xl w-48 object-cover" :src="product.image" alt="">
                    </div>
                </div>
                <div class="flex justify-between mt-3 font-base">
                    <div class="mt-2 flex flex-col text-start lg:flex-row lg:gap-4">
                        <h3>{{ product.name }}
                        </h3>
                        <h3> KES {{ product.price }}</h3>

                    </div>

                    <span @click="addToCart(product)" class="bg-[#FFAB7D] h-8 w-8 mt-4 lg:mt-0
                 transition-opacity duration-300 cursor-pointer hover:opacity-80
                 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </span>

                </div>
            </div> -->
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
                <div class="flex justify-between mt-3 font-base text-white">
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
                <div class="flex justify-between mt-3 font-base text-white">
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
                <div class="flex justify-between mt-3 font-base text-white">
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
                <div class="flex justify-between mt-3 font-base text-white">
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
    <Footer />
</div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue'
import {
    mapActions
} from 'vuex';

export default {
    name: 'Products',
    components: {
        Navigation,
        Footer
    },
    data: () => ({
        products: [],
        text: "",
        show: false,
    }),
    watch: {

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
                    this.products = res
                })
            })
        },
        addToCart(product) {
            this.emitter.emit("updateCart", product)
            this.showNotification()
        },
        showNotification() {
            this.show = true
            setTimeout(() => this.show = false, 2000)
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
html {
    background-color: #212121;
}
</style>
