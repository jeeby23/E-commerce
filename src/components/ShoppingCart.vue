<template>
  <div class="px-[50px] md:px-[100px] mt-8 flex flex-col md:flex-row justify-between items-start min-h-[80vh]">
    <div class="flex-1 w-full md:w-2/3">
      <div v-if="cartStore.cart.length === 0">
       <span>
        <p class="font-serif text-[2rem] border-b-[1px] border-blacck">Your Bag</p>
       </span>
       <div class="flex justify-center items-center">
       <span class="">
      <span class="text-[100px]">  <fa :icon="['fas', 'cart-shopping']" /></span>
        <p class="text-[1.5rem] font-serif">Your cart is empty.</p>
        <p class="bg-[#303E43] text-white py-3 px-3 w-[200px] rounded"><router-link to="/shop">Start Shopping</router-link></p>
       </span>
       </div>
      </div>
      <div v-else>
        <div>
          <span class="flex">
            <fa :icon="['fas', 'star-of-life']" />
            <h3>
              Earn 297 points with your purchase today
              <router-link to="/login">Sign in</router-link>
              or
              <router-link to="/register">Join Fresh Rewards</router-link>.
            </h3>
          </span>
          <div class="border-b-[0.5px] border-slate-400 w-auto  pb-3">
            <span class="font-serif text-[2rem]">Your Bags</span>
            <span v-if="cartCount > 0" class="pl-[200px] md:pl-[330px]">
              {{ cartCount }} items
            </span>
          </div>
        </div>
        <div v-for="item in cartStore.cart" :key="item.id" class="flex items-center border-b py-4">
          <div class="flex flex-col items-center mr-4">
            <img :src="item.image" alt="Product image" class="w-24 h-24 object-contain rounded mb-2" />
            <span class="border-[1px] border-slate-400 px-2 rounded">
             <div>
             <span> <button @click="reduceCart(item.id)" >-</button></span>
                <span class="px-2">{{ item.quantity || 1 }}</span>
             <span> <button @click="increaseCart(item.id)">+</button></span>
            </div>
            </span>
            <span @click="cartStore.removeFromCart(item)" class="underline cursor-pointer text-xs">remove</span>
          </div>
          <div class="flex-1">
            <h2 class="font-semibold">{{ item.oneHead }}</h2>
            <div class="inline-block">
              <p class="text-gray-700">{{ item.onePrice }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="cartCount > 0"
      class="w-full md:w-[400px] mx-auto md:mx-0 md:ml-10 mt-10 md:mt-0 flex flex-col items-center md:border-[1px] border-slate-400 rounded-lg py-4 px-5"
    >
      <span class="bg-[#303E43] text-center text-white px-[100px] py-2.5 mb-4">
        <router-link to="/checkout">Checkout <fa :icon="['fas', 'lock']" /></router-link>
      </span>
      <div class="font-bold border-[1.5px] px-6 py-2 w-auto text-left">
        <span class="text-blue-700">Pay</span><span class="text-blue-400"> Pal</span>
      </div>
      <div class="w-full mt-6">
        <div class="flex justify-between mb-2 py-2">
          <span>Order summary</span>
          <span>{{ cartCount }} items</span>
        </div>
        <div class="flex justify-between mb-2 py-2">
          <span>Subtotal</span>
          <span>$ {{ cartSubtotal }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Estimated Sales Tax</span>
          <span>$0.00</span>
        </div>
        <p class="text-xs border-b-[0.5px] pb-2 w-auto mb-2">Tax will be calculated at checkout</p>
        <div class="flex justify-between mb-2">
          <span>Total</span>
          <span>${{ cartSubtotal }}</span>
        </div>
        <p class="text-xs">You will earn 314 points on your purchase today.</p>
        <p class="underline">Join Fresh Rewards</p>
        <span class="flex mt-2">
          <fa :icon="['fab', 'cc-paypal']"/>
          <p class="text-xs ml-2">
            As low as $30.00/mo or 0% APR for 3 months.
            <router-link class="text-blue-400">Learn more</router-link>
          </p>
        </span>
        <span class="text-[13px] flex mt-2">
          4 interest-free payments of $78.50 by
          <p class="font-serif text-[15px] ml-1">Klarna</p> or
          <p class="font-serif text-[15px] ml-1">afterpay</p>
        </span>
        <div class="flex w-[250px] mt-4">
          <span><img :src="visa" class="pr-3"></span>
          <span><img :src="amex" class="pr-3"></span>
          <span><img :src="paypal" class="pr-3"></span>
          <span><img :src="applepay" class="pr-3"></span>
          <span><img :src="mastercard" class="pr-3"></span>
          <span><img :src="klarna" class="pr-3"></span>
          <span><img :src="discover" class="pr-3"></span>
          <span><img :src="afterpay" class="w-32"></span>
        </div>
      </div>
    </div>
   
  </div>
   <footer>
    <div class="bg-[#303E48] h-auto w-full text-white py-4 mt-10">
          <div class="flex justify-center items-center w-full space-x-4">
            <div class="flex-grow border-t border-gray-300 max-w-[300px]"></div>
            <span class="text-white text-[1.5rem] font-serif">Exclusively on <span class="italic text-[2rem]">fresh</span></span>
            <div class="flex-grow border-t border-gray-300 max-w-[300px]"></div>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-5 px-5 py-5 mb-10">
  <div class="flex flex-col items-center">
    <fa :icon="['fas', 'truck'] " class="text-[2rem]"/>
    <h2>Complimentary shipping</h2>
    <p class="text-[16px]"> on all orders $50+</p> 
  </div>
  <div class="flex flex-col items-center">
    <fa :icon="['fas', 'child']" class="text-[2rem]"/>
    <h2>Refer-a-friend & save</h2>
    <p class="text-[16px]">20% off your order</p>
  </div>
  <div class="flex flex-col items-center">
    <fa :icon="['fas', 'asterisk']" class="text-[2rem]"/>
    <h2>Fresh Rewards</h2>
    <p class="text-[16px]">$$ off purchases & special offers</p>
  </div>
  <div class="flex flex-col items-center">
    <fa :icon="['fas', 'gift']" class="text-[2rem]"/>
    <h2>Complimentary gift wrap</h2>
    <p class="text-[16px]">with every order</p>
  </div>
  <div class="flex flex-col items-center">
    <fa  :icon="['fas', 'ice-cream']" class="text-[2rem]"/>
    <h2>Auto-Replenishment</h2>
    <p class="text-[16px]">10% off & free shipping</p>
  </div>
  <div class="flex flex-col items-center">
    <fa :icon="['fas', 'poo-storm']" class="text-[2rem]"/>
    <h2>Enjoy free 2-day shipping & returns</h2>
    <p class="text-[16px]">with SHOPRUNNER</p>
  </div>
</div>
<div class="px-10">
<hr>
<div class="flex flex-wrap justify-around items-center gap-5 px-5 py-5 border-b-[0.5px] border-white">
  <div class="text-[2rem]"> <fa :icon="['fab', 'cc-visa']" /> </div>
  <div class="text-[2rem]"><fa :icon="['fab', 'cc-amex']" /></div>
  <div class="text-[2rem]"><fa :icon="['fab', 'cc-mastercard']" /></div>
  <div class="text-[2rem]"><fa :icon="['fab', 'cc-discover']" /></div>
  <div class="text-[2rem]"><fa :icon="['fab', 'cc-paypal']" /></div>
  <div class="text-[2rem]"><fa :icon="['fab', 'apple-pay']" /></div>
  <div class="text-[2rem]">KALMA</div>
  <div class="text-[2rem]"><fa :icon="['fab', 'google-pay']" /></div>
</div>
    </div>
   <div class="flex flex-col md:flex-row justify-around items-start gap-5 px-5 py-5">
  <div class="flex flex-col items-start min-w-[220px]">
    <span class="inline-block mb-2">
      <span><fa :icon="['fas', 'paper-plane']" /></span> 
      <h2 class="inline-block"> Keep in touch</h2> 
      <p class="py-3">Receive 15% OFF your first order when you sign-up for our emails.</p>
    </span>
    <input v-model="footerEmail" type="email" placeholder="Email Address*" class="text-black mb-2 w-[70%] py-2 rounded">
    <input v-model="footerPassword" type="password" placeholder="Password*"  class="text-black mb-2 w-[70%] py-2 rounded ">
    <button @click="sendFooterEmail" type="submit" class="bg-[#303E48] text-white py-2 px-4 rounded border-[0.5px] w-[70%] my-5">Sign Up</button>
    <div>
      <span class="px-2 text-[2rem]"><fa :icon="['fab', 'facebook-f']" /></span>
      <span class="px-2 text-[2rem]"><fa :icon="['fab', 'twitter']" /></span>
      <span class="px-2 text-[2rem]"><fa :icon="['fab', 'instagram']" /></span>
      <span class="px-2 text-[2rem]"><fa :icon="['fab', 'pinterest']" /></span>
      <span class="px-2 text-[2rem]"><fa :icon="['fab', 'tiktok']" /></span>
      <span class="px-2 text-[2rem]"><fa :icon="['fab', 'youtube']" /></span>
      <span class="px-2 text-[2rem]"><fa :icon="['fab', 'spotify']" /></span>
    </div>
  </div>
  <div class="flex flex-col min-w-[150px]">
    <h2 class="text-[20px]">ABOUT FRESH</h2>
    <ul class="list-none">
      <li v-for="item in Aboutfreshs" :key="item" class="text-[14px] py-2 text-white cursor-pointer">{{ item }}</li>
    </ul>
  </div>
  <div class="flex flex-col min-w-[150px]">
    <h2 class="text-[20px]">Contact Us</h2>
    <ul class="list-none">
      <li v-for="item in footerContacts" :key="item" class="text-[14px] py-2 text-white cursor-pointer">{{ item }}</li>
    </ul>
  </div>
  <div class="flex flex-col min-w-[150px]">
    <h2 class="text-[20px]">Help Center</h2>
    <ul class="list-none">
      <li v-for="help in footerHelpers" :key="help" class="text-[14px] py-2 text-white cursor-pointer">{{ help }}</li>
    </ul>
  </div>
  <div class="flex flex-col min-w-[150px]">
    <h2 class="text-[20px]">My Fresh</h2>
    <ul class="list-none " >
      <li v-for="fresh in footerFreshs" :key="fresh" class="text-[14px] text-white cursor-pointer py-2 ">{{ fresh }}</li>
    </ul>
  </div>
</div>
    </div>
  </footer>
</template>

<script setup>
import {  computed,ref } from 'vue'
import { useCartStore } from '@/stores/cart.js'
const cartStore = useCartStore()


import visa from '@/assets/img/visa.jpg'
import amex from '@/assets/img/amex.jpg'
import paypal from '@/assets/img/paypal.jpg'
import applepay from '@/assets/img/applepay.jpg'
import mastercard from '@/assets/img/mastercard.jpg'
import klarna from '@/assets/img/klarna.jpg'
import discover from '@/assets/img/discover.jpg'
import afterpay from '@/assets/img/afterpay.jpg'

const cartCount = computed(() =>
  cartStore.cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
)

const cartSubtotal = computed(() =>
  cartStore.cart.reduce(
    (sum, item) => sum + (Number(String(item.onePrice).replace(/[^0-9.]/g, '')) * (item.quantity || 1)), 0 ).toFixed(2))


const reduceCart = () => {
    cartStore.cart = cartStore.cart.map(item => {
        return {
        ...item,
        quantity: item.quantity > 1 ? item.quantity - 1 : 0
        }
    })
    }

    const increaseCart = (id) => {
      cartStore.cart = cartStore.cart.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity ? item.quantity + 1 : 2
          }
        }
        return item
      })
    }
    const footerEmail = ref('')
const footerPassword = ref('')

const sendFooterEmail =  async () => {
  if (!footerEmail.value || !footerPassword.value) {
    alert('Please enter both email and mobile phone')

    return
  }
  try{
    await createUserWithEmailAndPassword(auth, footerEmail.value, footerPassword.value)

    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/registration')
      }
    })

  } catch (err) {
    error.value = err.message
  }
  
}
const Aboutfreshs = [
  'About Us',
  'Contact Us',
  'Careers',
  'Press',
  'Privacy Policy',
  'Terms of Service',
  'Accessibility',
  'Sitemap'
]
const footerContacts = [
  'Contact Fresh',
  '1 (833) 858-1115'
]
const footerHelpers = [
  'F.A.Q.s',
  'Shipping & Returns',
  'Klarna',
  'Afterpay',
  'Privacy Policy',
  'Notice at Collection',
  'Terms of Use',
  'Accessibility Statement',
  'Sitemap',
  'Do Not Sell or Share My Personal Information',
  'Cookies Settings'
]
const footerFreshs = [
  'My Account',
  'Order Status',
  'Rewards',
  'Student, Graduate, & Teacher Discount',
  'eGift Card',
  'eGift Card Balance'
]

</script>
<style>

</style>