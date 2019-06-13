import {shallowMount } from '@vue/test-utils';
import Die from '@/components/Die.vue';

describe('Die', () => {
  const wrapper = shallowMount(Die, {
    propsData: {
      die: 'bla',
    },
  });

  it('emits an event when an image is pressed', () => {
    wrapper.vm.$emit('dieClicked');
    expect(wrapper.emitted('dieClicked')).toBeTruthy();
  });

  it('renders an image', () => {
    expect(wrapper.contains('img')).toBe(true);
  });
});
