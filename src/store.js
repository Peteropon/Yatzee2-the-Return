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
        value: 0,
        img: '',
      },
      {
        value: 0,
        img: '',
      },
      {
        value: 0,
        img: '',
      },
      {
        value: 0,
        img: '',
      },
      {
        value: 0,
        img: '',
      },
    ],
  },
  getters: {
    getDie: state => state.dice,
  },
  mutations: {

  },
  actions: {

  },
});
