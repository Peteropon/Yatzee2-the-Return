<template>
    <div @click="registerPoints" :class="{selected: isSelected}"> Fives:
        <span v-if="!isSelected">{{ getFives }} / 25</span>
        <span v-else>{{ finalSum }}</span>    </div>
</template>

<script>
export default {
    name: 'Fives',
    data() {
        return {
            isSelected: false,
            finalSum: 0
        }
    },
    computed: {
        getFives() {
            return this.$store.state.fives * 5
        }
    },
    methods: {
        registerPoints() {
            this.isSelected = true
            this.$store.dispatch('registerPoints')
            this.finalSum = this.$store.state.fives * 5
        }
    }

}
</script>

<style scoped>
    .selected {
        background-color:coral;
    }
</style>
