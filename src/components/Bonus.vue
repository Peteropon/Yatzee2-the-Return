<template>
    <div> Bonus:
        <span v-if="upperSum >= 63"> 50 </span>
        <span v-else> 0 </span>
    </div>
</template>

<script>
export default {
    name: 'Bonus',
  computed: {
    upperSum() {
      return this.$store.getters.getUpperSum;
    },
  },
}
</script>

<style scoped>

</style>
