const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const rand = Math.random();
      return rand < 0.5 ? "Learn Vue" : "Master Vue";
    },
  },
});

app.mount("#user-goal");
