<template>
    <div class="mx-auto sm:pt-10 pt-8 sm:pr-0 sm:pl-32">
        <div class="text-3xl sm:text-5xl font-bold mb-4 sm:mb-8 text-white">My Tech Stack</div>
        <div class="sm:grid sm:grid-cols-4 grid-cols-1 sm:gap-8 gap-16">
            <div v-for="stack in stackImages" :key="stack.id"
                class="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md mb-12 sm:w-[300px] sm:h-[350px] w-[160px] h-[250px] justify-between">
                <img 
                    :src="stack.logoURL" 
                    :alt="stack.title" 
                    :class="{
                        'sm:h-[200px] sm:w-34 sm:mb-8': stack.id !== 'css' && stack.id !== 'html', 
                        'sm:h-[200px] sm:w-34 sm:mb-8': stack.id === 'css', 
                        'sm:h-[200px] sm:w-[200px] sm:mb-8': stack.id === 'html'
                    }" 
                />
                <span class="text-lg font-semibold">{{ stack.title }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>

import { stackImages } from '../constants';

</script>

<style scoped>

</style>