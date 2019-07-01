<template>
    <div :class="{available: bonusAvailable}"> Bonus:
        <span v-if="bonusAvailable"> 50 </span>
        <span v-else> 0 </span>
    </div>
</template>

<script>
export default {
    name: 'Bonus',
  computed: {
    bonusAvailable() {
      return this.$store.state.bonusAvailable;
    },
  },
}
</script>

<style scoped>
    .available {
        background-color: rgb(14, 218, 92);
    }
</style>
