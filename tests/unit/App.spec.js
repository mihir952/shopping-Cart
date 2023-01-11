import {mount} from "@vue/test-utils";
import createStore from '@/store/index.js'
import App from '@/App.vue'
  describe('App.vue',()=>{
    test('Cart Component present in the document',async()=>{
      const wrapper = mount(App,{global:{plugins:[createStore]}})
      const comps = wrapper.getComponent({name: 'CartComp'})
      expect(comps).not.toBe(null)
    })
  })
  describe('App.vue',()=>{
    test('product Component present in the document',async()=>{
      const wrapper = mount(App,{global:{plugins:[createStore]}})
      const comps = wrapper.findComponent({name: 'ProductsVue'})
      expect(comps).not.toBe(null)
    })
  })
  describe('App.vue',()=>{
    test('add to cart button present in the Component',async()=>{
      const wrapper = mount(App,{global:{plugins:[createStore]}})
      const hello= wrapper.find('.button2').exists()
      expect(hello).toBe(true)
    })
  })
  describe('App.vue',()=>{
    test('add to cart button clicked',async()=>{
      const wrapper = mount(App,{global:{plugins:[createStore]}})
      await wrapper.find('.button2').trigger('click')
      const qty = wrapper.emitted()
      expect(qty).not.toBe(null)
    })
  })