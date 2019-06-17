<template>
    <div @click="registerPoints" :class="{selected: isSelected}">Fours:
        <span v-if="!isSelected">{{ getFours }} / 20</span>
        <span v-else>{{ finalSum }}</span>
    </div>
</template>

<script>
export default {
    name: 'Fours',
    data() {
        return {
            isSelected: false,
            finalSum: 0
        }
    },
    computed: {
        getFours() {
            return this.$store.state.fours * 4
        },
    },
    methods: {
        registerPoints() {
            this.isSelected = true
            this.$store.dispatch('registerPoints')
            this.finalSum = this.$store.state.fours * 4
        }
    }

}
</script>

<style scoped>
    .selected {
        background-color:coral;
    }
</style>
