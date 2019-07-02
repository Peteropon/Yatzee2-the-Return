<template>
    <div @click.once="registerPoints" :class="{ selected: isSelected,
    available: getThrees > 0 && !isSelected}"> Threes:
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
      this.$store.dispatch('registerPoints', 3);
      this.finalSum = this.$store.state.threes * 3;
    },
  },
};
</script>

<style>
    .selected {
        background-color:rgba(90, 209, 173, 0.8);
    }
    .available {
        background-color: rgb(14, 218, 92);
    }
</style>
