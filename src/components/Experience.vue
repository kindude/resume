<template>
    <div class="mx-auto sm:pt-10 pt-8 sm:pr-0 pr-4">
      <div class="sm:text-5xl text-3xl font-bold mb-4 text-white sm:mb-24 mb-12">
        Experience
      </div>
    
      <div v-for="(item, index) in experience" :key="index" class="mb-10 sm:pl-24 sm:pr-24">
        <button @click="toggleDropdown(index)" class="gradient-red-white w-full text-left sm:h-[100px] text-center font-bold bg-gray-200 p-2 rounded-md sm:text-3xl">
          {{ item.title }} – {{ item.company }} | {{ item.dates }}
        </button>
        <div v-if="dropdownOpen[index]" class="p-4 border border-gray-300 rounded-md">
          <ul class="list-disc list-inside py-4">
            <li class="text-white sm:text-xl text-s" v-for="(task, idx) in item.tasks" :key="idx">{{ task }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    setup() {
      const dropdownOpen = reactive({});
      const experience = [
        {
          title: 'FullStack Junior Web Developer',
          company: 'CSD LAB',
          dates: 'March 2024 – Present',
          tasks: [
            'Maintained complex functionality for analysers.',
            'Enhanced user experience and results import by creating new functionalities.',
            'Developed new algorithms for optimization.',
            'Implemented new admin panels for RabbitMQ and external API integration.'
          ]
        },
        {
          title: 'FullStack Honours Project',
          company: 'EduTrack',
          dates: 'December 2023 – February 2024',
          tasks: [
            'Led development of an Educational Tracking Platform',
            'Used FastAPI, Python, React, TypeScript, PostgreSQL, Redis, and Docker',
            'Designed scalable and modular architecture.',
            'Conducted thorough testing and debugging.',
            'Collaborated with stakeholders for requirements and feedback.',
            'Delivered a user-friendly platform for educational tracking and management.'
          ]
        },
        {
          title: 'Hands-on Training Program at KreativStorm',
          company: 'KreativStorm',
          dates: 'September - October 2023',
          tasks: [
            'Developed a weather application with seamless third-party API integration.',
            'Explored HTTP requests and network programming, creating TCP/UDP servers.',
            'Built a mail service app, enhancing practical communication skills.',
            'Gained a certificate in Python Development.'
          ]
        },
        {
          title: 'Backend Internship at Meduzzen',
          company: 'Meduzzen',
          dates: 'June - August 2023',
          tasks: [
            'Developed and maintained high-performance APIs.',
            'Used Python, FastAPI, and Docker',
            'Streamlined frontend communication.',
            'Ensured robust database management.'
          ]
        },
        {
          title: 'Frontend Internship at Meduzzen',
          company: 'Meduzzen',
          dates: 'June - August 2023',
          tasks: [
            'Led frontend architecture',
            'Implemented user-centric features using React and Auth0',
            'Enhanced security and data visualization'
          ]
        }
      ];
  
      const toggleDropdown = (index) => {
        dropdownOpen[index] = !dropdownOpen[index];
      };
  
      return {
        dropdownOpen,
        experience,
        toggleDropdown
      };
    }
  };
  </script>
  
  <style scoped>
.gradient-red-white {
    background: linear-gradient(to right, white, white);
  }
  </style>
  