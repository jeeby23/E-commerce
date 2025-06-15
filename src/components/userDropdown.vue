<template>
  <div class="relative inline-block mr-5"
       @mouseenter="showUserDropdown = true"
       @mouseleave="showUserDropdown = false">
    <span><fa :icon="['fas', 'user']" /></span>

    <transition name="fade">
      <div v-if="showUserDropdown"
           class="absolute top-full right-0 mt-2 bg-white shadow-lg p-4 z-50 w-[300px] text-black rounded-md py-10">
        <ul class="space-y-3 text-sm w-full">
          <template v-if="isLoggedIn && currentUser">
      <li class="text-center w-[20vw] pb-5">
        <span class="py-2 text-black block text-[1rem]">
          Welcome {{ currentUser.displayName || currentUser.email.split('@')[0] }}
        </span>
      </li>
      <li class="pl-4 hover:font-bold">
        <router-link to="registration">My Account</router-link>
      </li>
      <li class="pl-4 hover:font-bold">
        <a href="#" @click.prevent="userStore.logout()">Logout</a>
      </li>
    </template>

          <template v-else>
            <li class="text-center w-[20vw] pb-5">
              <router-link to="/login" class="px-5 bg-[#395060] py-2 text-white w-64 block">
                Sign In or Create an account
              </router-link>
            </li>
          <li><router-link>My Rewards</router-link></li>
          <li><router-link> Track Orders</router-link></li>
          <li><router-link> eGift Card Balance</router-link></li>
          </template>
        </ul>
      </div>
    </transition>
  </div>
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
    console.log('User store initialized', userStore.isLoggedIn, userStore.user) // Debug log
  })
})
</script>