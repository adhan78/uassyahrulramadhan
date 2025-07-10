
import { mount } from '@vue/test-utils'
import OrderView from '../src/views/OrderView.vue'

test('renders form and submits order', () => {
  const wrapper = mount(OrderView)
  wrapper.find('input').setValue('Syahrul')
  wrapper.find('button').trigger('click')
})
