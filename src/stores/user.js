import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth, onAuthStateChanged } from '@/firebase'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const user = ref(null)
  const authReady = ref(false)

  function init() {
    return new Promise((resolve) => {
      console.log('Setting up auth listener...')
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          isLoggedIn.value = true
          user.value = {
            uid: firebaseUser.uid,
            displayName: firebaseUser.displayName || firebaseUser.email.split('@')[0],
            email: firebaseUser.email
          }
        } else {
          isLoggedIn.value = false
          user.value = null
        }
        authReady.value = true
        resolve()
      })
      return unsubscribe
    })
  }

  async function logout() {
    try {
      await auth.signOut()
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  return { 
    isLoggedIn,user,authReady,init, logout 
  }
})