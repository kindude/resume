<template>
  <div class="mx-auto sm:pt-10 pt-8 sm:pr-0 pr-4">
    <div class="sm:text-5xl text-3xl text-white font-bold mb-8">Education</div>
    
    <!-- University of West of Scotland -->
    <div class="university sm:w-full ">
      <button @click="toggleDropdown('uws')" class="w-full sm:text-center sm:text-3xl text-left bg-gray-200 p-2 rounded-md font-bold flex justify-between items-center sm:h-[200px]">
        University of West of Scotland 
        <span :class="dropdownOpen.uws ? 'rotate-180' : ''">▼</span>
      </button>
      <div v-if="dropdownOpen.uws" class="">
        <div v-for="year in universities.uws.years" :key="year.year">
          <button @click="toggleDropdown(`uws-${year.year}`)" class="w-full text-left bg-gray-300 p-2 rounded-md flex justify-between items-center">
            Year {{ year.year }}
            <span :class="dropdownOpen[`uws-${year.year}`] ? 'rotate-180' : ''">▼</span>
          </button>
          <div v-if="dropdownOpen[`uws-${year.year}`]" class="pl-4 text-white">
            <ul class="list-disc list-inside">
              <li v-for="module in year.modules" :key="module.name">
                {{ module.name }} - {{ module.grade }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Donetsk Technical University -->
    <div class="university mt-4">
      <button @click="toggleDropdown('dtu')" class="w-full sm:text-center sm:text-3xl text-left bg-gray-200 p-2 rounded-md font-bold flex justify-between items-center sm:h-[200px] ">
        Donetsk Technical University
        <span :class="dropdownOpen.dtu ? 'rotate-180' : ''">▼</span>
      </button>
      <div v-if="dropdownOpen.dtu" class="pl-4 ">
        <div v-for="year in universities.dtu.years" :key="year.year">
          <button @click="toggleDropdown(`dtu-${year.year}`)" class="w-full text-left bg-gray-300 p-2 rounded-md flex justify-between items-center">
            Year {{ year.year }}
            <span :class="dropdownOpen[`dtu-${year.year}`] ? 'rotate-180' : ''">▼</span>
          </button>
          <div v-if="dropdownOpen[`dtu-${year.year}`]" class="pl-4 text-white">
            <ul class="list-disc list-inside">
              <li v-for="module in year.modules" :key="module.name">
                {{ module.name }} - {{ module.grade }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const dropdownOpen = reactive({
      uws: false,
      dtu: false
    });

    const universities = {
      uws: {
        name: "University of West of Scotland",
        years: [
          {
            year: 3,
            modules: [
              { name: "Programming for Mobile Devices", grade: "91.0 A1" },
              { name: "Internet Scripting", grade: "94.5 A1" },
              { name: "Web Server Technology", grade: "92.0 A1" },
              { name: "Research Methods in Computing", grade: "70.0 A3" },
              { name: "Web Site Development", grade: "95.0 A1" },
              { name: "Database Applications", grade: "91.4 A1" },
              { name: "Creative Technologies Professional", grade: "100.0 A1" }
            ]
          },
          {
            year: 4,
            modules: [
              { name: "Dynamic Web Technologies", grade: "92.0 A1" },
              { name: "Computing Honours Project", grade: "90.2 A1" },
              { name: "Digital Project", grade: "82.6 A2" },
              { name: "Server Side Systems", grade: "90.0 A1" },
              { name: "Internet Technologies", grade: "78.0 A3" }
            ]
          }
        ]
      },
      dtu: {
        name: "Donetsk Technical University",
        years: [
          {
            year: 1,
            modules: [
              { name: "Web-Based Systems", grade: "Passed" },
              { name: "Web Technologies", grade: "Passed" },
              { name: "Computer Network Administration", grade: "Excellent" },
              { name: "Algorithms and Methods of Computing", grade: "Passed" },
              { name: "Computer Architecture", grade: "Passed" },
              { name: "Introduction into the Professional Field", grade: "Passed" },
              { name: "Interchangeability, Standardization and Engineering Measurements", grade: "Passed" },
              { name: "Advanced Mathematics", grade: "Excellent" },
              { name: "Discrete Mathematics", grade: "Excellent" },
              { name: "Information Protection in Computer Systems", grade: "Excellent" },
              { name: "Software Engineering", grade: "Excellent" }
            ]
          },
          {
            year: 2,
            modules: [
              { name: "Interfaces and Communication Devices of the Automated Control Systems", grade: "Excellent" },
              { name: "Operations Research", grade: "Excellent" },
              { name: "Computer Graphics", grade: "Passed" },
              { name: "Computer Logic", grade: "Excellent" },
              { name: "Computer Aided Circuit Engineering", grade: "Excellent" },
              { name: "Computer Networks", grade: "Excellent" },
              { name: "Computer Systems", grade: "Excellent" },
              { name: "Cross-Platform Programming", grade: "Excellent" },
              { name: "Microprocessors and Microprocessor Systems", grade: "Excellent" },
              { name: "System Modeling", grade: "Excellent" }
            ]
          },
          {
            year: 3,
            modules: [
              { name: "Signal and Image Processing", grade: "Excellent" },
              { name: "Object-Oriented Programming and Modeling", grade: "Excellent" },
              { name: "Operating Systems", grade: "Excellent" },
              { name: "Database Organization", grade: "Excellent" },
              { name: "Fundamentals of the Theory of Automated Control", grade: "Excellent" },
              { name: "Parallel and Distributed Computing", grade: "Excellent" },
              { name: "Principles of Organizing Automated Control Systems", grade: "Excellent" },
              { name: "Programming", grade: "Excellent" },
              { name: "Mobile and Embedded Device Programming", grade: "Passed" },
              { name: "Development of Mobile and Embedded Specialized Systems", grade: "Excellent" }
            ]
          },
          {
            year: 4,
            modules: [
              { name: "Development of Application Solutions Based on Modern Platforms", grade: "Passed" },
              { name: "System Programming", grade: "Excellent" },
              { name: "System Software", grade: "Excellent" },
              { name: "System Analysis", grade: "Passed" },
              { name: "Database Management Systems", grade: "Excellent" },
              { name: "Theory of Probability and Mathematical Statistics", grade: "Excellent" },
              { name: "Probability Theory and Random Processes", grade: "Passed" },
              { name: "Information and Coding Theory", grade: "Passed" },
              { name: "Management and Decision-Making Theory", grade: "Passed" },
              { name: "Electronics", grade: "Passed" },
              { name: "Electrical Engineering", grade: "Excellent" }
            ]
          }
        ]
      }
    };

    const toggleDropdown = (key) => {
      dropdownOpen[key] = !dropdownOpen[key];
    };

    return {
      dropdownOpen,
      universities,
      toggleDropdown
    };
  }
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}


</style>
