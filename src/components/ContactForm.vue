<template>
  <div class="form-container ">
    <transition name="fade">
      <div v-if="submitted" class="mt-4">
        <p class="text-white">Thank you for your message, {{ form.from_name }}!</p>
      </div>
    </transition>
    <form @submit.prevent="submitForm">
      <div class="">
        <label for="name" class="">Name:</label>
        <input type="text" v-model="form.from_name" id="name" class="text-black text-xs" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="form.from_email" id="email" class="text-black text-xs" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea v-model="form.message" id="message" class="text-black" required></textarea>
      </div>
      <div class="button-container">
        <button type="submit" class="submit-button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      form: {
        from_name: '',
        from_email: '',
        message: ''
      },
      submitted: false
    };
  },
  mounted() {
    emailjs.init('R7v4tipcxuNKS1VKy');
  },
  methods: {
    submitForm() {
      const serviceID = 'service_jx7wmbu';
      const templateID = 'template_g1n1tgn';

      emailjs.send(serviceID, templateID, this.form)
        .then(() => {
          this.submitted = true;
          console.log('SUCCESS!');
          this.form.from_name = '';
          this.form.from_email = '';
          this.form.message = '';

          setTimeout(() => {
            this.submitted = false;
          }, 3000);
        }, (error) => {
          console.error('FAILED...', error);
        });
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
}
div {
  margin-bottom: 1em;
}
label {
  display: block;
  margin-bottom: 0.5em;
}
input, textarea {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}
.button-container {
  display: flex;
  justify-content: center;
}
.submit-button {
  padding: 0.5em 1em;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
.submit-button:hover {
  background-color: #38a169;
}

/* Transition classes for fading */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>
