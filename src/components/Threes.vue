<template>
    <div @click="registerPoints"> Threes:
        <span v-if="!selected"> {{ getThrees }}</span>
        <span v-else>{{ finalSum }}</span>
    </div>
</template>

<script>
export default {
    name: 'Threes',
    data() {
        return {
            selected: false,
            finalSum: 0
        }
    },
    computed: {
        getThrees() {
            return this.$store.state.threes * 3
        },
    },
    methods: {
        registerPoints() {
            this.selected = true
            this.$store.dispatch('registerPoints')
            this.finalSum = this.$store.state.threes * 3
        }
    }
}
</script>

<style>

</style>
