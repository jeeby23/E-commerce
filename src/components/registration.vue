<template>
  <div class="flex items-start justify-center gap-16 w-full min-h-screen bg-white py-10">
    <div>
      <ul class="text-sm">
        <li v-for="account in accounts" :key="account.name" class="py-3 hover:bg-gray-100">
          <router-link :to="account.link" class="text-black">
            {{ account.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div id="order" class="flex flex-col items-center w-full max-w-xl">
      <div class="w-full flex flex-col items-center">
        <template v-if="isLoggedIn && currentUser">
          <span class="py-2 text-black text-[2rem] mb-2">
            Hi {{ currentUser.displayName || currentUser.email.split('@')[0] }}
          </span>
        </template>
        <div class="grid grid-cols-2 gap-8 items-center border-b pb-4 w-full max-w-md">
          <span class="border-b border-blue-400 w-32 text-center">
            Your points <br>
            {{ currentUser.points || 0 }} <br>
            View Points
          </span>
          <span class="text-center">
            Your Orders <br>
            {{ currentUser.orders || 0 }} <br>
            <p class="border-b border-blue-400 w-32 mx-auto">Start Shopping</p>
          </span>
        </div>
      </div>
      <div class="text-center mt-4 border-b pb-4 w-full">
        <h2>Your Beauty Profile</h2>
        <p>{{ beauty }}</p>
        <p>{{ more }}</p>
        <p>{{ create }}</p>
      </div>
      <div v-if="details" class="bg-gray-100 p-6 rounded shadow mb-6 w-full mt-4">
        <h2 class="text-xl font-bold mb-2">Your Registration Details</h2>
        <p><strong>First Name:</strong> {{ details.Firstname }}</p>
        <p><strong>Last Name:</strong> {{ details.Lastname }}</p>
        <p><strong>Email:</strong> {{ details.email }}</p>
        <p><strong>Date of Birth:</strong> {{ details.dateof }}</p>
        <p><strong>Phone Number:</strong> {{ details.phoneNumber }}</p>
        <p><strong>Zip/Postal Code:</strong> {{ details.zipCode }}</p>
        <p><strong>Gender:</strong> {{ details.gender }}</p>
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
  <div class="flex flex-co l min-w-[150px]">
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

import { ref, onMounted, computed } from 'vue'
import { useUserStore } from '@/stores/user'

const showUserDropdown = ref(false)
const userStore = useUserStore()
const isLoggedIn = computed(() => userStore.isLoggedIn)
const currentUser = computed(() => userStore.user)
onMounted(() => {
  console.log('Initializing user store...') 
  userStore.init().then(() => {
    console.log('User store initialized', userStore.isLoggedIn, userStore.user) 
  })
})
const details = ref(null)

onMounted(() => {
  const data = localStorage.getItem('registrationDetails')
  if (data) {
    details.value = JSON.parse(data)
  }
})

const accounts = [
  {
    name: 'My Account',
    link: '/profile'
  },
  {
    name: 'Addresses',
    link: '/addresses'
  },
  {
    name: 'Wallet',
    link: '/wallet'
  },
  {
    name: 'Order History',
    link: '/orderHistory'
  },
  {
    name: 'Auto - Replenish',
    link: '/autoeplenish'
  },
  {
    name: 'Rewards',
    link: '/rewards'
  },
  {
    name: 'Notification Settings',
    link: '/notification-settings'
  },
  {
    name: 'eGift Card Balance',
    link: '/egift-card-balance'
  },
  {
    name: 'Logout',
    link: '/logout'
  }
]
const beauty = 'Share your beauty preferences for a more customized experience on with Fresh'
const more = 'Tell us a bit about yourself'
const create = 'Create Profile'
</script>

<style>

</style>