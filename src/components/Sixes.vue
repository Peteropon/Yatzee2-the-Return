<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: getSixes > 0 && !isSelected}"> Sixes:
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
      this.$store.dispatch('registerPoints', 6).then(() =>
            this.$store.commit('clearNumberCounters')
);
      this.finalSum = this.$store.state.sixes * 6;
    },
  },

};
</script>

<style scoped>
    .selected {
        background-color:rgba(90, 209, 173, 0.8);
    }
    .available {
        background-color: rgb(14, 218, 92);
    }
</style>
