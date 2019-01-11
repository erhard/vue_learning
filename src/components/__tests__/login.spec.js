import { shallowMount } from '@vue/test-utils' 
import Login from '../Login.vue'

describe('login.vue', () => { // #A
    test('sanity test', () => {
        expect(true).toBe(true)
            })
        })

 
describe('Login.vue', () => {
      test('renders the login component', () => {
            const wrapper = shallowMount(Login)
            debugger
            expect(wrapper.text()).toContain('Login')
          })  
})

