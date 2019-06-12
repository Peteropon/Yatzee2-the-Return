import Vue from 'vue';
import Vuex from 'vuex';
import die1 from './assets/Dice-1.png';
import die2 from './assets/Dice-2.png';
import die3 from './assets/Dice-3.png';
import die4 from './assets/Dice-4.png';
import die5 from './assets/Dice-5.png';
import die6 from './assets/Dice-6.png';
import letterA from './assets/letterA.png';
import letterY from './assets/letterY.png';
import letterT from './assets/letterT.png';
import letterZ from './assets/letterZ.png';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dice: [
      {
        value: 0,
        img: letterY,
      },
      {
        value: 0,
        img: letterA,
      },
      {
        value: 0,
        img: letterT,
      },
      {
        value: 0,
        img: letterZ,
      },
      {
        value: 0,
        img: letterY,
      },
    ],
  },
  getters: {
    getDie: state => state.dice,
  },
  mutations: {
    rollDice(state) {
      state.dice.forEach((die) => {
        const number = Math.floor(Math.random() * 6) + 1;
        die.value = number;
        die.img = require(`@/assets/Dice-${  number  }.png`);
      });
    },
  },
  actions: {
    rollDice({ commit }) {
      commit('rollDice');
    },
  },
});
