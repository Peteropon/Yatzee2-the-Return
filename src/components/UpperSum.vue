<template>
    <div>
        <span> Sum: {{upperSum}}</span>
    </div>
</template>

<script>
export default {
  name: 'UpperSum',
  computed: {
    upperSum() {
      return this.$store.getters.getUpperSum;
    },
  },
};
</script>

<style scoped>

</style>
