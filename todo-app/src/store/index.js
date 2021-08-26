import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    todos: [
      {
        icon: "user",
        name: "Personal",
        tasks: [],
        colors: ["#ff6262", "#ffa947"],
      },
      {
        icon: "suitcase",
        name: "Work",
        tasks: [],
        colors: ["#5b9df9", "#47bfff"],
      },
      {
        icon: "home",
        name: "Home",
        tasks: [],
        colors: ["#2c7d59", "#3ba776"],
      },
    ],

    selected: null,
    unselect: null,
    editing: null,
  },
  mutations: {},
  actions: {},
  modules: {},
});
