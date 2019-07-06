<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: threeKindExist && !isSelected}"> 3 Of A Kind:
        <span v-if="threeKindExist && !isSelected">{{ threeKind }} / 18</span>
        <span v-else-if="!isSelected">0 / 18</span>
        <span v-else> {{finalSum}}</span>
    </div>
</template>

<script>
export default {
    name: 'ThreeOfAKind',
    data() {
        return {
            isSelected: false,
        }
    },
    computed: {
        threeKindExist() {
            return this.$store.state.threeKind;
        },
        threeKind() {
            return this.$store.state.threeKindSum;
        },
        finalSum() {
            return this.$store.state.threeKindFinal;
        }
    },
    methods: {
        registerPoints() {
            this.isSelected = true;
            this.$store.commit('registerThreeKind');
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
