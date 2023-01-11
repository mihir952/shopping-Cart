import {mount} from "@vue/test-utils";
import ProductsVue from '@/components/ProductsVue.vue';
import HeaderOne from '@/components/HeaderOne.vue'
import createStore from '@/store/index.js'
import App from '@/App.vue'
// import App from '@/App.vue'
 describe('ProductsVue.vue',()=>{
  test('Clothes size present',async()=>{
    const name = {
      name : 'ClothesSize'
    }
    const wrapper = mount(ProductsVue)
    const greet = wrapper.getComponent({name: 'ClothesSize'})
    // expect(greet.find('div').exists()).toBeTruthy()
    expect(greet.text()).toContain('Sizes :XSSMMLLXLXXLX')
  })
})
 describe('ProductsVue.vue',()=>{
  test('filtering of products',async()=>{
    const name = {
      name : 'ClothesSize'
    }
    const wrapper = mount(ProductsVue)
    const greet = wrapper.getComponent({name: 'ClothesSize'})
    await greet.find('input').trigger('click')
        const fil = greet.emitted().sizes.flat(1)
    expect(fil[0]).toBe('XS')
  })
})
  // describe('ProductsVue.vue',()=>{
  // test('add to cart clicked',async()=>{
  //   const wrapper = mount(ProductsVue);
  //   await wrapper.find('button').trigger('mouseup')
  //     // const clicked = wrapper.emitted()
  //   // wrapper.get('.button1').trigger('click')
  //   // await wrapper.get('input').trigger('click')
  //   const qty = wrapper.emitted().qty.flat(1)
  //   expect(qty[0]).toBe(1)
  // // expect(wrapper.findAll('button')).toBeTruthy()
  //   })
  // });
  describe('HeaderOne.vue',()=>{
    test('Checkout button exists',async()=>{
      const wrapper = mount(HeaderOne,{global:{plugins:[createStore]}})
      // const greet = wrapper.getComponent({name: 'ClothesSize'})
      const divs = wrapper.find('.w-100').exists()
      expect(divs).toBeTruthy()
    })
  })
  describe('HeaderOne.vue',()=>{
    test('click of checkout',async()=>{
      const wrapper = mount(HeaderOne,{global:{plugins:[createStore]}})
      // const greet = wrapper.getComponent({name: 'ClothesSize'})
      await wrapper.find('button').trigger('click')
      const locale = JSON.parse(localStorage.getItem("qnty"))
      // const persist = wrapper.emitted()
      expect(locale).toBe(null)
      // expect(wrapper.vm.number1).toBe(2)
    })
  })
  describe('App.vue',()=>{
    test('Cart Component present in the document',async()=>{
      const wrapper = mount(App,{global:{plugins:[createStore]}})
      const comps = wrapper.getComponent({name: 'HeaderOne'})
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
      // const comps = wrapper.getComponent({name: 'HeaderOne'})
      const hello= wrapper.find('.button2').exists()
      // const hello = comps.emitted()
      expect(hello).toBe(true)
    })
  })
  describe('App.vue',()=>{
    test('add to cart button clicked',async()=>{
      const wrapper = mount(App,{global:{plugins:[createStore]}})
      // const comps = wrapper.getComponent({name: 'HeaderOne'})
      await wrapper.find('.button2').trigger('click')
      const qty = wrapper.emitted()
      expect(qty).not.toBe(null)
      // expect(hello).toBe(true)
    })
  })