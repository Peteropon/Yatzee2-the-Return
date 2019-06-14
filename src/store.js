/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable default-case */
import Vue from 'vue';
import Vuex from 'vuex';
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
        selected: false,
      },
      {
        value: 0,
        img: letterA,
        selected: false,
      },
      {
        value: 0,
        img: letterT,
        selected: false,
      },
      {
        value: 0,
        img: letterZ,
        selected: false,
      },
      {
        value: 0,
        img: letterY,
        selected: false,
      },
    ],
    tempSum: 0, // the temporary sum of all dice values
    upperSum: 0,
    totalSum: 0,
    ones: 0,
    twos: 0,
    threes: 0,
    threesSum: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
  },
  getters: {
    getDie: state => state.dice,
  },
  mutations: {
    rollDice(state) {
      this.commit('clearNumberCounters');
      state.dice.forEach((die) => {
        if (!die.selected) {
          const number = Math.floor(Math.random() * 6) + 1;
          die.value = number;
          die.img = require(`@/assets/Dice-${number}.png`);
        }
      });
      this.commit('countNumbers');
    },
    toggleSelectedDie(state, payload) {
      if (state.dice[payload].selected) state.dice[payload].selected = false;
      else state.dice[payload].selected = true;
    },
    countNumbers(state) {
      state.dice.forEach((die) => {
        switch (die.value) {
          case 1: state.ones++;
            break;
          case 2: state.twos++;
            break;
          case 3: state.threes++;
            break;
          case 4: state.fours++;
            break;
          case 5: state.fives++;
            break;
          case 6: state.sixes++;
        }
      });
    },
    clearNumberCounters(state) {
      state.ones = 0;
      state.twos = 0;
      state.threes = 0;
      state.fours = 0;
      state.fives = 0;
      state.sixes = 0;
    },
    registerPoints(state) {
      state.dice.forEach((die) => {
        if (die.selected) {
          state.totalSum += die.value;
        }
      });
    },
  },
  actions: {
    rollDice({ commit }) {
      commit('rollDice');
    },
    toggleSelectedDie({ commit }, index) {
      commit('toggleSelectedDie', index);
    },
    countNumbers({ commit }, value) {
      commit('countNumbers', value);
    },
    registerPoints({ commit }) {
      commit('registerPoints');
    },
  },
});
