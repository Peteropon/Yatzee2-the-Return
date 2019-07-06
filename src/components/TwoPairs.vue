<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: twoPairsExist && !isSelected}"> Two Pairs:
        <span v-if="twoPairsExist && !isSelected">{{ twoPairs }} / 22</span>
        <span v-else-if="!isSelected">0 / 22</span>
        <span v-else> {{finalSum}}</span>
    </div>
</template>

<script>
export default {
    name: 'TwoPairs',
    data() {
        return {
            isSelected: false,
        }
    },
    computed: {
        twoPairsExist() {
            return this.$store.state.twoPairValidator;
        },
        twoPairs() {
            return this.$store.state.twoPairSum;
        },
        finalSum() {
            return this.$store.state.twoPairFinal;
        }
    },
    methods: {
        registerPoints() {
            this.isSelected = true;
            this.$store.commit('registerTwoPair');
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
