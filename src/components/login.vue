<template>
  <div class="flex justify-center items-center min-h-screen  px-4">
    <div class="flex flex-col-reverse md:flex-row gap-10">
      <div class="bg-[#E3f0f8] px-10 py-[60px] w-[400px] h-[480px] space-y-6 rounded shadow-md">
        <div class="text-center">
          <h1 class="text-[2.5rem] leading-[4rem] font-serif">{{ fresh }}</h1>
          <p class="text-[1rem] leading-[1.5rem]">{{ child }}</p>
          <p>{{ member }}</p>
          <div class="flex justify-center items-center gap-10 mt-4">
            <div class="text-center">
              <fa :icon="['fas', 'gift']" /><br>
              <span>{{ welcome }}</span>
            </div>
            <div class="text-center">
              <fa :icon="['fas', 'cake-candles']" /><br>
              <span>{{ gift }}</span>
            </div>
          </div>
          <div class="flex justify-center gap-10 mt-4">
            <div class="text-center">
              <fa :icon="['fas', 'circle-up']" /><br>
              <span>{{ double }}</span>
            </div>
            <div class="text-center">
              <span class="border border-blue-950 rounded-lg p-1">
                <fa :icon="['fas', 'star']" />
              </span><br>
              <span>{{ access }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class=" px-10 w-[400px] md:w-[580px] space-y-6 rounded ">
        <h1 class=" font-light font-serif text-[2.5rem]">Sign In</h1>
        <form @submit.prevent="login" class="space-y-4">
          <input
            type="email" 
            placeholder="Email*"
            class="border border-black p-2 w-[320px] md:w-[500px] rounded"
            v-model="email" />
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password*"
              class="border border-black p-2 w-[320px] md:w-[500px]  rounded pr-10"
              v-model="password" />
            <span
              class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
              @click="togglePassword" >
              <fa :icon="showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']" />
            </span>
          </div>
          <div class="flex items-center justify-between">
            <label class="flex items-center gap-2 text-sm">
              <input  v-model="keepSignedIn" type="checkbox" name="sign" id="sign" />
              <span>Keep me signed in</span>
            </label>
            <span class="underline text-sm text-black hover:text-blue-950 cursor-pointer" @click="showModal = true">
  Forget password?
</span>
          </div>
<div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
        <h2 class="text-xl font-bold mb-2">Password Recovery</h2>
        <p class="text-sm mb-4">Provide your account email to receive a reset link.</p>
        <input 
          type="email" 
          v-model="Resetemail" 
          placeholder="Email*" 
          class="w-full p-2 border border-gray-300 rounded mb-4"
        >
        <div class="flex justify-end space-x-2">
          <button @click="sendPasswordReset" class="bg-[#303E48] text-white px-4 py-2 rounded">
            Send Reset Link
          </button>
          <button @click="showModal = false" class="text-gray-600 px-4 py-2">
            Cancel
          </button>
        </div>
        <p v-if="message" class="mt-2 text-sm text-green-600">{{ message }}</p>
      </div>  
    </div>
          <div> 
            <button 
            type="submit" 
            class="text-white bg-[#303E48] w-full py-2 rounded"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Signing In...' : 'Sign In' }}
          </button>
          </div>
          <div class="text-white bg-[#303E48] text-center py-2 rounded cursor-pointer">
          <router-link to="/register">  Create an Account</router-link>
          </div>
          <div class="flex justify-center items-center w-full space-x-4">
            <div class="flex-grow border-t border-gray-300 max-w-[300px]"></div>
            <span class="text-gray-700 text-sm">Or continue with</span>
            <div class="flex-grow border-t border-gray-300 max-w-[300px]"></div>
          </div>
          <div class="border border-black text-black hover:bg-[#303E48] hover:text-white text-center py-2 rounded cursor-pointer">
            <fa :icon="['fab', 'facebook']" class="text-blue-500" /> Facebook
          </div>
          <div class="border border-black text-black hover:bg-[#303E48] hover:text-white text-center py-2 rounded cursor-pointer">
            Login with Amazon
          </div>
        </form>
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

   const fresh = 'Fresh Rewards';
   const child = 'For every $1 spent, earn 1 point'
   const member = 'Member Benefits'
   import { ref ,watch} from 'vue'
   import { auth } from '@/firebase'
   import { 
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword, sendPasswordResetEmail,createUserWithEmailAndPassword
} from 'firebase/auth'  
import { useRouter } from 'vue-router'
import {  onAuthStateChanged } from 'firebase/auth'

const router = useRouter()  

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const keepSignedIn = ref(true) 
const isLoading = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const login = async () => {
  if (!email.value || !password.value) {
    alert('Please enter both email and password')
    return
  }

  isLoading.value = true

  try {
    await setPersistence(
      auth,
      keepSignedIn.value ? browserLocalPersistence : browserSessionPersistence
    )

    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
    
  } catch (error) {
    console.error('Login error:', error)
    let errorMessage = 'Login failed. Please try again.'
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = 'Invalid email format'
        break
      case 'auth/user-disabled':
        errorMessage = 'Account disabled'
        break
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        errorMessage = 'Invalid email or password'
        break
      case 'auth/too-many-requests':
        errorMessage = 'Too many attempts. Try again later.'
        break
    }
    alert(errorMessage)
  } finally {
    isLoading.value = false
  }
}
  const welcome = 'A Welcome Gift';
  const gift = 'Birthday Gift'
  const double = 'Double points during your birthday month'
  const access = 'Access to exclusive sales & double points events'
const showModal = ref(false)
const message = ref('')
const error = ref('')
const Resetemail = ref('')
const sendPasswordReset = async () => {
  message.value = ''
  error.value = ''

  if (!Resetemail.value) {
    error.value = 'Please enter your email.'
    return
  }
 
  try {
    await sendPasswordResetEmail(auth, Resetemail.value)
    message.value = 'Password reset link sent! Check your email.'
    email.value = ''
  } catch (err) {
    error.value = err.message
  }
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

<style  scoped>

</style>