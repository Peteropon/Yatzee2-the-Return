/* eslint-disable default-case */
import Vue from 'vue';
import Vuex from 'vuex';
// import die1 from './assets/Dice-1.png';
// import die2 from './assets/Dice-2.png';
// import die3 from './assets/Dice-3.png';
// import die4 from './assets/Dice-4.png';
// import die5 from './assets/Dice-5.png';
// import die6 from './assets/Dice-6.png';
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
    ones: 0,
    twos: 0,
    threes: 0,
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
        //   switch (number) {
        //     case 1: state.ones++;
        //       break;
        //     case 2: state.twos++;
        //       break;
        //     case 3: state.threes++;
        //       break;
        //     case 4: state.fours++;
        //       break;
        //     case 5: state.fives++;
        //       break;
        //     case 6: state.sixes++;
        //   }
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
  },
});
