<template>



<div :style="style">
    <!-- Render textfield component -->
    <div class="  
       mdc-theme--primary-bg mdc-theme--on-primary" 
       >
        <div class="mdc-text-field    
            username"   ref="userName" >
            <input type="text" class="mdc-text-field__input" id="username-input" name="username">
            <label class="mdc-floating-label" for="username-input">Username</label>
            <div class="mdc-line-ripple"></div>
        </div>
        <div class="mdc-text-field password" ref="pwd">
            <input type="password" class="mdc-text-field__input" id="password-input" name="password">
            <label class="mdc-floating-label" for="password-input">Password</label>
            <div class="mdc-line-ripple"></div>
                </div>
                <button class="mdc-button mdc-button--outlined " ref="sendButton">
                    <span class="mdc-button__label">login</span>
        </button>
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
            email: '',
            password: '',
        };
    },
    methods: {
        my_login() {
            this.$emit('clicked', {"data": "datafrom innerMost"});
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

.mdc-theme--primary-bg {
    background-color: var(--mdc-theme-on-secondary);
}
@import '../assets/mdc.textfield.css';
@import '../assets/mdc.floating-label.css';
@import '../assets/mdc.line-ripple.css';
@import '../assets/mdc.button.css';
</style>

