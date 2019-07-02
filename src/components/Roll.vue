<template>
<div class="flex-cont">
    <button @click="rollDice">Roll dice</button>
    <roll-count class="roll-count" :counter="counter"></roll-count>
</div>
</template>

<script>
import RollCount from './RollCount';
export default {
  name: 'Roll',
  components: {
      RollCount,
  },
  computed: {
      counter() {
          return this.$store.state.counter;
      }
  },
  methods: {
    rollDice() {
      if(this.counter > 0) {
      this.$store.dispatch('rollDice');
      } else {
          console.log('no more rolls');
      }
    },
  },
};
</script>

<style scoped>
.flex-cont {
    display: flex;
    justify-content: space-between;
    height: 5vh;
}
button {
    border-radius: 4px;
    margin-left: 10%;
    transition-duration: 0.2s;
    background-color: #008CBA;
    color: azure;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bolder;
}
button:hover {
    cursor: pointer;
    border: solid #008CBA;
    background-color: azure;
    color: black;
}
button:active {
  box-shadow: 0 5px #6660;
  transform: translateY(4px);
}
.roll-count {
    padding: 0.3em 1em 0;
    margin-right: 5%;
    border-radius: 4px;
}
</style>
