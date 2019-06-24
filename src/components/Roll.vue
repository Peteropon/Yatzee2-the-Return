<template>
    <button @click="rollDice">Roll dice</button>
</template>

<script>
export default {
  name: 'Roll',
  methods: {
    rollDice() {
      this.$store.dispatch('rollDice');
    },
  },
};
</script>

<style scoped>
button {
    border-radius: 4px;
}
</style>
