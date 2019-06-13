<template>
    <div>
        <span>Fours: {{ getFours }}</span>
    </div>
</template>

<script>
export default {
    name: 'Fours',
    computed: {
        getFours() {
            return this.$store.state.fours * 4
        }
    }
}
</script>

<style>

</style>
