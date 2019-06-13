<template>
    <div>
        <span>Sixes: {{ getSixes }}</span>
    </div>
</template>

<script>
export default {
    name: 'Sixes',
    computed: {
        getSixes() {
            return this.$store.state.sixes * 6
        }
    }
}
</script>

<style>

</style>
