<template>
  <div class="mx-auto sm:pt-10 pt-8 sm:pr-0 pr-4">
    <div class="sm:text-5xl text-3xl text-white font-bold mb-8">Experience</div>
    
    <!-- Experience Details -->
    <div class="experience-details mb-10">
      <div v-for="(item, index) in experience" :key="index" class="experience-section mb-4">
        <div class="experience-header bg-gray-800 p-3 rounded-xl text-white text-3xl font-bold border border-white">
          {{ item.title }} – {{ item.company }} | {{ item.dates }}
        </div>
        <div class="tasks-list bg-gray-900 p-3 rounded-md mt-2">
          <ul class="list-disc list-inside text-white">
            <li v-for="(task, idx) in item.tasks" :key="idx" class="task-item py-1">
              {{ task }}
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
      experience: [
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
      ]
    };
  }
};
</script>

<style scoped>
.experience-details {
  max-height: calc(100vh);
  overflow-y: auto;
}

.experience-section {
  margin-bottom: 16px;
}

.experience-header {
  background-color: #333;
  color: white;
  font-size: 1.875rem; 
  padding: 1rem;
  border-radius: 0.75rem;
  border: 2px solid white;
}

.tasks-list {
  background-color: #222; 
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
}

.task-item {
  margin-bottom: 0.5rem;
}
</style>
