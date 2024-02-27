<template>
<div>
    <svg @click="openModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:w-6 lg:mt-1 w-8 h-8 -mt-2
             transition-colors duration-300 cursor-pointer hover:text-white text-gray-400
            lg:h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
</div>
<TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
            <div class="flex font-base items-center justify-center p-4 text-center">
                <TransitionChild as="template" enter='transform transition ease-in-out duration-500 sm:duration-700' enterFrom='translate-x-full' enterTo='translate-x-0' leave='transform transition ease-in-out duration-500 sm:duration-700' leaveFrom='translate-x-0' leaveTo='translate-x-full'>
                    <DialogPanel class="fixed w-3/4 lg:w-1/3 top-0 right-0 z-40 h-full transform overflow-hidden bg-[#f5f5f5] p-6 text-left align-middle shadow-xl transition-all">
                        <div class="flex text-black text-2xl justify-between">
                            <h3>Cart</h3>
                            <h3 v-if="productRemoved" class="text-red-500 text-sm mt-2">Product removed from cart</h3>
                            <svg @click="closeModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 cursor-pointer h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div v-if="products.length" class="mt-8 flex flex-col gap-y-5 divide-y space-y-2 divide-gray-200">

                            <div v-for="product in products" class="flex justify-between first:py-0 py-5 last:pb-0">
                                <div class="flex gap-4">
                                    <img class="h-20" src="../assets/bag_1.png" alt="">
                                    <div class="flex flex-col">
                                        <h3>{{ product.name }}</h3>
                                        <h3 class="text-xs mt-2 lg:hidden">KES {{ product.price }}</h3>
                                        <div class="flex gap-3 mt-5">
                                            <svg @click="reduceQty(product)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 cursor-pointer h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                            </svg>
                                            <p>{{ product.quantity }}</p>
                                            <svg @click="addQty(product)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 cursor-pointer h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-5">
                                    <h3 class="hidden lg:block">KES {{ product.price * product.quantity }}</h3>
                                    <h3 @click="removeProduct(product.id)" class="hidden cursor-pointer lg:inline-flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>

                                        Remove</h3>
                                </div>
                            </div>

                            <div class="flex py-5 gap-y-5 flex-col">
                                <div class="flex justify-between">
                                    <h3>Shipping</h3>
                                    <h3>KES {{ shippingFee }}</h3>
                                </div>
                                <div class="flex justify-between">
                                    <h3>Total</h3>
                                    <h3>KES {{ computedTotal }}</h3>
                                </div>
                            </div>
                        </div>

                        <div v-if="products.length" class="mt-5 flex justify-center items-center">
                            <button type="button" class="inline-flex font-base justify-center w-full border border-transparent bg-[#FFAB7D] px-6 py-2 text-black
                       hover:opacity-80 focus:outline-none transition-opacity duration-300" @click="proceedToCheckout">
                                Check out
                            </button>

                        </div>
                        <div v-else class="mt-5">
                            <h3>Your cart is empty</h3>
                        </div>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </div>
    </Dialog>
</TransitionRoot>
</template>

<script>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
export default {
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
    },
    data() {
        return {
            isOpen: false,
            productRemoved: false,
            products: [
                {
                    "id": "1",
                    "name": "Bag",
                    "price": 2100,
                    "image": "../assets/bg_2.png",
                    "quantity": 1,
                },
                {
                    "id": "1",
                    "name": "Bag",
                    "price": 2100,
                    "image": "../assets/bg_2.png",
                    "quantity": 1,
                },
                {
                    "id": "1",
                    "name": "Bag",
                    "price": 2100,
                    "image": "../assets/bg_2.png",
                    "quantity": 1,
                },
               
            ],
            shippingFee: 300.00,
            quantity: 1,
            subTotalSum: 0,
            totalsum: 0
        }
    },
    computed: {
        subTotal() {
            if (this.products.length > 0) {
                this.products.map(item => this.subTotalSum += parseInt(item["price"]))
                return this.subTotalSum
            } else {
                return this.subTotalSum
            }
        },
        computedTotal() {
            this.totalsum
            if (this.products.length > 0) {
                return this.subTotal + parseFloat(this.shippingFee)
            } else {
                return this.totalsum
            }
        }
    },
    methods: {
        removeProduct(id) {
            this.products = this.products.filter(item => item.id !== id)
            localStorage.setItem('exery_cart', JSON.stringify(this.products))
            this.productRemoved = true
            setTimeout(() => this.productRemoved = false, 3000)
        },
        proceedToCheckout() {
            let sum = 0
            this.products.map(item => sum += parseInt(item["price"]) * item.quantity)
            this.$store.commit('updateCartTotal', {
                total: sum
            })
            this.$store.commit('updateCartItems', {
                products: this.products
            })
            this.$router.push({"name": "checkout"})
        },
        addQty(product) {
            product.quantity += 1
        },
        reduceQty(product) {
            product.quantity--
        },
        closeModal() {
            this.isOpen = false
        },
        openModal() {
            this.isOpen = true
        },
    },
    mounted() {
        // if (localStorage.hasOwnProperty('exery_cart')) {
        //     this.products = JSON.parse(localStorage.getItem("exery_cart"))
        // }
        this.emitter.on("updateCart", value => {
            value['quantity'] = 1
            this.products.push(value)
            localStorage.setItem("exery_cart", JSON.stringify(this.products))
        })
    }
}
</script>
