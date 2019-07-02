<template>
    <div class="div-display" @click.once="registerPoints"
     :class="{selected: isSelected, available: getTwos > 0 && !isSelected}"> Twos:
        <span v-if="!isSelected">{{ getTwos }} / 10</span>
        <span v-else>{{ finalSum }}</span>
        </div>
</template>

<script>
export default {
  name: 'Twos',
  data() {
    return {
      isSelected: false,
      finalSum: 0,
    };
  },
  computed: {
    getTwos() {
      return this.$store.state.twos * 2;
    },
  },
  methods: {
    registerPoints() {
      this.isSelected = true;
      this.$store.dispatch('registerPoints', 2);
      this.finalSum = this.$store.state.twos * 2;
    },
  },

  // mounted() {
  //     this.$store.dispatch('countNumbers', 2)
  // }
};
</script>

<style scoped>
    .selected {
        background-color: rgba(90, 209, 173, 0.8);
    }
    .available {
        background-color:  rgb(14, 218, 92);
    }

</style>
