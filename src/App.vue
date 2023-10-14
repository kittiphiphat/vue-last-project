<template>

  <div>
    <Navbar/>

    <!-- <RouterView/> -->
    <router-view/>

    <Footer/>
  </div>

</template>

<script setup>

import Navbar from './components/NavbarPage.vue';

// import { RouterView } from 'vue-router'

import Footer from './components/Footer.vue';

</script>

<style lang="scss" scoped>

</style>