
<template>
  <div class="mx-auto sm:pt-10 pt-8 sm:pr-0 pr-4">
    <div class="sm:text-5xl text-3xl text-white font-bold mb-8">Education</div>

    <!-- Switch Button for Tabs -->
    <div class="switch-container mb-8 lg:w-[600px] w-[200px] lg:h-[100px] h-[50px]">
      <button
        :class="{ active: isUWS }"
        @click="isUWS = true"
        class="flex justify-center items-center w-full h-full"
      >
        <span class="lg:inline hidden">University of West of Scotland</span>
        <span class="lg:hidden">UWS</span>
      </button>
      <button
        :class="{ active: !isUWS }"
        @click="isUWS = false"
        class="flex justify-center items-center w-full h-full"
      >
        <span class="lg:inline hidden">Donetsk Technical University</span>
        <span class="lg:hidden">DTU</span>
      </button>
    </div>

    <!-- University Details -->
    <div class="university-details mt-5 mb-10">
      <div v-for="year in universities[isUWS ? 'uws' : 'dtu'].years" :key="year.year" class="year-section mb-4">
        <div class="year-header bg-gray-800 p-3 rounded-xl text-white text-3xl font-bold border border-white">
          Year {{ year.year }}
        </div>
        <div class="modules-list bg-gray-900 p-3 rounded-md mt-2">
          <ul class="list-none text-white">
            <li v-for="module in year.modules" :key="module.name" class="module-item py-1">
              <span class="module-name">{{ module.name }}</span>
              <span class="module-grade float-right">{{ module.grade }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUWS: true,
      universities: {
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
      }
    };
  }
};
</script>

<style scoped>
.switch-container {
  display: flex;
  background-color: #333;
  padding: 5px;
  border-radius: 25px;
  margin: 0 auto;
}

.switch-container button {
  flex: 1;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  background-color: #555;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.switch-container button.active {
  background-color: #fff;
  color: black;
}

.university-details {
  max-height: calc(100vh - 200px); /* Adjust based on footer height */
  overflow-y: auto;
}

.year-section {
  margin-bottom: 16px;
}

.year-header {
  background-color: #333; /* Dark background color */
  color: white;
  font-size: 1.875rem; /* Equivalent to 3xl in Tailwind */
  padding: 1rem;
  border-radius: 0.75rem;
  border: 2px solid white;
}

.modules-list {
  background-color: #222; /* Slightly darker background for module list */
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
}

.module-item {
  display: flex;
  justify-content: space-between;
}

.module-name {
  flex: 1;
}

.module-grade {
  flex: 0 0 auto;
  margin-left: 1rem;
}
</style>
