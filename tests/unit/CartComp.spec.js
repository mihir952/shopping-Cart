import {mount} from "@vue/test-utils";
import CartComp from '@/components/CartComp.vue'
import createStore from '@/store/index.js'
  describe('CartComp.vue',()=>{
    test('Checkout button exists',async()=>{
      const wrapper = mount(CartComp,{global:{plugins:[createStore]}})
      const divs = wrapper.find('.w-100').exists()
      expect(divs).toBeTruthy()
    })
  })
  describe('CartComp.vue',()=>{
    test('click of checkout',async()=>{
      const wrapper = mount(CartComp,{global:{plugins:[createStore]}})
      await wrapper.find('button').trigger('click')
      const locale = JSON.parse(localStorage.getItem("qnty"))
      expect(locale).toBe(null)
    })
  })