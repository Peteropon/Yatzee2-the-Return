<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: fourKindExist && !isSelected}"> 4 Of A Kind:
        <span v-if="fourKindExist && !isSelected">{{ fourKind }} / 24</span>
        <span v-else-if="!isSelected">0 / 24</span>
        <span v-else> {{finalSum}}</span>
    </div>
</template>

<script>
export default {
    name: 'FourOfAKind',
    data() {
        return {
            isSelected: false,
        }
    },
    computed: {
        fourKindExist() {
            return this.$store.state.fourKind;
        },
        fourKind() {
            return this.$store.state.fourKindSum;
        },
        finalSum() {
            return this.$store.state.fourKindFinal;
        }
    },
    methods: {
        registerPoints() {
            this.isSelected = true;
            this.$store.commit('registerFourKind');
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
