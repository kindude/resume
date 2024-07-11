<script setup>
import { ref, onMounted } from 'vue';
import { useAudioVisualizer } from '/src/composables/useAudioVisualizer.js';
import meImage from '@/assets/me_image.jpg';

const { audioElement, canvas, startAudio, canvasWidth, canvasHeight, source, init } = useAudioVisualizer();

onMounted(() => {
  const handleStartAudio = () => {
    if (audioElement.value.src){
      audioElement.value.play();
    } else {
      init();
      startAudio(true);
    }
  };

  const handleDeleteAudio = () => {
    audioElement.value.pause();
  }

  window.addEventListener('startAudio', handleStartAudio);
  window.addEventListener('stopAudio', handleDeleteAudio);

  return () => {
    window.removeEventListener('startAudio', handleStartAudio);
  };
});
</script>

<template>
  <main class="main-container grid sm:grid-cols-2 grid-cols-1 flex-col sm:items-center items-start justify-between sm:grid-cols-[1.5fr_5fr] sm:grid-rows-1 grid-rows-[0.3fr_3fr] h-full">
    <div class="image-container sm:col-start-1 sm:mb-[40%] mt-10">
      <img :src="meImage" alt="meImage" class="image sm:w-[180px] sm:h-[180px] md:w-[350px] md:h-[350px] rounded-2xl">
    </div>
    <div class="about_me sm:col-start-2 justify-start text-start sm:px-6 md:px-12">
      <h1 class="text-white sm:text-5xl text-3xl mb-3">Hi, my name is Yehor Dudnik</h1>
      <p class="text-white pb-20 sm:text-2xl text-justify hyphens-auto">
        I am a highly motivated and technically proficient Computing Science graduate with a robust background in full-stack web development. My expertise spans both front-end and back-end technologies, with particular strengths in Python, React, Java, and Android application development. My hands-on experience includes Agile methodologies, requirements capture, and project lifecycle management.

        I excel in enhancing user experiences and developing scalable, modular architectures. My collaborative approach with stakeholders ensures thorough testing and debugging, and I am dedicated to maintaining high-performance APIs. With excellent communication skills and a strong understanding of programming concepts, I am eager to contribute to innovative projects, particularly in the field of public safety technology.

        I am open to remote opportunities and committed to continuous learning and career development, always seeking to stay at the forefront of technological advancements.
      </p>    
    </div>
    <div class="audio-visualizer-container sm:col-span-2 sm:col-start-1 hidden sm:flex flex-col items-center justify-end ">
      <audio ref="audioElement" controls style="display: none;"></audio>
      <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight" class="w-full"></canvas>
    </div>
  </main>
</template>

<style scoped>
.audio-visualizer-container {
  position: absolute;
  bottom: 0;
}

.main-container {
  position: relative;
}

.image-container {
  margin-bottom: 20px; /* Adjust as needed for spacing */
}

.image {
  display: block;
  margin: 0 auto;
}

.about_me {
  margin-top: 20px; /* Adjust as needed for spacing */
}

@media (min-width: 768px) and (max-width: 1024px) {
  .about_me {
    padding-left: 10px; /* Add padding for medium devices */
    padding-right: 10px; /* Add padding for medium devices */
  }
}
</style>
