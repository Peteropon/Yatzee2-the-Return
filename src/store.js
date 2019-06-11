import Vue from 'vue';
import Vuex from 'vuex';
import die1 from './assets/Dice-1.png';
import die2 from './assets/Dice-2.png';
import die3 from './assets/Dice-3.png';
import die4 from './assets/Dice-4.png';
import die5 from './assets/Dice-5.png';
import die6 from './assets/Dice-6.png';

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
        img: die2,
      },
      {
        value: 3,
        img: die3,
      },
      {
        value: 4,
        img: die4,
      },
      {
        value: 5,
        img: die5,
      },
      {
        value: 6,
        img: die6,
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
});
