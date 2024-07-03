<template>
  <nav class="flex items-center sm:flex-row flex-col px-4 justify-between align-centre sm:text-xl text-xs">
    <ul class="flex sm:flex-row flex-col px-4 py-5 items-center sm:ml-12">
      <li v-for="(navLink, index) in navLinks" :key="navLink.id" class="mr-5 mb-5 sm:mb-0">
        <a :href="`${navLink.id}`">
          {{ navLink.title }}
        </a>
      </li>
    </ul>
    <div title="KINDUDE" class="md:block hidden sm:mr-[20%] text-7xl logo">
      KINDUDE
    </div>
    <div class="flex justify-center items-center">
      <img :src="logoSrc" alt="Logo" class="logo-image" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"
        @click="emitStartAudio">
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { navLinks } from '../constants';
import logoSrc from '@/assets/logo.png';
let isPlaying = false


const emitStartAudio = () => {
  isPlaying = !isPlaying;
  console.log(isPlaying);
  const event = new Event(isPlaying ? 'startAudio' : 'stopAudio');
  window.dispatchEvent(event);
};
</script>


<style scoped>
a {
  box-shadow: inset 0 0 0 0 #e25807;
  color: white;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}

a:hover {
  box-shadow: inset 100px 0 0 0 red;
  color: white;
}

.logo {
  animation: glitch 1s linear infinite;
  text-shadow: 1px 1px 1px red;

}

@keyframes glitch {

  2%,
  64% {
    transform: translate(2px, 0) skew(0deg);
  }

  4%,
  60% {
    transform: translate(-2px, 0) skew(0deg);
  }

  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

.logo:before,
.logo:after {
  content: attr(title);
  position: absolute;
  text-shadow: red;

  left: 0;
}

.logo:before {
  animation: glitchTop 1s linear infinite;
  text-shadow: red;

  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

.logo-image {
  width: 65%;
  height: 65%;
  transition: transform 0.3s ease-in-out;
  /* Transition property added */
}

.logo-image:hover {
  transform: scale(1.2);

}

@keyframes glitchTop {

  2%,
  64% {
    transform: translate(2px, -2px);
  }

  4%,
  60% {
    transform: translate(-2px, 2px);
  }

  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
}

.logo:after {
  animation: glitchBotom 1.5s linear infinite;
  text-shadow: red;

  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {

  2%,
  64% {
    transform: translate(-2px, 0);
  }

  4%,
  60% {
    transform: translate(-2px, 0);
  }

  62% {
    transform: translate(-22px, 5px) skew(21deg);
  }
}

@media only screen and (max-width: 640px) {}
</style>