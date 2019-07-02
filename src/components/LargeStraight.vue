<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: largeStraightExist && !isSelected}"> Large Straight:
        <span v-if="largeStraightExist && !isSelected"> 20 / 20</span>
        <span v-else-if="!isSelected"> 0 / 20</span>
        <span v-else-if="isSelected && !largeStraightExist"> 0 </span>
        <span v-else> 20 </span>
    </div>
</template>

<script>
export default {
    name: 'LargeStraight',
    data() {
        return {
            isSelected: false
        }
    },
    computed: {
        largeStraightExist() {
            return this.$store.state.largeStraight;
        }
    },
    methods: {
        registerPoints() {
            this.isSelected = true;
            this.$store.commit('registerLargeStraight');
        }
    }
}
</script>

<style>

</style>
