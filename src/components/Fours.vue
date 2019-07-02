<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: getFours > 0 && !isSelected}">Fours:
        <span v-if="!isSelected">{{ getFours }} / 20</span>
        <span v-else>{{ finalSum }}</span>
    </div>
</template>

<script>
export default {
  name: 'Fours',
  data() {
    return {
      isSelected: false,
      finalSum: 0,
    };
  },
  computed: {
    getFours() {
      return this.$store.state.fours * 4;
    },
  },
  methods: {
    registerPoints() {
      this.isSelected = true;
      this.$store.dispatch('registerPoints', 4);
      this.finalSum = this.$store.state.fours * 4;
    },
  },

};
</script>

<style scoped>
    .selected {
        background-color: rgba(90, 209, 173, 0.8);
    }
    .available {
        background-color: rgb(14, 218, 92);
    }
</style>
