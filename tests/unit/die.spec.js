import { shallowMount } from '@vue/test-utils';
import Die from '@/components/Die.vue';

describe('Die', () => {
  const wrapper = shallowMount(Die, {
    propsData: {
      die: 'bla',
    },
  });

  it('emits an event when an image is clicked', () => {
    wrapper.vm.$emit('dieClicked');
    wrapper.find('div').trigger('click');
    expect(wrapper.emitted('dieClicked')).toBeTruthy();
  });

  it('renders an image', () => {
    expect(wrapper.contains('img')).toBe(true);
  });
});
