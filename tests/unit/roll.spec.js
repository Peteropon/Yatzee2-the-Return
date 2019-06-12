import { shallowMount, createLocalVue } from '@vue/test-utils';
import Roll from '@/components/Roll.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Roll', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      rollDice: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('contains a button', () => {
      const wrapper = shallowMount(Roll);
      expect(wrapper.contains('button')).toBe(true);
  });

  it('calls the rollDice action correctly', () => {
    const wrapper = shallowMount(Roll, { localVue, store });
    wrapper.find('button').trigger('click');
    expect(actions.rollDice).toHaveBeenCalled();
  });
});
