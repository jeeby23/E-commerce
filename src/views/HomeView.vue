<template>
  <div class="home min-h-screen">
    <div class="relative w-full h-screen">
     <swiper
  :modules="[Navigation]"
  :navigation="{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }"
  :loop="false"
  @slideChange="onSlideChange"
  @swiper="onSwiperInit"
  class="mySwiper h-full w-full">
        <swiper-slide class="h-full w-full relative"> 
          <img :src="images[0]" alt="Image 1" class="w-full h-[85%] object-fill mt-1 box-border" />
          <div  class="absolute inset-0">
            <div v-for="(color, index) in colors " :key="index" class=" pt-[350px] md:pt-[80px] pl-[20px] md:pl-[50px] "> 
            <h2 class=" text-[1.5rem] md:text-[3rem] font-serif text-center md:text-left">
             {{color.meet}}
            </h2>
            <p class="pl-[15px] font-semibold text-[1rem] md:text-[1.2rem] text-center md:text-left  "> {{color.new}} </p>
            <div class="border-[0.5px] border-black w-[100px] mt-[10px] md:mt-[40px] ml-[180px] md:ml-[30px] rounded"><p class="px-1 py-2"> {{color.shop}} </p> </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="h-full w-full relative">
          <img :src="images[1]" alt="Image 2" class="w-full h-[85%] object-fill mt-1" />
          <div class="absolute inset-0">
            <div v-for="(beyond, index) in beyonds " :key="index" class=" pt-[350px] md:pt-[150px] pl-[100px]"> 
            <h2 class="text-[3rem] font-serif text-white pl-[10px]">
             {{beyond.clean}}
            </h2>
            <p class="pl-[] font-semibold text-[1.2rem] text-white"> {{beyond.hyd}} </p>
            <div class="border-[0.5px] border-white w-[100px] text-white rounded ml-[70px] mt-3"><p class="px-1 py-2"> {{beyond.shop}} </p> </div>

            </div>
          </div>
        </swiper-slide>
      </swiper>
      <button
  class="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 text-black"
  :class="{ 'swiper-button-disabled': !showPrev }"
  :disabled="!showPrev"
></button>
<button
  class="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 text-black"
  :class="{ 'swiper-button-disabled': !showNext }"
  :disabled="!showNext"
></button>
    </div>
  <productsVue :best="' Shop Best Sellers!'" :cardds="cardds" :addToCart="addToCart" />
  <div class="px-[80px]"> 
    <span class="font-serif text-[2.5rem] flex justify-center">Shop by category</span>
    <span class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
    <ul v-for="(shopImg, index) in shopImgs" :key="index" class="flex justify-between mt-10">
      <li class="">
      <router-link to="/shop">  <img :src="shopImg.src" :alt="shopImg.alt" class="w-full  h-auto object-cover rounded-[50%] hover:animation-bounce " /></router-link>
        <h2 class="text-center">{{ shopImg.alt }}</h2>
      </li>
    </ul>
     </span>
    <div class="hidden" id="shopImgs">
      <span class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
        <ul v-for="(shopImg, index) in SecShopImgs" :key="index" class="flex justify-between mt-10">
          <li><img :src="shopImg.src" :alt="shopImg.alt" class="w-full h-auto object-cover rounded-[50%]" />
            <h2 class="text-center">{{ shopImg.alt }}</h2>
            </li>
          </ul>
        </span>     
      </div>
         <span @click="viewMoreElement" id="viewMore" class="flex justify-center py-4 underline cursor-pointer">View More</span>
    </div>
    <div class="px-5 md:px-[80px] flex flex-col md:flex-row justify-center items-center mt-10">
      <div class="">
        <img :src="freshlip" alt="" class=" md:w-[60vw]  h-auto object-cover" />
        </div>
        <div class="text-center md:pr-[200px]  ">
          <h2 class="font-serif text-[2rem]">color</h2>
          <h3 class="font-serif text-[1.5rem]">meet care</h3>
          <p class="mb-4">Sheer, juicy tint. Smoother lips</p>
        <span class="border-[0.5px] border-black px-2 py-2 my-3">  <router-link  class=" my-3 ">Shop Lip Oil</router-link></span>
          </div>
      </div>
      <div class=" px-5 md:px-[80px] flex flex-col-reverse md:flex-row justify-around items-center mt-10">
  <div class="flex flex-col justify-center items-center md:items-start text">
    <h2 class="font-serif text-[2rem]">All orders ship free</h2>
    <p>Plus, a 4-piece gift on all orders $100+</p>
    <span class="bg-[#303E43] text-white py-3 px-2 rounded"><router-link>Shop Now</router-link></span>
    </div>
    <div class="flex flex-col item"><img :src="soyfrsh" alt="" class=" md:w-[60vw]  h-auto object-cover"></div>
    </div>
  <productsVue :best="'Best Sellers!'" :cardds="BestSellerr" :addToCart="addToCart" />
  <div class="py-10">
  <span class="text-[2.5rem] font-serif text-center py-3"><h2>Explore our collections</h2></span>
  <div class="flex  flex-col md:flex-row items-center gap-5 px-[80px]">

    <ul v-for="(item, index) in Explore" :key="index">
      <li class="">
        <img :src="item.image" alt="" class="w-auto h-auto object-cover rounded " /><br>
        <h2 class="text-center">{{ item.oneHead }}</h2>
      </li>
    </ul>
  </div>
  <div class="my-[100px] px-5 md:px-[80px] flex flex-col md:flex-row justify-around items-center gap-10 ">
    <div>
      <span ><img :src="saftey " alt="" class=" md:w-[70vw] object-cover md:h-auto"></span>
      </div>
      <div class="">
        <span class="font-serif text-[2.5rem] md:text-[3rem]">Safety backed by science</span>
        <p>At fresh, we care as much about what we put into our products as what we leave out</p>
        <span>
        <span class="font-serif text-[2.5rem]">1</span>we ban 13,00+ ingredients in strict adherence to international regulations. </span>
        <span class=""><br>
          <span class="font-serif text-[2.5rem]">2</span> Our experts text every ingredients an average of 3 times to ensure its safe on skin . </span>
        <span class="my-7"><br>
          <span class="font-serif text-[2.5rem]">3</span> We spend 2+ years validating each products safety by a team of toxicologists, chemists, biologists, and regulatory experts. </span><br>
         <div class="text-center mt-10">  <span class="border-[1px] px-2 py-3 text-[#303E43] text-center"><router-link to="/about" class="my-5">Learn more</router-link></span></div>
        </div> 
    </div>
    <div class="px-5 md:px-[80px] flex flex-col-reverse md:flex-row justify-around items-center gap-10 mt-10">
      <div>
        <span class="font-serif text-[2.5rem]">{{ forever }}</span>
        <p class="text-sm">{{ paraforever }}</p>
        <span>
          <span class="font-serif text-[2.5rem]">1 </span>
          <span>{{ one }}</span>
        </span><br>
        <span>
          <span class="font-serif text-[2.5rem]">2 </span>
          <span>{{ two }}</span>
        </span><br>
        <span>
          <span class="font-serif text-[2.5rem]">3 </span>
          <span>{{ three }}</span>
        </span>
        <div class="text-center mt-10">  <span class="border-[1px] px-2 py-3 text-[#303E43] text-center"><router-link to="/about" class="my-5">Learn more</router-link></span></div>
        </div>
        <div>
          <span><img :src="foreverfresh " alt=""></span>
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
import { ref,onMounted, nextTick } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { BestSellerr } from '@/data/Bestsellerr';
import { cardds } from '@/data/TopProduct';
import { Explore } from '@/data/Explore';

import HomeswiperOne from '@/assets/img/HomeswiperOne.jpg';
import HomeswiperTwo from '@/assets/img/HomeswiperTwo.jpg';
import freshlip from '@/assets/img/freshLip.jpg';
import soyfrsh from '@/assets/img/soyfrsh.jpg';
import productsVue from '@/components/products.vue';
import saftey from '@/assets/img/safety.jpg';
import foreverfresh from '@/assets/img/forever.jpg';



const images = [HomeswiperOne, HomeswiperTwo];

const showPrev = ref(false);
const showNext = ref(true);
let swiperInstance = null;

function onSwiperInit(swiper) {
  swiperInstance = swiper;
}

function onSlideChange() {
  if (swiperInstance) {
    const index = swiperInstance.realIndex;
    showPrev.value = index > 0;
    showNext.value = index < images.length - 1;
  }
}
const colors = [
 {
   meet: 'Color Meet Care',
   new:'New! Sheer, juicy tint. Smooth lips',
   shop: 'Shop Lip Oil'
 }

]
const beyonds  = [
 {
  clean: 'Beyond clean',
   hyd: 'Hydrate & soothe with Soy Face Cleanser',
   shop: 'Shop Now'
 }

]

const best = 'Shop best sellers'


const currentIndex = ref(0)
const cardWidth = 300 // px
const gap = 16 // px

function prevSlide() {
  if (currentIndex.value > 0) currentIndex.value--
}
function nextSlide() {
  if (currentIndex.value < props.cardds.length - 1) currentIndex.value++
}
const shopImgs = [
  { src: require('@/assets/img/giftSets.jpg'), alt: 'GGift Sets' },
  { src: require('@/assets/img/cleansers.jpg'), alt: 'Cleansers' },
  { src: require('@/assets/img/moisturizers.jpg'), alt: 'Moisturizers' },
  { src: require('@/assets/img/EyeCare.jpg'), alt: 'Eye Care' },
  { src: require('@/assets/img/serums.jpg'), alt: 'Essence & Serums' },
  { src: require('@/assets/img/masks.jpg'), alt: 'Masks' }

]
const SecShopImgs = [
  { src: require('@/assets/img/bestSellers.jpg'), alt: 'Best Sellers' },
  { src: require('@/assets/img/toners.jpg'), alt: 'Toners' },
  { src: require('@/assets/img/lipCare.jpg'), alt: 'Lip Care' },
  { src: require('@/assets/img/exfoliants.jpg'), alt: 'Exfoliants' },
  { src: require('@/assets/img/bodycare.jpg'), alt: 'Body Care' },
  { src: require('@/assets/img/skinCare.jpg'), alt: 'Skin Care' }

]
const viewMore = ref(false)
onMounted(() => {
  const viewMoreElement = document.getElementById('viewMore');
  const shopImgsElement = document.getElementById('shopImgs');

  viewMoreElement.addEventListener('click', () => {
    viewMore.value = !viewMore.value;
    if (viewMore.value) {
      shopImgsElement.classList.remove('hidden');
      viewMoreElement.textContent = 'View Less';
    } else {
      shopImgsElement.classList.add('hidden');
      viewMoreElement.textContent = 'View More';
    }
  });
});

const forever = 'Forever Fresh'
const paraforever = 'Our commitment to sustainability'
const one = 'Improving our ingredientss sourcing with respect to the planet and people by partnering with union for Ethical BioTrade (UEBT) .'
const two = ' Ensuring all products packaging is made with recycled materials by 2025.'
const three = ' Working to achieve net-zero carbon emisions by 2030 by setting reduction and offestting targets aligned with the paris Agreement '

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
<style scoped>
.swiper-button-prev,
.swiper-button-next {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  padding: 30px;
  font-size: 25px;
}
</style>