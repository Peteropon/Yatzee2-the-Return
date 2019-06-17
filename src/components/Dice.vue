<template>
    <div class="dc-1" >
        <die class="dv-img" v-for="(die, index) in dice"
    :key="index" :die="die" :index='index'
    @dieClicked='selectDie(die, index)'
        :class="[die.selected ? 'selected' : 'unselected']"></die>
    </div>

</template>

<script>
import Die from './Die';

export default {
  name: 'Dice',
  components: {
    Die,
  },
  computed: {
    dice() {
      return this.$store.state.dice;
    },
  },
  methods: {
    selectDie(die, index) {
      this.$store.dispatch('toggleSelectedDie', index);
    },
  },
};
</script>

<style scoped>
    .dc-1 {
        display: flex;
        margin: 1em;
    }
.unselected {
	filter: grayscale(0%);
}
.selected {
	filter: grayscale(100%);
}
</style>
