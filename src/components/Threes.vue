<template>
    <div @click="registerPoints" :class="{ selected: isSelected}"> Threes:
        <span v-if="!isSelected"> {{ getThrees }} / 15</span>
        <span v-else>{{ finalSum }}</span>
    </div>
</template>

<script>
export default {
  name: 'Threes',
  data() {
    return {
      isSelected: false,
      finalSum: 0,
    };
  },
  computed: {
    getThrees() {
      return this.$store.state.threes * 3;
    },
  },
  methods: {
    registerPoints() {
      this.isSelected = true;
      this.$store.dispatch('registerPoints');
      this.finalSum = this.$store.state.threes * 3;
    },
  },
};
</script>

<style>
    .selected {
        background-color:coral;
    }
</style>
