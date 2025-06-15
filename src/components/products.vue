<template>
  <div class="px-[50px] md:px-[100px]">
    <div>
      <h1 class="font-serif text-[2rem] md:text-[3rem]">{{ best }}</h1>
    </div>
    <div class="relative w-full">
      <button @click="prevSlide" class="absolute left-0 z-10 bg-slate-500 p-4 shadow rounded-[50%] top-[30%] -translate-y-[30%]">
        ‹
      </button>
      <button @click="nextSlide" class="absolute right-0 z-10 bg-slate-500 p-4 shadow rounded-[50%] top-[30%] -translate-y-[30%]">
        ›
      </button>
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-500 ease-in-out gap-4"
             :style="{ transform: `translateX(-${currentIndex * (cardWidth + gap)}px)` }"
             ref="cardContainer">
          <div v-for="card in props.cardds" :key="card.id" class="min-w-[200px] md:min-w-[300px] mb-10">
             <router-link :to="`/products/${card.id}`">
            <img :src="card.image" alt="Card image" class="w-[200px] md:w-[300px] h-auto object-contain rounded mb-4" />
            <h2 class="text-[10px] md:text-[14px] font-semibold">{{ card.oneHead }}</h2>
            </router-link>
            <div class="text-[#303E48] text-[10px] border-b-[0.5px] border-[#303E48] pb-3">
              <span><fa :icon="['fas', 'star']" /></span>
              <span><fa :icon="['fas', 'star']" /></span>
              <span><fa :icon="['fas', 'star']" /></span>
              <span><fa :icon="['fas', 'star']" /></span>
              <span>{{ card.number }}</span>
            </div>
            <p class="text-gray-700 mt-2">{{ card.onePrice }}</p>
            <select v-model="card.selectedOption" class="mt-2 w-full px-4 py-2 border rounded text-sm mb-10">
              <option disabled value="">Select a Size</option>
              <option v-for="option in card.options" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
           <button @click="cartStore.addToCart(card)" class="mt-2 bg-[#303E48] text-white px-4 py-2 w-full rounded hover:bg-gray-800">
  {{ card.oneAdd }}
</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref,onMounted, nextTick } from 'vue'
import { useCartStore } from '@/stores/cart.js' 

const cartStore = useCartStore()

const props = defineProps({
  best: {
    type: String,
    default: 'Shop Best Sellers'
  },
  cardds: {
    type: Array,
    default: () => []
  },
  addToCart: {
    type: Function,
    default: () => {}
  }
})


const currentIndex = ref(0)
const cardWidth = 300 
const gap = 16 



const cardContainer = ref(null)
const containerWidth = ref(0)
const cardsPerView = ref(1)

 console.log('cardds', props.cardds)

onMounted(() => {
  nextTick(() => {
    if (cardContainer.value) {
      containerWidth.value = cardContainer.value.offsetWidth
      cardsPerView.value = Math.floor(containerWidth.value / (cardWidth + gap))
    }
  })
})

function nextSlide() {
  const maxIndex = props.cardds.length - cardsPerView.value
  if (currentIndex.value < maxIndex) {
    currentIndex.value++
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

</script>

<style>

</style>