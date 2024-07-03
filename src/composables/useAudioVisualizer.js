
import { ref, onMounted } from 'vue';
import music1 from '@/assets/music1.mp3';
import music2 from '@/assets/music2.mp3';
import music3 from '@/assets/music3.mp3';

const musics = [music1, music2, music3];



export function useAudioVisualizer() {
  const audioElement = ref(null);
  const canvas = ref(null);
  const barWidth = 5;
  const barSpacing = 5;
  const maxBarHeight = 300;
  const canvasWidth = 2500;
  const canvasHeight = 500;
  let source = ref(null);

  const init = () => {
    let music = Math.floor(Math.random() * 3) + 1;
    console.log();
    audioElement.value.src = musics[music-1];

  }

  const startAudio = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    source = audioContext.createMediaElementSource(audioElement.value);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 1024;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const ctx = canvas.value.getContext('2d');

    const updateChart = () => {
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const barCount = Math.floor(canvasWidth / (barWidth + barSpacing));

      for (let i = 0; i < barCount; i++) {
        const barHeight = (dataArray[i] / 255) * maxBarHeight;
        const x = i * (barWidth + barSpacing);
        const y = canvasHeight - barHeight;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(x, y, barWidth, barHeight);
      }

      requestAnimationFrame(updateChart);
    };

    audioElement.value.play();
    updateChart();

  };

  return { audioElement, canvas, startAudio, canvasWidth, canvasHeight, source, init };
}
