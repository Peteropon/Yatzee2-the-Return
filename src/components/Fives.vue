<template>
    <div>
        <span>Fives: {{ getFives }}</span>
    </div>
</template>

<script>
export default {
    name: 'Fives',
    computed: {
        getFives() {
            return this.$store.state.fives * 5
        }
    }
}
</script>

<style>

</style>
