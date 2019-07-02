<template>
<div>
    <button @click="rollDice">Roll dice</button>
    <roll-count :counter="counter"></roll-count>
</div>
</template>

<script>
import RollCount from './RollCount';
export default {
  name: 'Roll',
  components: {
      RollCount,
  },
  data() {
      return {
          counter: 3,
      }
  },
  methods: {
    rollDice() {
      if(this.counter > 0) {
          this.counter--;
      this.$store.dispatch('rollDice');
      } else {
          console.log('no more rolls');
      }
    },
  },
};
</script>

<style scoped>
button {
    border-radius: 4px;
}
</style>
