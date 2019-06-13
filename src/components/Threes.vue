<template>
    <div>
        <span>Threes: {{ getThrees }}</span>
    </div>
</template>

<script>
export default {
    name: 'Threes',
    computed: {
        getThrees() {
            return this.$store.state.threes * 3
        }
    }
}
</script>

<style>

</style>
