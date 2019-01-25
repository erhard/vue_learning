<template>
<v-app>
    <v-toolbar>
        <v-toolbar-title>
            Login
        </v-toolbar-title>
    </v-toolbar>
    <div class="container text-xs-center">
    <form @keyup.enter="my_login()">
        <v-text-field v-model='email' label='E-mail'>
        </v-text-field>
        <v-text-field v-model='password' label='Password' type="password">
        </v-text-field>
    </form>
    <v-btn @click="my_login()">
        Login
    </v-btn>
    </div>
</v-app>
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
        this.$emit('logged in', {})
        console.log('say Hello');
       },
    },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>





</style>
