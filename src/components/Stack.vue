<template>
    <div class="mx-auto sm:pt-10 pt-8 sm:px-4">
      <div class="text-3xl sm:text-5xl font-bold mb-4 sm:mb-8 text-white">My Tech Stack</div>
      <div class="sm:grid sm:grid-cols-4 grid-cols-1 sm:gap-8 gap-16 items-center pl-4">
        <div v-for="stack in stackImages" :key="stack.id">
          <SkillCard :skillName="stack.title" :percentage="stack.percentage" />
        </div>
      </div>
    </div>
  </template>
  

<script setup>

import { stackImages } from '../constants';
import SkillCard from './SkillCard.vue';

</script>

<style scoped>

</style>