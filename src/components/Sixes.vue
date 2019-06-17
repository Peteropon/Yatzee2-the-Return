<template>
    <div @click="registerPoints" :class="{selected: isSelected}"> Sixes:
        <span v-if="!isSelected">{{ getSixes }} / 30</span>
        <span v-else>{{ finalSum }}</span>
        </div>
</template>

<script>
export default {
  name: 'Sixes',
  data() {
    return {
      isSelected: false,
      finalSum: 0,
    };
  },
  computed: {
    getSixes() {
      return this.$store.state.sixes * 6;
    },
  },
  methods: {
    registerPoints() {
      this.isSelected = true;
      this.$store.dispatch('registerPoints');
      this.finalSum = this.$store.state.sixes * 6;
    },
  },

};
</script>

<style scoped>
    .selected {
        background-color:coral;
    }
</style>
