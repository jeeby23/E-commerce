<template>
    <div>
       <div>
    <nav ref="navbarRef" class="navbar">
       
    </nav>
  <transition name="fade">
  <div
    v-if="showStickyBar"
    class="fixed top-0 left-0 w-full bg-[#303E48] text-white shadow-lg z-50 flex items-center justify-between px-6 py-3"
  >
    <div class="flex items-center gap-4">
      <button @click="isHamburgerOpen = true" class="flex flex-col gap-[4px]">
        <span class="w-6 h-[2px] bg-white block"></span>
        <span class="w-4 h-[2px] bg-white block"></span>
      </button>
      <router-link to="/" class="italic text-xl font-serif">Fresh</router-link>
    </div>
    <div class=" hidden md:block">
    <div class="flex items-center ">
       <ul v-for="(item, index) in subheader" :key="index" class="flex gap-6 text-[9px] md:text-sm ">
         <li v-if="item === 'New'" class="font-bold"><router-link to="/shop">{{ item }}</router-link></li>
         <li v-else-if="item === 'Best Sellers'" class="font-bold"><router-link to="/shop">{{ item }}</router-link></li>
         <li v-else><router-link to="/shop">{{ item }}</router-link></li>
        <li></li>
       </ul>
    </div> 
    </div>
    <div class="flex items-center gap-6">
      <fa :icon="['fas', 'magnifying-glass']" />
      <router-link to="/cart" class="relative">
        <fa :icon="['fas', 'shopping-cart']"/>
        <span
          v-if="cartCount > 0"
          class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5"
        >{{ cartCount }}</span>
      </router-link>
      <fa icon="heart" />
      <userDropdown />
    </div>
  </div>
</transition>
        <header>
      <nav class="bg-[#303E48] text-white py-3 px-4 relative">
        <div class="flex items-center justify-between">
  
          
          <div @click="toggleMenu" class="flex items-center gap-2 cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="USA Flag"
              class="w-6 h-4 hidden md:block"
            />
            <span class="underline hidden md:block">United States</span>
            <span class="underline hidden md:block">English</span>
          </div>
          <router-link
            to="/promo"
            class="absolute left-1/2 transform -translate-x-1/2 text-sm underline"  >
            Get 30% off with $200+ order
          </router-link>
           <div class=" hidden md:block">
          <router-link
            to="/find-store"
            class="flex items-center gap-1 text-sm " >
            <fa :icon="['fas', 'location-dot']" />
            Find a store
          </router-link>
        </div>
        </div>
        <transition name="slide">
          <div
            v-if="showMenu"
            class="fixed top-0 left-0 h-screen w-[300px] md:w-[500px] bg-white text-black shadow-xl z-50 p-4 overflow-y-auto" >
            <button @click="toggleMenu" class="text-2xl font-bold absolute top-4 right-4">
              &times;
            </button>
  
            <h2 class="text-3xl font-light mt-10 mb-6 border-b-[0.5px] border-black text-center pb-3">Select your Country/region</h2>
            <ul>
              <li v-for="(country, index) in countries" :key="index">
                <div
                  class="flex justify-between items-center cursor-pointer py-2 text-xl border-b-[0.5px] border-black"
                  @click="toggleSubmenu(index)" >
                  <span class="font-semibold pb-4 leading-loose ">{{ country.name }}</span>
                  <span class="text-xl leading-loose ">
                     {{ country.open ? '−' : '+' }}
                  </span>
                </div> 
                <transition name="fade">
                  <ul v-if="country.open" class="ml-4 space-y-6 text-sm ">
                    <li v-for="(option, i) in country.submenu" :key="i">
                        <router-link :to="option.link" @click="toggleMenu" class="flex items-center gap-2">
                            <img  v-if="option.flag"  :src="option.flag" alt="flag" class="w-5 h-3"/>
                   <span>{{ option.name }}</span>
           </router-link>
                    </li>
                  </ul>
                </transition>
              </li>
            </ul>
          </div>
        </transition>
      </nav>
      <nav>
  <div>
    <div class="relative px-[50px] py-4 bg-[#E3f0f8] h-20 flex items-center justify-between">
      <div class="md:hidden flex items-center">
  <button  @click="isHamburgerOpen = true" class="flex flex-col gap-[4px] ml-2">
    <span class="w-6 h-[2px] bg-black block"></span>
    <span class="w-4 h-[2px] bg-black block"></span>
  </button>
</div>
      <div class="relative flex gap-8 text-xl z-10">

  <div class="relative"
       @mouseenter="showAboutSubmenu = true"
       @mouseleave="showAboutSubmenu = false">
    <router-link to="/about" class=" hidden md:block">About Us</router-link>
    <transition name="slide-fade">
      <ul v-if="showAboutSubmenu"
          class="absolute top-full left-0 mt-2 bg-white text-black shadow-lg w-64 h-64 p-2 space-y-2 z-10  px-7 ">
        <li class="py-2"><router-link to="/about/story">Our Story</router-link></li>
        <li class="py-2"><router-link to="/about/sustainability">Our Sustainability</router-link></li>
        <li class="py-2"><router-link to="/about/promise">Our Promise</router-link></li>
        <li class="py-2"><router-link to="/about/rewards">Fresh Rewards</router-link></li>

      </ul>
    </transition>
  </div>
  <div class="relative"
       @mouseenter="showStoriesSubmenu = true"
       @mouseleave="showStoriesSubmenu = false">
    <router-link class="hidden md:block">Stories</router-link>
    <transition name="slide-fade">
      <ul v-if="showStoriesSubmenu"
          class="absolute top-full left-0 mt-2 bg-white text-black shadow-lg w-[28vw] h-auto  space-y- z-10 py-10 px-10">
        <li class="mb-5 text-slate-500"><router-link to="/viewall">View All</router-link></li>
        <li class="text-slate-500"><router-link to="/skincare-education">Skincare Education</router-link><p class="text-[15px] text-slate-400">Discover ingredients, deepen skincare knowledge and more from Fresh experts.</p></li>
        <li class="text-slate-500"><router-link to="/expert-advice">Expert Advice</router-link><p class="text-[15px] text-slate-400">Discover ingredients, deepen skincare knowledge and more from Fresh experts.</p></li>
        <li class="text-slate-500"><router-link to="/gift-guides"> Gift Guides</router-link><p class="text-[15px] "> Discover our gift guides for every occasion.</p></li>
        <li class="text-slate-500"><router-link to="/our-impact">Our Impact</router-link><p class="text-[15px] ">Discover stories about our brand values, missions and learn more about Fresh..</p></li>
      </ul>
    </transition>
  </div>
</div>
<div class="absolute left-1/2 transform -translate-x-1/2">
    <span class="italic text-[2rem] font-serif"><router-link to="/">Fresh</router-link></span>
  </div>
  <div class=" block md:hidden">
   <span><fa :icon="['fas', 'magnifying-glass']" class="translate-x-[-20px]" /></span>
  <router-link to="/cart" class="relative mr-5">
  <fa :icon="['fas', 'shopping-cart']"/>
  <span
    v-if="cartCount > 0"
    class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5" >
    {{ cartCount }}
  </span>
</router-link>
  </div>
      <div class=" hidden md:block">
        <span >
          <input
            type="text"
            placeholder="search"
            class="bg-white rounded-none py-2 px-5 w-40 placeholder-text-xl "
          />
          <fa :icon="['fas', 'magnifying-glass']" class="translate-x-[-20px]" />
        </span>
<div class="relative inline-block"
     @mouseenter="showHeartDropdown = true"
     @mouseleave="showHeartDropdown = false">
  <span class="mr-5"><fa icon="heart" /></span>
  <transition name="fade">
    <div v-if="showHeartDropdown"
         class="absolute top-full right-0 mt-2 bg-white shadow-lg p-4 z-50 w-[250px] text-black rounded-md">
      <ul class="space-y-4">
        <li class="flex items-center gap-3 border-b-[0.5px] border-black  pb-4">
          <img :src="mem" alt="missionary" class="w-10 h-10 object-cover rounded" />
         <router-link to="/memorial-day-sales"> <span>Memeorial Day sales <p class="text-[10px]">up to 30% off</p></span></router-link>
        </li>
        <li class="flex items-center gap-3">
          <img :src="noti" alt="doggy" class="w-10 h-10 object-cover rounded" />
         <router-link to="/notification">
            <span>5- piece gift 
            <p class="text-[10px]">with 150$ purchase</p>
          </span> </router-link>
        </li>
        <li class="flex items-center gap-3">
          <span class="text-center ">
            <button class=" text-center "> <router-link to="/memorial-day-sales" class="border-[0.5px] border-slate-400 text-center px-10 w-full">View All</router-link></button>
          </span>
        </li>
      </ul>
    </div>
  </transition>
  
</div>
<userDropdown />
<router-link to="/cart" class="relative mr-5">
  <fa :icon="['fas', 'shopping-cart']"/>
  <span
    v-if="cartCount > 0"
    class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5" >
    {{ cartCount }}
  </span>
</router-link>
      </div>
    </div>

   <div class=" hidden md:block">
    <div  class="bg-[#E3f0f8] text-center py-2 inline-block w-full ">
     <span class="mr-6 hover:font-bold"> <router-link to="/shop">NEW</router-link> </span>
     <span class="mr-6 hover:font-bold"> <router-link to="/shop">BEST SELLERS</router-link> </span>
     <span 
    class="mr-6 hover:font-bold relative"
    @mouseenter="isSkinHovered = true"
    @mouseleave="isSkinHovered = false"
  >
    <router-link to="/shop">SKINCARE</router-link>
  </span>
     <span class="mr-6 hover:font-bold relative"  @mouseenter="isLipHovered = true"
     @mouseleave="isLipHovered = false"> <router-link to="/shop">LIP CARE</router-link>  </span>
     <span class="mr-6 hover:font-bold relative"  @mouseenter="isBodyHovered = true"
     @mouseleave="isBodyHovered = false"> <router-link to="/shop">BODY</router-link> </span>
     <span class="mr-6 hover:font-bold"> <router-link to="/shop">FRAGRANCE</router-link> </span>
     <span class="mr-6 hover:font-bold relative"  @mouseenter="isGiftHovered = true"
     @mouseleave="isGiftHovered = false"> <router-link to="/shop">GIFTING</router-link> </span>
     <span class="mr-6 hover:font-bold"> <router-link to="/shop">OFFERS</router-link> </span>
    </div>
  </div>
</div>
</nav>
<transition name="slide-fade" class="block md:hidden">
  <div
    v-if="isHamburgerOpen"
    class="fixed top-0 left-0 w-[400px] h-full bg-white z-30 shadow-lg px-6 py-10 overflow-y-auto"
  >
    <button    @click="isHamburgerOpen = false" class="absolute top-4 right-4 text-2xl">&times;</button>
    <div class="space-y-6 mt-12 text-lg">
      <ul class="flex gap-8">
        <li class="inline-block">
          <div @click="toggleShop" class="cursor-pointer hover:underline">
            Shop
          </div>
        </li>
        <li class="inline-block">
          <div @click="toggleDiscover" class="cursor-pointer hover:underline">
            Discover
          </div>
        </li>
      </ul>
      <transition name="slide-fade">
        <ul v-if="showShop" class="mt-2 pl-2 text-base space-y-1 text-left">
         <ul v-for="(subheade, index) in subheader" :key="index" class="">
          <li class="border-b-[1px] border-black py-2">
          <span class="">  <router-link to="/shop ">{{ subheade }}</router-link></span>
          </li>
         </ul>
         <div class="mt-7">
          <span class="px-7 py-3 text-white rounded bg-[#303E43] "><router-link to="/discover">Sign in or create an Account</router-link></span>
         </div>
         <div>
          <ul v-for="(mobDiscover, index) in mobDiscovers" :key="index" class="pl-7 my-5">
            <li>   <router-link to="mobDiscover.link"> <fa :icon="mobDiscover.icon" class="text-xs" /> {{ mobDiscover.list }}</router-link></li>
          </ul>
         </div>
        <div @click="toggleMenu"  class="flex items-center gap-2 mt-4 cursor-pointer z-50 ">
         <img :src="united" alt="United States Flag" class="w-5 h-3"/>
         <span class="underline ">United States</span>
            <span class="underline ">English</span>
        </div>
        </ul>
      </transition>
      <transition name="slide-fade">
        <div class="">
        <ul v-if="showDiscover" class="mt-2 pl-2 text-base space-y-1 text-left">
          <h2>{{ disAbout }}</h2>
          <li v-for="(disocover, index) in disocovers" :key="index" class="hover:underline cursor-pointer py-2">
            <span class="pl-7 py-5"> <router-link to="/discover">{{ disocover.list }}</router-link></span>
          </li>
        </ul>
        <div v-if="showDiscover" class="border-b-[1px]"></div>
       <div v-if="showDiscover">
        <span class="mb-8">
         <h2>Stories</h2>
         <ul v-for="(view, index) in views" :key="index" class="pl-7 ">
          <li class="py-2">{{ view.list }}</li>
         </ul>
         </span>
         <div class="my-7">
          <span class="px-7 py-3 text-white rounded bg-[#303E43]"><router-link to="/discover">Sign in or create an Account</router-link></span>
         </div>
         <div>
          <ul v-for="(mobDiscover, index) in mobDiscovers" :key="index" class="pl-7">
            <li>   <router-link to="mobDiscover.link"> <fa :icon="mobDiscover.icon" class="text-xs" /> {{ mobDiscover.list }}</router-link></li>
          </ul>
         </div>
        <div @click="toggleMenu"  class="flex items-center gap-2 mt-4 cursor-pointer z-50 ">
         <img :src="united" alt="United States Flag" class="w-5 h-3"/>
         <span class="underline ">United States</span>
            <span class="underline ">English</span>
        </div>
       </div>
        </div> 
      </transition>
    </div>
  </div>
</transition>
    </header>
    <div  class="relative" :class="{
      'hidden': !isSkinHovered,
    }"
    @mouseenter="isSkinHovered = true"
    @mouseleave="isSkinHovered = false">
    <div 
    id="skin"
    class="flex justify-center gap-10 bg-white w-full py-7 absolute left-0 z-50"
   
  >
    <div class="px-10" >
      <h2 class="font-bold text-[1rem] mb-2">{{ cat }}</h2>
      <div v-for="(catergory,index) in catergorys" :key="index">
     <ul class="py-[7px] text-[#395060]">
      <li class="hover:font-bold font-light"><router-link to="/shop">{{ catergory.list }}</router-link></li>
     </ul>
     </div>
    </div>
    <div class="px-10" >
    <h2 class="font-bold text-[1rem] mb-2">{{ coll }}</h2>
    <div v-for="(collect,index) in collects" :key="index">
      <h3 class="py-[7px] hover:font-bold text-[#395060] font-light"><router-link to="/shop">{{ collect.list }}</router-link></h3>
    </div>
    </div>
    <div class="px-10" >
      <h2 class="font-bold text-[1rem] mb-2">{{ conc }}</h2>
      <div v-for="(concern,index) in concerns" :key="index">
        <ul class="py-[7px]">
          <li class="hover:font-bold text-[#395060] font-light"><router-link to="/shop">{{ concern.list }}</router-link></li>
        </ul>
      </div>
    </div>
    <div class="text-center">
      <img :src=" skinover" alt="">
      <h2 class="text-[1.5rem] font-serif">{{ go }}</h2>
      <p class="underline"><router-link to="/shop">{{ soya }}</router-link></p>
    </div><br>
     <div class="px-10 absolute top-[100%] left-[12%] bg-[#F7F7F7] py-4 w-full">
<span class=""> <span class="text-[1.2rem]" > Shop all Skincare </span><fa :icon="['fas', 'greater-than']" class="font-light" /></span>
    </div>
 
  </div>
  
  </div>
  <div class="relative" :class="{
      'hidden': !isLipHovered,
    }"> 
  <div class=" flex justify-around bg-white w-full py-7  absolute left-0 z-50"  
    @mouseenter="isLipHovered = true"
    @mouseleave="isLipHovered = false">
    <div>
      <h2 class="font-bold mb-4">{{ gories }}</h2>
      <ul v-for="(advance,index) in advances" :key="index">
        <li class="py-1 font-light"><router-link to="/shop">{{ advance.list }}</router-link></li>
      </ul>
    </div>
    <div class="text-center">
      <img :src="lipover" alt="">
      <h2 class="text-[1.5rem] font-serif">{{ lipHead }}</h2>
      <p class="underline">{{ lipShow }}</p>
    </div>
    <div class="absolute top-[100%] left-[17%] bg-[#f7f7f7] w-full py-3">
      <span class=""> <span class="text-[1.2rem]" > Shop All Lip Care </span><fa :icon="['fas', 'greater-than']" class="font-light" /></span>
    </div>
  </div>
  </div>
  <div class="relative">
  <div class="flex justify-center bg-white w-full py-7 gap-10 absolute left-0 z-50 " :class="{
      'hidden': !isBodyHovered,
    }"
    @mouseenter="isBodyHovered = true"
    @mouseleave="isBodyHovered = false">
    <div class="px-[70px]">
      <h2 class="font-bold mb-5">{{ cat }}</h2>
      <ul v-for="(body,index) in bodys" :key="index">
        <li class="font-light hover:font-semibold"><router-link to="/body">{{ body.list }}</router-link></li>
      </ul>
    </div>
    <div class="px-[70px]">
      <h2 class="font-bold mb-5">{{ coll }}</h2>
      <ul v-for="(space,index) in spaces" :key="index">
        <li class="font-light hover:font-semibold"><router-link to="/body">{{ space.list }}</router-link></li>
      </ul>
    </div>
    <div class="px-[70px] text-center">
      <img :src="Bodyover" alt="">
      <h2 class="text-[1.5rem] font-serif w-64">{{ share }}</h2>
      <p class="underline"><router-link to="/body">{{ lipShow }}</router-link></p>
    </div>
    <div class="absolute top-[100%] left-[17%] bg-[#f7f7f7] w-full py-3">
      <span class=""> <span class="text-[1.2rem]" > Shop All Body </span><fa :icon="['fas', 'greater-than']" class="font-light" /></span>
    </div>
  </div>
  </div>
  <div class="relative">
  <div class=" flex justify-center bg-white w-full py-7 gap-10 absolute left-0 z-50 "  :class="{
      'hidden': !isGiftHovered,
    }"
    @mouseenter="isGiftHovered = true"
    @mouseleave="isGiftHovered = false">
    <div class="px-[70px]">
   <h2 class="font-bold mb-5">{{ late }}</h2>
   <ul v-for="(gift,index) in gifts" :key="index">
    <li class="font-light">{{ gift.list }}</li>
   </ul>
    </div>
    <div class="px-[70px]">
      <h2 class="font-bold mb-5">{{ idea }}</h2>
      <ul v-for="(travel,index) in travels" :key="index">
        <li class="font-light">{{ travel.list }}</li>
      </ul>
    </div>
    <div>
      <h2 class="font-bold mb-5">{{ Gprice }}</h2>
      <ul v-for="(price,index) in prices" :key="index">
        <li class="font-light">{{ price.list }}</li>
      </ul>
    </div>
    <div class="px-[70px] text-center">
      <img :src="giftover" alt="">
      <h2 class="text-[1rem] font-bold font-serif">{{ gifthead  }}</h2>
      <p class="underline">{{ lipShow }}</p>
    </div>
    <div class="absolute top-[100%] left-[15%] bg-[#f7f7f7] w-full py-3">
      <span class=""> <span class="text-[1.2rem]" > Shop All Gift </span><fa :icon="['fas', 'greater-than']" class="font-light" /></span>
    </div>
  </div>
    </div>
    </div>
    </div>
  </template>
  
  
  

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

   import { ref,onMounted, onBeforeUnmount,computed, onUnmounted, watch } from 'vue'
   const showHeartDropdown = ref(false);
   const showAboutSubmenu = ref(false);
   const showStoriesSubmenu = ref(false);
   const   showUserDropdown = ref(false);
   
const activeMenu = ref('main')
   import mem from '@/assets/img/Mem.jpg'
   import noti from '@/assets/img/Noti.jpg'
   import userDropdown from '@/components/userDropdown.vue'
   import skinover from '@/assets/img/skinover.jpg'
   import lipover from '@/assets/img/lipover.jpg'
   import united from '@/assets/img/united.png'
   import Bodyover from '@/assets/img/Bodyover.jpg'
   import giftover from '@/assets/img/giftover.jpg'
   import { useCartStore } from '@/stores/cart.js'
const cartStore = useCartStore()

const cartCount = computed(() =>
  cartStore.cart.reduce((sum, item) => sum + (item.quantity || 1), 0))

const showMenu = ref(false)
const isHamburgerOpen = ref('')
const showShop = ref(false)
const showDiscover = ref(false)

watch(isHamburgerOpen, (val) => {
  if (val) {
    showShop.value = true
    showDiscover.value = false
  }
})

function toggleShop() {
  showShop.value = !showShop.value
  showDiscover.value = false
}

function toggleDiscover() {
  showDiscover.value = !showDiscover.value
  showShop.value = false
}

const disAbout = 'About Us'
const disocovers = [
  {
    list: 'Our Story'
  },
  {
   list: 'Our Sustainability'
  },
  {
    list: 'Our Promise'
  },
  {
    list: 'Fresh Rewards'
  }];
const showStickyBar = ref(false)
const navbarRef = ref(null)

function handleScroll() {
  if (!navbarRef.value) return
  const navbarBottom = navbarRef.value.offsetTop + navbarRef.value.offsetHeight
  showStickyBar.value = window.scrollY > navbarBottom
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
  
const canadaFlag = "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg";
const usFlag = "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
const flags = {
  china: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png",
  hongKong: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg",
  indonesia: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1200px-Flag_of_Indonesia.svg.png",
  korea: "https://images-eu.ssl-images-amazon.com/images/I/41NKE-L0IpL.jpg",
  malaysia: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Nj1bg0sLBK_qJ6f5FF3Q55nxuPEtQXJirQ&s",
  singapore: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/800px-Flag_of_Singapore.svg.png",
  thailand: "https://cdn.britannica.com/38/4038-050-BDDBA6AB/Flag-Thailand.jpg",
};

const countries = ref([
  {
    name: 'America',
    open: false,
    submenu: [
      { flag: canadaFlag,  name: 'Canada | English', link: '/america/canada' },
      { flag: canadaFlag, name: 'Canada | Francais', link: '/america/Francais' },
      { name: 'United States | English', link: '/america/texas', flag: usFlag },
    ],
  },
  {
    name: 'Asia',
    open: false,
    submenu: [
      { name: 'china', link: '/Asia/china', flag: flags.china  },
      { name: 'Hong Kong SAR | English', link: '/Asia/china',flag: flags.hongKong },    
      { name: 'Indonesia | English', link: '/Asia/china',flag: flags.hongKong  },    
      { name: 'Indonesia | Bahasa indonesia', link: '/Asia/china' ,flag: flags. indonesia },   
      { name: 'Korea', link: '/Asia/KOREA' ,flag: flags.korea   },   
      { name: 'Malaysia | English', link: '/Asia/malaysia',flag: flags.malaysia},   
      { name: 'Malaysia | Bahasa Melayu', link: '/Asia/malaysia',flag: flags.malaysia },   
      { name: 'Singapore| English', link: '/Asia/singapore',flag: flags.singapore   },   
      { name: 'Thailand| English', link: '/Asia/English',flag: flags.thailand   },   
    ],
  },
  {
    name: 'France',
    open: false,
    submenu: [
      { name: 'Paris', link: '/france/paris' },
      { name: 'Lyon', link: '/france/lyon' },
    ],
  },
])

const toggleMenu = () => {
  showMenu.value = !showMenu.value
  if (!showMenu.value) {
    countries.value.forEach(c => (c.open = false))
  }
}
const toggleSubmenu = index => {
  countries.value[index].open = !countries.value[index].open
} 
const cat = 'Categories'
const catergorys = [
  {
   list: 'Moisturizers'
  },
  {
    list: 'Cleansers'
  },
  {
    list: 'Exfoliants'
  },
  {
    list: 'Essences & Serums'
  },
  {
    list: 'Eye Care'
  },
  {
    list: 'Masks'
  },
  {
    list:'Toners'
  },
  {
    list: 'Facial Mists'
  },
  {
    list: 'Skincare Sets'
  },
  {
    list: 'Skincare Finder'
  }
]
const coll = 'Collections'
const collects = [
  {
    list: 'Black Tea'
  },
  {
    list: 'Crème Ancienne'
  },
  {
    list: 'Floral Recovery'
  },
  {
    list: 'Lotus'
  },
  {
    list: 'Rose'
  },
  {
    list: 'Soy'
  },
  {
    list: 'Sugar'
  },
  {
    list: 'Tea Elixir Serum'
  },
  {
    list: 'Umbrian Clay'
  },
  {
    list: 'Vitamin Nectar'
  },
]

const conc = ' Concerns';
const concerns = [
  {
    list: 'Dehydration'
  },
  {
    list: 'Brightening'
  },
  {
    list: 'First Signs of Aging'
  },
  {
    list: 'Dark Circles & Puffiness'
  },
  {
    list: 'Dullness'
  },
  {
    list: 'Fine Lines & Wrinkles'
  },
  {
    list: 'Lifting & Firming'
  },
  {
    list: 'Oil Control'
  },
  {
    list: 'Pollution'
  },
  {
    list: 'Uneven Skin Texture'
  },
]
const go = 'Go beyond clean'
const soya = 'Shop Soy Face Cleanser'
const isSkinHovered = ref(false);
const isLipHovered = ref(false);
const isBodyHovered = ref(false);
const isGiftHovered = ref(false);

const gories = 'Categories' 
 const advances = [          
  {
    list: 'Advanced Lip Therapy'
  },
  {
    list: 'Tinted Lip Treatments'
  },
  {
    list: 'Flavored Lip Balms'
  },
  {
    list: 'Lip Care Sets'
  },
  {
    list: 'Lip Care Finder'
  }
 ]
 const lipHead = 'Your favorite lip tints'
 const lipShow = 'Shop Now'

 const bodys = [
  {
    list: 'Bath & Shower Gels'
  },
  {
    list: 'Body Lotions'
  },
  {
    list: 'Exfoliants & Scrubs'
  },
  {
    list: 'Hand Creams'
  },
  {
    list: 'Soaps'
  },
 ]

const spaces =[
  {
    list: 'Brown Sugar'
  },
  {
    list: 'Citron de Vigne'
  },
  {
    list: 'Brown Sugar'
  },
  {
    list: 'Hesperides Grapefruit'
  },
  {
    list: 'Milk Body Collection'
  },
  {
    list: 'Sake'
  },
  {
    list: 'Sugar Lemon'
  },
]

const share = 'Share the love with great bodycare'
const late = 'The Latest in Gifting'

const gifts = [
  {
    list: 'Gift Sets'
  },
  {
    list: 'Gift Finder'
  },
  {
    list: 'Build Your Own Gift'
  },
  {
    list: 'Jumbo & Value Sizes'
  },
  {
    list: 'Concierge'
  },
]
 const idea = 'Gift Ideas'

const travels = [
  {
    list: 'Travel-Size Gifts'
  },
  {
    list: 'eGift Card'
  }
]

const gifthead = 'Indulge in fresh gift sets'
const Gprice = 'Gifts by Price'

const prices = [
  {
    list: 'Under $25'
  },
  {
    list: 'Under $50'
  },
  {
    list: 'Under $100'
  },
  {
    list: "Sky's the Limit"
  },
]

const subheader = [
   'New',
   'Best Sellers',
   'Skincare',
   'Lip Care',
   'Body',
   'Fragrance',
   'Gifting ',
   'Offers'
]

const views = [
  {
    list: 'View All'
  },
  {
    list: 'Skincare Education'
  },
  {
    list: 'Expert Advice'
  },
  {
    list: 'Gift Guides'
  },
  {
    list: 'Our Impact'
  }
]
const mobDiscovers = [
  {
    list: 'My Rewards',
   icon: ['fas', 'gifts'],
  },
  {
    list: 'Traack Order',
    icon: 'fa-solid fa-truck'
  },
  {
    list: 'eGift Card Balance',
    icon: 'fa-solid fa-credit-card'
  },
  {
    list: 'Contact Us',
    icon: 'fa-solid fa-headset'
  },
  {
    list: 'Find a Store',
    icon: 'fa-solid fa-map-marker-alt'
  }
]
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>