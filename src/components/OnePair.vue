<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: onePairExists && !isSelected}">One Pair:
        <span v-if="onePairExists && !isSelected">{{onePair}} / 12</span>
        <span v-else-if="!isSelected">0 / 12</span>
        <span v-else>{{ finalSum }}</span>
    </div>
</template>

<script>
export default {
    name: 'OnePair',
    data() {
        return {
            isSelected: false,
        }
    },
    computed: {
        onePair() {
            return this.$store.state.onePairSum;
        },
        onePairExists() {
            return this.$store.state.onePairValidator;
        },
        finalSum() {
            return this.$store.state.onePairFinal;
        }
    },
    methods: {
        registerPoints() {
            this.isSelected = true;
            this.$store.commit('registerOnePair');
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
