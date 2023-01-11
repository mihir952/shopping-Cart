import {mount} from "@vue/test-utils";
import ProductsVue from '@/components/ProductsVue.vue';
 describe('ProductsVue.vue',()=>{
  test('Clothes size present',async()=>{
    const name = {
      name : 'ClothesSize'
    }
    const wrapper = mount(ProductsVue)
    const greet = wrapper.getComponent({name: 'ClothesSize'})
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