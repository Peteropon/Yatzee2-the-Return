/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable default-case */
import Vue from 'vue';
import Vuex from 'vuex';
import letterA from './assets/letterA.png';
import letterY from './assets/letterY.png';
import letterT from './assets/letterT.png';
import letterZ from './assets/letterZ.png';
import { stat } from 'fs';

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
    twoPairFinal: 0,
    twoPairValidator: false,
    threeKindSum: 0,
    threeKind: false,
    threeKindFinal: 0,
    fourKindSum: 0,
    fourKind: false,
    fourKindFinal: 0,
    fullHouse: false,
    fullHouseSum: 0,
    fullHouseFinal: 0,
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
        }
      });
      state.dice.forEach(die => sortedDice.push(die.value));
      sortedDice.sort((a, b) => a - b);
      console.log(sortedDice);
      this.commit('countNumbers');
      this.commit('pairValidation', sortedDice);
    },
    // twoPairsValidation(state, sortedDice) {
    //   for (let i = 0; i < sortedDice.length - 2; i++) {
    //     if (sortedDice[i] === sortedDice[i + 1]) {
    //       if (sortedDice[i + 2] === sortedDice[i + 3]
    //           || sortedDice[i + 3] === sortedDice[i + 4]) console.log('two pairs');
    //     }
    //   }
    // },
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
        this.commit('confirmTwoPairs', tempArray);
      } else if (tempArray.length === 2 && tempArray[0] === tempArray[1]) {
        this.commit('confirmThreeKind', tempArray);
      } else if (tempArray.length === 3 && (tempArray[0] !== tempArray[2])) {
        this.commit('confirmThreeKind', tempArray);
        this.commit('confirmFullHouse', tempArray);
      } else if (tempArray.length === 3) {
        this.commit('confirmThreeKind', tempArray);
        this.commit('confirmFourKind', tempArray);
      }
    },
    confirmFullHouse(state, payload) {
      state.fullHouse = true;
      if (payload[1] < payload[2]) {
        state.fullHouseSum = payload[0] * 3 + payload[2] * 2;
      } else if (payload[1] === payload[2]) {
        state.fullHouseSum = payload[0] * 2 + payload[2] * 3;
      }
      // state.fullHouseSum = payload.reduce((num, total) => total + num);
      console.log('full house');
    },
    confirmTwoPairs(state, payload) {
      state.twoPairSum = (payload[0] * 2) + (payload[1] * 2);
      state.twoPairValidator = true;
      console.log(`two pairs ${state.twoPairSum}`);
    },
    confirmThreeKind(state, payload) {
      state.threeKind = true;
      state.threeKindSum = payload[0] * 3;
      console.log('3 of a kind');
    },
    confirmFourKind(state, payload) {
      state.fourKind = true;
      state.fourKindSum = payload[0] * 4;
      console.log('four of a kind');
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
      state.threeKind = false;
      state.threeKindSum = 0;
      state.fourKind = false;
      state.fourKindSum = 0;
      state.fullHouse = false;
      state.fullHouseSum = 0;
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
    registerTwoPair(state) {
      state.twoPairFinal = state.twoPairSum;
      state.totalSum += state.twoPairFinal;
      state.dice.forEach((die) => { die.selected = false; });
    },
    registerThreeKind(state) {
      state.threeKindFinal = state.threeKindSum;
      state.totalSum += state.threeKindFinal;
      state.dice.forEach((die) => { die.selected = false; });
    },
    registerFourKind(state) {
      state.fourKindFinal = state.fourKindSum;
      state.totalSum += state.fourKindFinal;
      state.dice.forEach((die) => { die.selected = false; });
    },
    registerFullHouse(state) {
      state.fullHouseFinal = state.fullHouseSum;
      state.totalSum += state.fullHouseFinal;
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
