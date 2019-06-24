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
    onePairSum: 0,
    onePairFinal: 0,
    onePairValidator: false,
    twoPairSum: 0,
    twoPairValidator: false,
  },
  getters: {
    getDie: state => state.dice,
    getUpperSum: state => state.upperSum,
  },
  mutations: {
    rollDice(state) {
      this.commit('clearNumberCounters');
      let sortedDice = [];
      state.dice.forEach((die) => {
        if (!die.selected) {
          const number = Math.floor(Math.random() * 6) + 1;
          die.value = number;
          die.img = require(`@/assets/Dice-${number}.png`);
          // sortedDice.push(die.value);
        }
      });
      state.dice.forEach(die => sortedDice.push(die.value));
      sortedDice.sort((a, b) => a - b);
      console.log(sortedDice);
      this.commit('countNumbers');
      this.commit('pairValidation', sortedDice);
    },
    twoPairsValidation(state, sortedDice) {
      for (let i = 0; i < sortedDice.length - 2; i++) {
        if (sortedDice[i] === sortedDice[i + 1]) {
          if (sortedDice[i + 2] === sortedDice[i + 3]
              || sortedDice[i + 3] === sortedDice[i + 4]) console.log('two pairs');
        }
      }

    },
    pairValidation(state, sortedDice) {
      let tempArray = [];
      for (let i = 0; i < sortedDice.length - 1; i++) {
        if (sortedDice[i] === sortedDice[i + 1]) {
          tempArray.push(sortedDice[i + 1]);
          state.onePairSum = sortedDice[i] * 2;
          state.onePairValidator = true;
        }
      }
      console.log(tempArray);
      if (tempArray.length === 2 && tempArray[0] !== tempArray[1]) {
        state.twoPairSum = (tempArray[0] * 2) + (tempArray[1] * 2);
        state.twoPairValidator = true;
        console.log(`two pairs ${state.twoPairSum}`);
      }
      else if (tempArray.length === 3 && (tempArray[0] !== tempArray[2])) console.log('two pairs and full house');
      else if (tempArray.length === 3) console.log('two pairs and four in a row');
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
      state.twoPairValidator = false;
      state.twoPairSum = 0;
      state.onePairSum = 0;
      state.onePairValidator = false;
    },
    registerPoints(state) {
      state.dice.forEach((die) => {
        if (die.selected) {
          state.totalSum += die.value;
          state.upperSum += die.value;
          die.selected = false;
        }
      });
    },
    registerOnePair(state) {
      state.onePairFinal = state.onePairSum;
      state.totalSum += state.onePairFinal;
      state.dice.forEach((die) => { die.selected = false; });
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
