const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue",
      courseGoalB: "Master the course and build amazing apps",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const rand = Math.random();
      return rand < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
