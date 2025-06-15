<template>
    <div class="my-3">
        <span class="underline">Home</span> /
        <span class="underline">Skincare</span> /
        <span class="underline">Cleanser</span>  / 
        <span> Soy Face Cleanser </span>
    </div>
  <div class="flex flex-col md:flex-row  gap-7">
    <div >
    <img :src="product.image" class=" w-full md:w-[50vw] object-cover"  >
  </div>
   <div>
    <span>
        <h1 class="font-serif text-[2rem]">{{ product.oneHead }}</h1>
    </span>
   <div class="text-[#303E48] text-[10px] md:border-b-[0.5px] border-[#303E48] my-2 py-3">
              <span><fa :icon="['fas', 'star']" /></span>
              <span><fa :icon="['fas', 'star']" /></span>
              <span><fa :icon="['fas', 'star']" /></span>
              <span><fa :icon="['fas', 'star']" /></span>
              <span>{{ product.number }}</span>
              <span class="underline text-[1rem]">Write a Review</span>
            </div> 
            <div class="flex py-5 ">
              <div class="border-[0.7px] border-[#303E43] px-2 mr-2 hover:bg-[#E2F0F8] cursor-pointer">  <span>Jumbo Size <br> <span>50 ml/ 1.6 fl oz</span></span></div>
                <div class="border-[0.7px] border-[#303E43] px-2 mr-2 hover:bg-[#E2F0F8] cursor-pointer"><span>Full Size <br> <span>150 ml / 5 fl oz</span></span></div>
               <div class="border-[0.7px] border-[#303E43] px-2 hover:bg-[#E2F0F8] cursor-pointer "> <span>Travel Size <br> <span>400 ml / 13.5fl oz</span></span></div>
            </div>    
            <div>
               <div class="py-3">
                <span class="line-through pr-3 text-[1.5rem] font-serif">{{ product.onePrev }}</span>
                <span class="text-[1.5rem] font-serif">{{ product.onePrice }}</span>
               </div>
            </div>   
            <div class="flex">
              <span class="w-20">  <img :src="detaPay" alt=""></span>
              <span>make 3 payment of $18.20/mo at 0% APR. <span class="text-blue-400">Learn More</span></span>
            </div>
                    <span class="text-[13px] flex mt-2">
          4 interest-free payments of $78.50 by
          <p class="font-serif text-[15px] ml-1">Klarna</p> or
          <p class="font-serif text-[15px] ml-1">afterpay</p>
        </span>
        <div class="border-[1px] border-slate-400  px-2 my-2 rounded w-20">
        <div>
             <span> <button @click="decrementItem(item.id)">-</button></span>
                <span class="px-2">{{ item.quantity || 1 }}</span>
             <span> <button @click="incrementItem(item.id)">+</button> </span>
            </div>
            </div>
   </div>
  </div>
  

</template>

<script setup>
import {  computed,ref } from 'vue'
import { useCartStore } from '@/stores/cart.js'
const cartStore = useCartStore()
import detaPay from '@/assets/img/detaPay.jpg'
import { useRoute } from 'vue-router'
import {BestSellerr} from '@/data/Bestsellerr'
import { cardds } from '@/data/TopProduct'


const route = useRoute()
const productId = Number(route.params.productId)
const product = BestSellerr.find(product => product.id === productId) || cardds.find(product => product.id === productId)



const incrementItem = (itemId) => {
      const item = cartItems.value.find((item) => item.id === itemId)
      cartStore.addItem(item)
   };
   const decrementItem = (itemId) => {
    cartStore.reduceItem(itemId)
   };

   
// const reduceCart = () => {
//     cartStore.cart = cartStrore
//     }

//     const increaseCart = (id) => {
//       cartStore.cart = cartStore.cart.map(item => {
//         if (item.id === id) {
//           return {
//             ...item,
//             quantity: item.quantity ? item.quantity + 1 : 2
//           }
//         }
//         return item
//       })
//     }

</script>

<style>

</style>