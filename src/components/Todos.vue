<template>
  <div>
    <h1 class="text-primary">All Todos</h1>
    <div class="container">
        <div class="row">
            <div 
                class="col-md-4 my-4"
                v-for="todo in myTodos"
                :key="todo.id">
                <b-card bg-variant="primary" text-variant="white" header="primary" class="text-center">
                    <b-card-text>
                        {{todo.title}}
                    </b-card-text>
                </b-card>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    mounted(){
        console.log(this.myTodos);
        this.getTodos();
    },
    computed:{
        // destructing vuex getter function
        ...mapGetters(["myTodos"])
    },
    methods:{
        // destructing vuex actions methods
        ...mapActions(['getTodos'])
    }
}
</script>

<style>

</style>