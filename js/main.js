const { createApp } = Vue

createApp({
    data() {
      return {
      message: "Il mio messaggio",
      immage: "https://picsum.photos/seed/picsum/400/400"
    };
    }
  }).mount('#app')

