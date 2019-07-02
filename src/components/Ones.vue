<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: getOnes > 0 && !isSelected}"> Ones:
        <span v-if="!isSelected">{{ getOnes }} / 5</span>
        <span v-else>{{ finalSum }}</span>    </div>
</template>

<script>
export default {
  name: 'Ones',
  data() {
    return {
      isSelected: false,
      finalSum: 0,
    };
  },
  computed: {
    getOnes() {
      return this.$store.state.ones;
    },
  },
  methods: {
    registerPoints() {
      this.isSelected = true;
      this.$store.dispatch('registerPoints', 1);
      this.finalSum = this.$store.state.ones;
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
