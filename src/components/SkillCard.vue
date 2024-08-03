<template>
  <div class="skill-card">
    <svg viewBox="0 0 36 36" class="circular-chart">
      <path
        class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        class="circle"
        :style="{ strokeDasharray: strokeValue }"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      
      <text x="18" y="18" class="skill-name">{{ skillName }}</text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    skillName: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      strokeValue: '0, 100', 
    };
  },
  mounted() {
    setTimeout(() => {
      this.strokeValue = `${(this.percentage / 100) * 100}, 100`;
    }, 100); 
  },
};
</script>

<style scoped>
.skill-card {
  text-align: center;
  margin: 20px;
}

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  stroke: red;
  transition: stroke-dasharray 3s ease; 
}

.skill-name {
  fill: #9c9898;
  font-family: sans-serif;
  font-size: 0.3em; 
  text-anchor: middle;
  dominant-baseline: middle;
}
</style>
