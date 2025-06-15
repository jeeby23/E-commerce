<template>
    <div>
   <div class="text-center py-8">
   <h1 class="text-[3rem] font-serif">{{ create }}</h1>
   <p class="text-[1rem]">{{ start }}</p>
   </div>
   <div>
    <form @submit.prevent="register" class="space-y-4 px- flex justify-center items-center">
        <div class="">
    <div class="flex gap-4 py-5">
      <input type="text" placeholder="First name*" v-model="Firstname" class="border border-black p-2 rounded w-[400px]" />
      <input type="text" placeholder="Last name*" v-model="Lastname"  class="border border-black p-2 rounded w-[400px]" />
    </div>
    <div class="flex gap-4 py-5">
      <input v-model="email" type="email" placeholder="Email*" class="border border-black p-2 rounded w-[400px]" />
      <input v-model="Confirmemail" type="email" placeholder="Confirm Email*" class="border border-black p-2 rounded w-[400px]" />
    </div>
    <div class="flex gap-4 py-5">
      <div class="relative w-[400px]">
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password*"
          class="border border-black p-2 w-full rounded pr-10"
          v-model="password"
          required
                minlength="8"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        />
        <span
          class="absolute right-3 top-[30%] -translate-y-1/2 cursor-pointer text-gray-500"
          @click="togglePassword"
        >
          <fa :icon="showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']" />
        </span>
        <p class="text-[12px] mt-1 text-gray-600">
          Passwords must be 8–12 characters and contain an uppercase letter, number, and special character.
        </p>
      </div>
      <div class="relative w-[400px]">
        <input
          :type="showConfirmPassword ? 'text' : 'password'"
          placeholder="Confirm Password*"
          class="border border-black p-2 w-full rounded pr-10"
          v-model="confirmPassword"
        />
        <span
          class="absolute right-3 top-[30%] -translate-y-1/2 cursor-pointer text-gray-500"
          @click="toggleConfirmPassword"
        >
          <fa :icon="showConfirmPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']" />
        </span>
      </div>
      
    </div>
    <div class="flex gap-4 py-5">
        <div class="relative w-[400px]">
    <input
      type="date"
      v-model="dateof"
      placeholder="Date of Birth*"
      class="border border-black p-2 w-full rounded pr-10 appearance-none"
    />
    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
      <fa :icon="['fas', 'calendar-alt']" />
    </span>
  </div>
  <div>
    <div class="relative w-[150px]">
    <span class="absolute -top-2 left-4 bg-white px-1 text-[12px] text-gray-600">
      Region Code (NGN)
    </span>
    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">+234</span>
    <input
    :disabled="true"
    type="text"
    v-model="regionCode"
    class="pl-10 pr-3 py-2 border border-black rounded w-full bg-slate-300 text-gray-500 cursor-not-allowed"
    placeholder="Area code"
  />
  </div>
  </div>
  <div class="">
    <input  type="number" placeholder="phone number*"  class="border border-black p-2 w-[230px] rounded pr-10 no-spinner "  v-model="phoneNumber"
                  required
                  pattern="[0-9]{10}"><br>
    <label for="number">Must be a valid number</label>
  </div>
    </div>
    <div class="flex">
      <div>  <input  v-model="zipCode"
        required type="text" placeholder="Zip/Postal Code"  class="border border-black p-2 w-[400px] rounded pr-10 mr-4">
    <span><br>
        <label for="tell">To hear about store events near you.</label>
    </span>
 </div>
 <div>
    <select name="gender" id="gender" v-model="gender"
      required class="border border-black p-2 w-[400px] rounded pr-10">
      <option disabled value="select gender">Select gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Non-binary">Non-binary</option>
      <option value="Prefer not to say">Prefer not to say</option>
    </select>
  </div>
    </div>
    <div>
        <h3>{{ program  }}</h3>
        <input type="checkbox" v-model="termsAccepted"
        required>
        <label for="check">{{ check }}</label><br>
        <input type="checkbox"  id="promotions" 
        v-model="promotionsAccepted">
        <label for="promote">{{ promotion}}</label>
    </div>
    <div >
      <button 
  type="submit" 
  :disabled="isLoading" class="text-center text-white bg-[#303E48] w-auto py-3 px-4 text-[1rem] my-3"
>
 {{ isLoading ? 'Creating Account...' : 'Create Account' }}
</button>
    </div>
</div>
  </form>
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
      <p>Receive 15% OFF your first order when you sign-up for our emails.</p>
    </span>
    <input v-model="footerEmail" type="email" placeholder="Email Address*" class="text-black mb-2 w-[70%] py-2 rounded">
    <input v-model="footerPassword" type="password" placeholder="Password*"  class="text-black mb-2 w-[70%] py-2 rounded ">
    <button @click="sendFooterEmail" type="submit" class="bg-[#303E48] text-white py-2 px-4 rounded border-[0.5px] w-[70%] my-3">Sign Up</button>
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
    <h2>ABOUT FRESH</h2>
    <ul class="list-none">
      <li v-for="item in Aboutfreshs" :key="item" class="text-[15px] text-white cursor-pointer">{{ item }}</li>
    </ul>
  </div>
  <div class="flex flex-col min-w-[150px]">
    <h2>Contact Us</h2>
    <ul class="list-none">
      <li v-for="item in footerContacts" :key="item" class="text-[15px] text-white cursor-pointer">{{ item }}</li>
    </ul>
  </div>
  <div class="flex flex-col min-w-[150px]">
    <h2>Help Center</h2>
    <ul class="list-none">
      <li v-for="help in footerHelpers" :key="help" class="text-[15px] text-white cursor-pointer">{{ help }}</li>
    </ul>
  </div>
  <div class="flex flex-col min-w-[150px]">
    <h2>My Fresh</h2>
    <ul class="list-none">
      <li v-for="fresh in footerFreshs" :key="fresh" class="text-[15px] text-white cursor-pointer">{{ fresh }}</li>
    </ul>
  </div>
</div>
    </div>
  </footer>
</template>

<script setup>
   const create = 'Create An Account'
   const start = 'And start earning points & rewards'
   import { ref } from 'vue'
   import { createUserWithEmailAndPassword } from 'firebase/auth';
   import { auth } from '@/firebase'  
   import { useRouter } from 'vue-router'
   

const router = useRouter() 

const Firstname = ref('')
const Lastname = ref('')
const email = ref('')
const Confirmemail = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const dateof = ref('')
const regionCode = ref('')
const phoneNumber = ref('')
const zipCode = ref('')
const gender = ref('select gender')
const termsAccepted = ref(false)
const promotionsAccepted = ref(false)
const isLoading = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}
const register = async () => {
  isLoading.value = true
  try {

    if (!Firstname.value || !Lastname.value) {
      throw new Error('First name and last name are required')
    }
    
    if (!email.value || !Confirmemail.value) {
      throw new Error('Email fields are required')
    }
    
    if (email.value !== Confirmemail.value) {
      throw new Error("Emails don't match!")
    }
    
    if (!password.value || !confirmPassword.value) {
      throw new Error('Password fields are required')
    }
    
    if (password.value !== confirmPassword.value) {
      throw new Error("Passwords don't match!")
    }
    
    if (!dateof.value) {
      throw new Error('Date of birth is required')
    }
    
    if (!phoneNumber.value) {
      throw new Error('Phone number is required')
    }
    
    if (!zipCode.value) {
      throw new Error('Zip/Postal code is required')
    }
    
    if (!gender.value) {
      throw new Error('Gender selection is required')
    }
    
    if (!termsAccepted.value) {
      throw new Error('You must accept the terms of use')
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      email.value, 
      password.value
    )
    
    console.log("Account created:", userCredential.user)
    
    
    // localStorage.setItem('register', JSON.stringify({
    //   Firstname: Firstname.value,
    //   Lastname: Lastname.value,
    //   email: email.value,
    //   dateof: dateof.value,
    //   phoneNumber: phoneNumber.value,
    //   zipCode: zipCode.value,
    //   gender: gender.value
    // }))

    
    router.push('/registration')
  } catch (error) {
    
    if (error.code === 'auth/email-already-in-use') {
      alert('This email is already registered')
    } else if (error.code === 'auth/weak-password') {
      alert('Password should be at least 6 characters')
    } else if (error.code === 'auth/invalid-email') {
      alert('Please enter a valid email address')
    } else {
      alert(error.message)
    }
  } finally {
    isLoading.value = false
  }
}

const program = "By creating an account, you'll automatically join our rewards program";
const check = "Yes, I agree with Fresh's Terms of Use";
const promotion = "Sign up for promotional text messages. Message and data rates may apply."

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

<style lang="scss" scoped>

</style>