import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue tests', () => {
    let wrapper1 = null
    let wrapper2 = null
    beforeEach(() => {
        wrapper1 = shallowMount(Counter)
        wrapper2 = shallowMount(Counter, {
          propsData: {
            count: 10
          }
        })
    })

    it('checks if counter has right name', () => {
      expect(wrapper1.vm.$options.name).toMatch('Counter')
    })
    it('checks if countNum defaults to 0 if no prop value given', () => {
      expect(wrapper1.vm.countNum).toEqual(0)
    })
    it('checks if given count prop is pass correctly', () => {
      expect(wrapper2.vm.countNum).toEqual(10)
    })
    it('checks if each countNum gets incremented with every button click', () => {
      wrapper1.find('button').trigger('click')
      wrapper2.find('button').trigger('click')
      expect(wrapper1.vm.countNum).toEqual(1)
      expect(wrapper2.vm.countNum).toEqual(11)
    })
  })