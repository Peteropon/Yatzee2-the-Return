<template>
    <div @click="registerPoints">Fours:
        <span v-if="!selected">{{ getFours }}</span>
        <span v-else>{{ finalSum }}</span>
    </div>
</template>

<script>
export default {
    name: 'Fours',
    data() {
        return {
            selected: false,
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
            this.selected = true
            this.$store.dispatch('registerPoints')
            this.finalSum = this.$store.state.fours * 4
        }
    }

}
</script>

<style>

</style>
