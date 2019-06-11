import Vue from 'vue';
import Vuex from 'vuex';
import die1 from './assets/Dice-1.png';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dice: [
      {
        value: 1,
        img: die1,
      },
      {
        value: 2,
        img: "require('./assets/Dice-2.png')",
      },
      {
        value: 3,
        img: './ass',
      },
      {
        value: 4,
        img: './ass',
      },
      {
        value: 5,
        img: './ass',
      },
      {
        value: 6,
        img: './ass',
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
});
