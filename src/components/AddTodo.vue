<template>
   <b-input-group class="mt-3">
    <input 
        type="text" 
        class="form-control"
        v-model="newTodo.title" />
    <div class="input-group-append">
        <button 
            class="btn btn-primary"
            @click="addTodo(newTodo)">add todo</button>
    </div>
  </b-input-group>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            newTodo:{
                title: "",
            }
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
    },
}
</script>

<style>

</style>