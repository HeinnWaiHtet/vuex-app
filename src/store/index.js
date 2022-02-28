import Vuex from "vuex";
import Vue from "vue";
import Todos from "./modules/Todos";

Vue.use(Vuex);

/**
 * create vuex store
 */
export default new Vuex.Store({
  modules: { Todos },
});
