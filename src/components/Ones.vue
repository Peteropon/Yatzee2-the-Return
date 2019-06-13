<template>
    <div>
        <span>Ones: {{ getOnes }}</span>
    </div>
</template>

<script>
export default {
    name: 'Ones',
    computed: {
        getOnes() {
            return this.$store.state.ones
        }
    }
}
</script>

<style>

</style>
