<template>
    <div class="my-3 px-10 md:px-0">
        <span class="underline">Home</span> /
        <span class="underline">Skincare</span> /
        <span class="underline">Cleanser</span>  / 
        <span> Soy Face Cleanser </span>
    </div>
  <div class="flex flex-col md:flex-row  gap-7 px-10 md:px-0">
    <div >
    <img :src="product.image" class=" w-full md:w-[57vw] object-cover"  >
    <div class="flex  gap-5">
      <div class="">
       <img v-if="product.pics" :src="product.pics" alt="" class="w-[400px]" />
      </div>
      <div >
          <img v-if="product.photo" :src="product.photo" alt="" class="w-[400px]" />
      </div>
    </div>
  </div>
   <div>
    <span>
        <h1 class="font-serif text-[2rem]">{{ product.oneHead }}</h1>
    </span>
   <div class="text-[#303E48] text-[10px] md:border-b-[0.5px] border-[#303E48]  my-2 py-3">
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
              <span class="text-sm">make 3 payment of $18.20/mo at 0% APR. <span class="text-blue-400">Learn More</span></span>
            </div>
                    <span class="text-[13px] flex mt-2">
          4 interest-free payments of $78.50 by
          <p class="font-serif text-[15px] ml-1">Klarna</p> or
          <p class="font-serif text-[15px] ml-1">afterpay</p>
        </span>
        <div class="flex">
     <div class="border-[1px] border-slate-400  px-2 my-2 rounded w-20">
  <div>
    <span>
      <button @click="decrementItem">-</button>
    </span>
    <span class="px-2">{{ cartItem.quantity }}</span>
    <span>
      <button @click="incrementItem">+</button>
    </span>
  </div>
  
</div>
<div class="ml-10" >  <button @click="cartStore.addToCart(card)" class="mt-2 bg-[#303E48] text-white px-7 py-2 rounded hover:bg-gray-800  w-[40vw] md:w-[20vw] ">
  {{ AddtoBag }}
</button>
</div>
</div>
<div>
  <div class="py-3">
    <span class="text-sm"><fa :icon="['fas', 'bolt']" />  FREE 2-Day Shipping & Free Returns <span class="underline"><router-link to="/register">Sign Up FREE </router-link>|</span> <span class="underline"><router-link to="/login">Sign In</router-link></span>
  </span>
  </div>
  <div class="py-3">
    <span><fa :icon="['fas', 'address-card']" /> $50.00 away from free shipping! Spend $50.00 or more to qualify</span>
  </div>
  <div class="py-3">
    <span><fa :icon="['fas', 'heart-circle-bolt']" />Refer a friend</span>
  </div>
  <div class="bg-[#F1F7FB] py-5 px-5 ">
   <span><h2>Fresh Rewards <fa :icon="['fas', 'asterisk']" /></h2></span>
   <div class="">
    <span class="underline">Join now</span> and earn 54 points on this product. <span class="text-blue-400">Learn More</span>
  </div>
  </div>
  <div class="border-t-[0.8px] border-black border-b-[0.8px] py-5 my-4 ">
    <div class="flex justify-between"><h1 class="text-[2rem] font-serif">What it is  </h1> <p @click="plusButton " class="text-[2rem] cursor-pointer">{{ plusShow ? '-' : '+' }} </p></div>
    <div v-if="plusShow" >
      <p class="w-[400px]">A hydrating gel cleanser that removes make up & SPF while soothing & balancing skin.</p>
    </div>
  </div>
</div>
<div>
  <div class="flex justify-between">
      <h1 class="text-[2rem] font-serif">Why you need it</h1>
      <button @click="btnNeed" class="text-[2rem] cursor-pointer">{{ openNeed ? '-' : '+'}}</button>
      </div>
      <div v-if="openNeed">
        <p class="w-[400px]">{{ why }}</p> 
        <ul v-for="(need, index) in needs " :key="need.id" :index="index">
          <li class="my-5">{{ need }}</li>
        </ul>
      </div>
    </div>
   </div>
  </div>
  <div class="px-10 md:px-0 border-t-[0.9px] border-black my-10 mx-10 md:mx-5 ">
     <h1 class="text-[3rem] font-serif">Proven Result</h1>
    </div>
    <div class="flex flex-col md:flex-row gap-5 px-10 md:px-0">
      <div>
        <h1 class="md:text-center text-[2.5rem] font-serif">+ 10% </h1>
        <span class="w-[60vw]">Hydration, even after you rinse*</span>
      </div>
      <div>
        <h1 class="md:text-center text-[2.5rem] font-serif">98%</h1>
        <span>agreed it deeply cleanses pores***</span>
      </div>
      <div>
        <h1 class="md:text-center text-[2.5rem] font-serif">-</h1>
        <span>Proven effective on all skin types & tones, as well as sensitive skin**</span>
      </div>
      <div class="mb-6" >
        <h1 class="md:text-center text-[2.5rem]">-</h1>
        <span>Scientifically proven to maintain skin's pH</span>
      </div>
    </div>
    <div class="border-t-[0.8px] border-black "></div>
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
    <input v-model="footerEmail" type="email" placeholder="Email Address*" class="text-black mb-2 w-full md:w-[70%] py-2 rounded">
    <input v-model="footerPassword" type="password" placeholder="Password*"  class="text-black mb-2 w-full md:w-[70%] py-2 rounded ">
    <button @click="sendFooterEmail" type="submit" class="bg-[#303E48] text-white py-2 px-4 rounded border-[0.5px] w-full md:w-[70%] my-5">Sign Up</button>
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
      <li v-for="help in footerHelpers" :key="help.id" class="text-[14px] py-2 text-white cursor-pointer">{{ help }}</li>
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
import detaPay from '@/assets/img/detaPay.jpg'
import { useRoute } from 'vue-router'
import {BestSellerr} from '@/data/Bestsellerr'
import { cardds } from '@/data/TopProduct'
import { subImage } from '@/data/subImage'





const route = useRoute()
const productId = Number(route.params.productId)
const product = BestSellerr.find(product => product.id === productId) || cardds.find(product => product.id === productId)



const cartItem = computed(() => cartStore.cart.find(i => i.id =6== product.id) || { quantity: 1 })

const incrementItem = () => {
  cartStore.addToCart(product)
}
const decrementItem = () => {
  cartStore.decreaseQuantity(product)
}
const AddtoBag = 'Add to BAG'
   
const plusShow = ref(false)
const plusButton = () => {
  plusShow.value = !plusShow.value
}

const why = ' Our bestselling face wash purifies without stripping, clearing skin of impurities & deeply cleansing pores with a gentle, conditioning lather. Amino acid-rich soy proteins help skin retain moisture & elasticity for a smooth, supple feel. Infused with succulent aloe vera & the scent of crisp cucumbers, it transforms the experience of cleansing into a refreshing ritual.'

const needs = [
     ' Maintains skin’s pH & moisture barrier',
     'Instantly calms visible redness',
     '1 sold every 60 seconds*'
]

const openNeed = ref(false)

const  btnNeed = () => {
    openNeed.value = !openNeed.value
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