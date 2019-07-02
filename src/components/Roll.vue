<template>
<div class="roll">
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
.roll {
    display: flex;
}
button {
    border-radius: 4px;
    margin-left: 10%;
}
button:hover {
    cursor: pointer;
}
.roll-count {
    /* background-color: aquamarine; */
    margin-left: 15%;
    padding: 0 1em 0 1em;
    float: right;
}
</style>
