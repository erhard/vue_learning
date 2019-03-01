import Vue from 'vue';
import { shallowMount,mount } from '@vue/test-utils';
import Login from '../Login.vue';

describe('login.vue', () => { // #A
    test('sanity test', () => {
        expect(true).toBe(true);
    });
});

describe('Login.vue', () => {
    
    
    
    it('renders the login component', () => {
        let wrapper = shallowMount(Login,
        mocks: {
        
        
        },
        );
        
        
        
        expect(wrapper.text()).toContain('Login');
          });


});

