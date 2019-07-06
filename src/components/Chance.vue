<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: !isSelected && sum > 0}"> Chance:
        <span v-if="!isSelected"> {{ sum }} / 30 </span>
        <span v-else> {{ finalSum }} </span>
    </div>
</template>

<script>
export default {
    name: 'Chance',
    data() {
        return {
            isSelected: false
        }
    },
    computed: {
        sum() {
            return this.$store.state.tempSum;
        },
        finalSum() {
            return this.$store.state.chanceFinal;
        }
    },
    methods: {
        registerPoints() {
            this.isSelected = true;
            this.$store.commit('registerChance');
            this.$store.commit('clearNumberCounters');
        }
    }
}
</script>

<style>
    .selected {
        background-color: rgba(90, 209, 173, 0.8);
    }
    .available {
        background-color: rgb(14, 218, 92);
    }
</style>
