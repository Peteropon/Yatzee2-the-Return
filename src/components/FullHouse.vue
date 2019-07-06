<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: fullHouseExist && !isSelected}"> Full House:
        <span v-if="fullHouseExist && !isSelected">{{ fullHouse }} / 28</span>
        <span v-else-if="!isSelected">0 / 28</span>
        <span v-else> {{finalSum}}</span>
    </div>
</template>

<script>
export default {
    name: 'FullHouse',
    data() {
        return {
            isSelected: false,
        }
    },
    computed: {
        fullHouseExist() {
            return this.$store.state.fullHouse;
        },
        fullHouse() {
            return this.$store.state.fullHouseSum;
        },
        finalSum() {
            return this.$store.state.fullHouseFinal;
        }
    },
    methods: {
        registerPoints() {
            this.isSelected = true;
            this.$store.commit('registerFullHouse');
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
