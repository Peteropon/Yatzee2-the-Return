<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: getFives > 0 && !isSelected}"> Fives:
        <span v-if="!isSelected">{{ getFives }} / 25</span>
        <span v-else>{{ finalSum }}</span>    </div>
</template>

<script>
export default {
  name: 'Fives',
  data() {
    return {
      isSelected: false,
      finalSum: 0,
    };
  },
  computed: {
    getFives() {
      return this.$store.state.fives * 5;
    },
  },
  methods: {
    registerPoints() {
      this.isSelected = true;
      this.$store.dispatch('registerPoints', 5).then(() =>
            this.$store.commit('clearNumberCounters')
);
      this.finalSum = this.$store.state.fives * 5;
    },
  },

};
</script>

<style scoped>
    .selected {
        background-color:rgba(90, 209, 173, 0.8);
    }
    .available {
        background-color: rgb(14, 218, 92);
    }
</style>
