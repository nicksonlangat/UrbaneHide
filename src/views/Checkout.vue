<template>
<div class="container mx-auto pb-6">
    <Navigation />
    <div v-if="isSuccess" class="flex mt-10 justify-center items-center">
        <div class="bg-[#3B3B3B] lg:w-1/2 w-11/12 rounded-xl pb-5">
            <h3 class="text-[#f5f5f5] text-2xl mt-4">Payment received!</h3>
            <p class="text-[#f5f5f5]/80 text-xl mt-2">Your order has been successfully placed.</p>
            <hr class="ml-5 mr-5 mt-2 border-gray-500">
            <h3 class="text-[#f5f5f5] text-xl mt-4">Total payment</h3>
            <h3 class="text-[#f5f5f5] text-2xl mt-4">KES {{ cartTotal }}</h3>

            <div class="grid grid-cols-2 gap-5 mt-5  ml-4 mr-4">
                <div class="border border-gray-500 pb-2 rounded-md">
                    <h3 class="text-[#f5f5f5] text-sm mt-2">Ref number</h3>
                    <h3 class="text-[#f5f5f5] text-xl mt-2">{{ transactionData?.order.order_number }}</h3>

                </div>
                <div class="border border-gray-500 pb-2 rounded-md">
                    <h3 class="text-[#f5f5f5] text-sm mt-2">Sender name</h3>
                    <h3 class="text-[#f5f5f5] text-xl mt-2">{{ transactionData?.customer_name }}</h3>
                </div>
                <div class="border border-gray-500 rounded-md">
                    <h3 class="text-[#f5f5f5] text-sm mt-2">Payment method</h3>
                    <h3 class="text-[#f5f5f5] text-xl mt-2">Card</h3>
                </div>
                <div class="border border-gray-500 pb-2 rounded-md">
                    <h3 class="text-[#f5f5f5] text-sm mt-2">Payment time</h3>
                    <h3 class="text-[#f5f5f5] text-sm lg:text-xl mt-2">{{ formatDate(transactionData?.order.created) }}</h3>
                </div>
                <div class="flex cursor-pointer col-span-2 items-center justify-center">
                    <div class="flex gap-5 text-[#f5f5f5]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>

                        <p>Download PDF receipt</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div v-else class="text-[#F5F5F5] flex flex-col lg:flex-row lg:gap-5 mt-10">
        <div class="w-2/3 flex flex-col gap-y-5">
            <div>
                <div class="flex gap-4 text-2xl mx-6">
                    <span class="ring rounded-full ring-[#f5f5f5] h-8 flex items-center justify-center w-8">
                        1
                    </span>
                    <h3>Shipping</h3>
                </div>
                <form class="mt-8 hidden lg:block accent-[#212121] mx-6">
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-y-5">
                        <div class="flex flex-col items-start gap-y-2">
                            <label for="full_name">Full name</label>
                            <input v-model="full_name" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>

                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Street Address</label>
                            <input v-model="address" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>
                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Town/City</label>
                            <input v-model="town" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>
                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Country</label>
                            <input v-model="country" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>

                        <div class="flex gap-4 col-span-2">
                            <input type="checkbox" class="w-4">
                            <p>My billing address is the same as my shipping address.</p>
                        </div>
                    </div>

                </form>
                <form class="mt-8 lg:hidden accent-[#212121] mx-6">

                    <div class="flex flex-col items-start gap-y-2">
                        <label for="full_name">Full name</label>
                        <input v-model="full_name" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">

                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Street Address</label>
                            <input v-model="address" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>
                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Town/City</label>
                            <input v-model="town" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>
                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Country</label>
                            <input v-model="country" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>

                        <div class="flex gap-4 mt-2 w-80">
                            <input type="checkbox" class="w-5">
                            <p class="text-xs">My billing address is same as my shipping address.</p>
                        </div>
                    </div>

                </form>
            </div>

            <div class="py-5">
                <div class="flex gap-4 text-2xl mx-6">
                    <span class="ring rounded-full ring-[#f5f5f5] h-8 flex items-center justify-center w-8">
                        2
                    </span>
                    <h3>Payment</h3>
                </div>
                <form class="mt-8 hidden lg:block mx-6 accent-[#212121]">
                    <div class="grid grid-cols-2 gap-y-5">
                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Name on card</label>
                            <input v-model="card_name" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>
                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Email address</label>
                            <input v-model="email" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>
                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Card number</label>
                            <input v-model="card_number" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="flex flex-col items-start gap-y-2">
                                <label for="first_name">Card expiry</label>
                                <input v-model="card_expiry" type="text" class="py-1.5 w-30 bg-[#3B3B3B] focus:outline-none pl-4">
                            </div>
                            <div class="flex flex-col items-start gap-y-2">
                                <label for="first_name">Card CVC</label>
                                <input v-model="card_cvc" type="text" class="py-1.5 w-32 bg-[#3B3B3B] focus:outline-none pl-4">
                            </div>
                        </div>

                        <div class="flex mt-5">
                            <button type="button" class="inline-flex font-base justify-center w-3/4 border border-transparent bg-[#FFAB7D] px-6 py-2 text-black
                       hover:opacity-80 focus:outline-none transition-opacity duration-300" @click="placeOrder">
                                Pay Now
                            </button>

                        </div>
                    </div>

                </form>
                <form class="mt-8 lg:hidden mx-6 accent-[#212121]">

                    <div class="flex flex-col items-start gap-y-2">
                        <label for="first_name">Name on card</label>
                        <input v-model="card_name" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">

                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Email address</label>
                            <input v-model="email" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>
                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Card number</label>
                            <input v-model="card_number" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                        </div>

                        <div class="flex flex-col items-start gap-y-2">
                            <label for="first_name">Card expiry</label>
                            <input v-model="card_expiry" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">

                            <div class="flex flex-col items-start gap-y-2">
                                <label for="first_name">Card CVC</label>
                                <input v-model="card_cvc" type="text" class="py-1.5 w-80 bg-[#3B3B3B] focus:outline-none pl-4">
                            </div>
                        </div>

                        <div class="flex mt-5">
                            <button type="button" class="inline-flex font-base justify-center w-80 border border-transparent bg-[#FFAB7D] px-6 py-2 text-black
                       hover:opacity-80 focus:outline-none transition-opacity duration-300" @click="placeOrder">
                                Pay Now
                            </button>

                        </div>
                    </div>

                </form>
            </div>

        </div>
        <div class="lg:w-1/3 mx-6 lg:mx-0">
            <div class="flex text-[#f5f5f5] text-2xl justify-between">
                <h3>Order summary</h3>

            </div>
            <div class="mt-8 flex flex-col gap-y-5 divide-y space-y-2 divide-gray-200">
                <div v-for="product in products" class="flex first:py-0 py-4 justify-between">
                    <div class="flex gap-4">
                        <img class="h-20" :src="product.image" alt="">
                        <div class="flex flex-col">
                            <h3>{{ product.name }}</h3>
                            <h3 class="mt-5 text-start">QTY {{ product.quantity }}</h3>
                        </div>
                    </div>
                    <h3>KES {{ product.price * product.quantity }}</h3>
                </div>
                <div class="flex py-5 gap-y-5 flex-col">
                    <div class="flex justify-between">
                        <h3>Shipping</h3>
                        <h3>KES 300</h3>
                    </div>
                    <div class="flex justify-between">
                        <h3>Sub total</h3>
                        <h3>KES {{  cartTotal }}</h3>
                    </div>
                    <div class="flex justify-between">
                        <h3>Total</h3>
                        <h3>KES {{  cartTotal + 300 }}</h3>
                    </div>
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
import { mapActions } from 'vuex';
import moment from "moment";
export default {
    name: 'Checkout',
    components: {
        Navigation,
        Footer
    },
    data() {
        return {
            isSuccess: false,
            products: [],
            cartTotal: 0,
            full_name: "",
            address: "",
            town: "",
            country: "",
            card_name: "",
            email: "",
            card_number: "",
            card_cvc: "",
            card_expiry: "",
            transactionData: null,

        }
    },
    methods: {
        ...mapActions({
            newOrder: 'newOrder',
            newTransaction: 'newTransaction'
        }),
        placeOrder() {
            this.newOrder({
                data: {
                    products: this.products.map((item) => item.id),
                    customer_name: this.full_name,
                    customer_email: this.email,
                    shipping_address: this.address
                },
                cb: (res=>{
                    console.log(res)
                    this.createTransaction(res.id)
                })
            })
        },
        createTransaction(orderID) {
            this.newTransaction({
                data: {
                    order: orderID,
                },
                cb: (res=>{
                    console.log(res)
                    this.transactionData = res
                    this.isSuccess = true
                })
            })
        },
        formatDate(date) {
            return moment(date).format("lll")
        },
    },
    mounted() {
        this.cartTotal = this.$store.getters.getCartTotal
        this.products = this.$store.getters.getCartItems
    }
}
</script>

<style>
html {
    background-color: #212121;
}
</style>
