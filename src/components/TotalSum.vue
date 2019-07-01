<template>
    <div>Total Sum: {{totalSum}}</div>
</template>

<script>
export default {
    name: 'TotalSum',
    computed: {
        totalSum() {
            if (this.$store.state.bonusAvailable) {
                return this.$store.state.totalSum + 50
            } else return this.$store.state.totalSum
        }
    }
}
</script>

<style>

</style>
