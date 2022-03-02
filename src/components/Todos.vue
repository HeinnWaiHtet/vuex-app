<template>
  <div>
    <h1 class="text-primary">All Todos</h1>
    <div class="container">
        <div class="row">
            <AddTodo></AddTodo>
            <FilterTodo></FilterTodo>
        </div>
        <div class="row">
            <div 
                class="col-md-4 my-4"
                v-for="todo in myTodos"
                :key="todo.id">
                <b-card
                 :bg-variant="dynamicBackground(todo)"
                 @dblclick="changeComplete(todo)"
                  text-variant="white">
                    <b-card-text class="d-flex justify-content-between">
                        <span>
                            {{todo.title}}
                        </span>
                        <span @click="deleteTodo(todo.id)">
                            <b-icon icon="trash-fill" variant="danger"></b-icon>
                        </span>
                    </b-card-text>
                </b-card>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import FilterTodo from './FilterTodo'
import AddTodo from './AddTodo'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    FilterTodo, AddTodo },
    mounted(){
        this.getTodos();
    },
    computed:{
        // destructing vuex getter function
        ...mapGetters(["myTodos"])
    },
    methods:{
        /**
         * add dynamic background color by complete state
         * @param {object} todo
         */
        dynamicBackground(todo){
            return todo.completed ? 'success' : 'primary';
        },

        changeComplete(todo){
            todo.completed = !todo.completed;
            this.updateTodo(todo);
        },

        // destructing vuex actions methods
        ...mapActions(['getTodos', 'deleteTodo', 'updateTodo'])
    }
}
</script>

<style>

</style>