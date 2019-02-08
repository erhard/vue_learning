<template>
<div :style="style">
    <!-- Render textfield component -->
    <div class="mdc-card mdc-typography ">
    aaaaaaaaa
        {{user}}
        {{password}}
        bbbbbb
        <h2 class="mdc-typography--headline2">Login</h2>
        <div class="mdc-text-field  username"   ref="userName" >
                <input type="text" class="mdc-text-field__input" 
                id="username-input" name="user"
                v-model="user" v-on:keyup="checkForm">
                <label class="mdc-floating-label" for="username-input">Username</label>
                <div class="mdc-line-ripple"></div>
            </div>
            <div class="mdc-text-field password" ref="pwd">
                <input type="password" class="mdc-text-field__input" 
                id="password-input" name="password"
                v-model="password" v-on:keyup="checkForm"
                >
                <label class="mdc-floating-label" for="password-input">Password</label>
                <div class="mdc-line-ripple"></div>
            </div>
        <div class="mdc-card__actions">
            <button class="mdc-button mdc-button--raised mdc-card__action--button" ref="sendButton"
                @click="my_login">
                <span class="mdc-button__label">login</span>
            </button>

        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
export default Vue.extend(  {
    data() {
        return {
            user: '',
            password: '',
            valid: false
        };
    },
    methods: {
        my_login() {
            this.$emit('clicked', {"data": "datafrom innerMost"});
        },
        
       checkForm(event) {
          console.log("Im checkForm");
          console.log(this.user);
          console.log(this.password);
          console.log(event.key);
        },
        



    },
    mounted() { 
        new MDCTextField(this.$refs.userName);
        new MDCTextField(this.$refs.pwd);
        new MDCRipple(this.$refs.sendButton); 
    },
    computed:{
        style() {
            let register = this.register;
            let backend = this.backend;
            return backend;
        }, 
    },
    props: {
        backend: String,
        register: String,
    },
});
</script>
<!-- Default behavior of this component -->
<!-- Only importing the css needed not more -->
<!-- The imports are treated by webpack >>>>>> the assets-Dir is preprocessed by webpack-->
<style >
@import '../assets/mdc.textfield.css';
@import '../assets/mdc.floating-label.css';
@import '../assets/mdc.line-ripple.css';
@import '../assets/mdc.button.css';
@import '../assets/mdc.card.css';
@import '../assets/mdc.typography.css';
.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mdc-floating-label-focused, black);
}
</style>

