<template>
    <div @click.once="registerPoints" :class="{selected: isSelected}"> Ones:
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
      this.$store.dispatch('registerPoints');
      this.finalSum = this.$store.state.ones;
    },
  },

};
</script>

<style scoped>
    .selected {
        background-color:coral;
    }
</style>
