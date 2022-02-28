import axios from "axios";
export default {
  state: {
    todos: [],
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    /**
     * set todo data from actions
     * @param {state} state
     * @param {array} todos
     * state = destruct for state variable
     */
    setTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    /**
     * get todo data from json placeholder
     * @param {function} commit
     * commit = destruction for commit to mutation with value
     */
    async getTodos({ commit }) {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      let data = res.data;
      commit("setTodos", data);
    },
  },
};
