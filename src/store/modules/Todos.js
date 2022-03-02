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

    /**
     * delete post by request id
     * @param {state} state
     * @param {number} removeId
     */
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

    /**
     * delete todo by request id
     * @param {context} context
     * @param {number} removeId
     */
    async deleteTodo(context, removeId) {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${removeId}`
      );
      context.commit("deleteTodo", removeId);
    },

    /**
     * get todo list by filter request number
     * @param {context} context
     * @param {number} limit
     */
    async filterTodos(context, limit) {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      );
      context.commit("setTodos", response.data);
    },
  },
};
