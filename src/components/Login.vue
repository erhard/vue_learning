<template>




<div >
    <section :style="style" class="test"  >
        <p> The button below should be a fab-add-button of material design
        </p>
   </section>

<button class="mdl-button mdl-button--fab mdl-button--colored">
    <i class="material-icons">add</i>
    </button>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend(  {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        my_login() {
            this.$emit('clicked', {"data": "datafrom innerMost"});
        },
    },

    computed:{
        style() {
        let color = JSON.parse(this.colorscheme);
        let register = this.register;
        let backend = this.backend;
        return "background: " + color['background'];
        }, 
    },
    props: {
        colorscheme: {type: String,require: false},
        backend: String,
        register: String,
        },
});
</script>
<!-- Default behavior of this component -->
<style>
@import '/public/material.css';


.test {
   background: green;
}

</style>
