<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: smallStraightExist && !isSelected}"> Small Straight:
        <span v-if="smallStraightExist && !isSelected"> 15 / 15</span>
        <span v-else-if="!isSelected"> 0 / 15</span>
        <span v-else-if="isSelected && !smallStraightExist"> 0 </span>
        <span v-else> 15 </span>
    </div>
</template>

<script>
export default {
    name: 'SmallStraight',
    data() {
        return {
            isSelected: false
        }
    },
    computed: {
        smallStraightExist() {
            return this.$store.state.smallStraight;
        }
    },
    methods: {
        registerPoints() {
            this.isSelected = true;
            this.$store.commit('registerSmallStraight');
        }
    }
}
</script>

<style>

</style>
