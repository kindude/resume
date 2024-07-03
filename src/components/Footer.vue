<script setup>
import { footerLinks } from '../constants';
import ContactForm from './ContactForm.vue';

</script>

<template class="text-light-grey">
  <div class="sm:grid bg-black sm:grid-cols-2 sm:h-full">

    <div class="social-media items-center justify-center sm:col-start-2 col-start-1 pt-10 items-center sm:ml-52">
      <h1 class="text-white mt-3 sm:text-5xl text-xl sm:mr-0 mr-5 sm:mb-14">Social Media</h1>
      <ul class="text-white text-center sm:mb-48 mt-10">

        
        <li v-for="(footerLink, index) in footerLinks" :key="footerLink.id" class="mr-5 sm:mb-0 sm:text-3xl text-s flex sm:mb-10 mb-10">
          <img :src="footerLink.logoURL" class="w-[32px] h-[32px] mr-5">
          <a :href="`${footerLink.url}`">{{ footerLink.title }}</a>
        </li>

      </ul>
    </div>
    <div class="sm:col-start-1 col-start-1 row-start-1 sm:row-start-1 pl-5 pr-5 mt-10 pb-10">

      <h1 class="text-white mt-3 mb-4 text-center sm:text-5xl text-xl">Contact Form</h1>
      <ContactForm></ContactForm>
    </div>

  </div>
</template>

<style scoped>

@media screen and (max-width: 500px) {
  .social-media {
    display: flex;
    flex-direction: column;
  }
}

</style>