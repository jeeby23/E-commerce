import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

 function addToCart(item) {
  const found = cart.value.find(i => i.id === item.id)
  if (found) {
    found.quantity = (found.quantity || 1) + 1
  } else {
    cart.value.push({ ...item, quantity: 1 })
  }
}

  function removeFromCart(item) {
    cart.value = cart.value.filter(i => i !== item)
  }
  function decreaseQuantity(item) {
    const found = cart.value.find(i => i.id === item.id)
    if (found && found.quantity > 1) {
      found.quantity--
    }
  }

  return { cart, addToCart, removeFromCart,decreaseQuantity }
})