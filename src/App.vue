<template>
  <navbar-vue :cart="cart"/>
  <router-view/>
</template>
<script setup>
import {onBeforeMount} from 'vue';
import navbarVue from "./components/navbar.vue";
import {useRouter, useRoute} from 'vue-router';
import { auth } from '@/firebase' 

const router = useRouter();
const route = useRoute();

import { onAuthStateChanged } from 'firebase/auth' 
onBeforeMount(() => {
  onAuthStateChanged(auth, (user) => {  
    if(!user){
      router.replace('/login');
    }else if (route.path == "/login" || route.path =="/register"){
      router.replace('/registration')
    }
  })
})



</script>

