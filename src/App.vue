<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div
    class="wrapper min-h-screen w-full grid grid-cols-[0.3fr_10fr] sm:grid-cols-1 sm:grid-rows-[0.1fr_2.5fr_1.5fr] grid-rows-[80%_20%] sm:gap-y-0 bg-almost-black"
    id="app">
    <div
      class="nav bg-black text-white row-start-1 row-end-1 sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-1 sm:flex-row bg-almost-black text-light-grey mt-10 sm:mt-3 sm:pb-10">
      <Navbar></Navbar>
    </div>
    <div class="sm:col-start-1 col-start-2 bg-black pl-10 pr-10 bg-very-dark-grey">

      <RouterView></RouterView>

    </div>
    <div class="h-full footer sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-3 col-start-1 col-end-3  text-white border-0 row-start-2 bg-almost-black text-light-grey">
      <Footer>

      </Footer>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  
}

.nav {

  border-bottom: 2px solid;
  border-image: linear-gradient(to left, red, white);
  border-image-slice: 1;
  border-image-width: 0 0 2px 0;
}

.bg-almost-black {
  background-color: #121212; /* Almost black */
}

.bg-very-dark-grey {
  background-color: #1a1a1a; /* Very dark grey */
}

.footer {
  border-top: 2px solid;
  border-image: linear-gradient(to right, red, white);
  border-image-slice: 1;
  border-image-width: 2px 0 0 0;
}

@media only screen and (max-width: 700px) {
  .nav {

    border: none;
  }

  .footer {
    border: none;
  }
}
</style>
