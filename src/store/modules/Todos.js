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

    /**
     * add new todo object to todo array
     * @param {State} state
     * @param {object} newTodo
     */
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },

    deleteTodo(state, removeId) {
      state.todos = state.todos.filter((t) => {
        return t.id != removeId;
      });
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

    /**
     * adding new todo post
     * @param {object} context
     * @param {object} newTodo
     */
    async addTodo(context, newTodo) {
      let response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        newTodo
      );

      context.commit("addTodo", response.data);
    },

    async deleteTodo(context, removeId) {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${removeId}`
      );
      context.commit("deleteTodo", removeId);
    },
  },
};
