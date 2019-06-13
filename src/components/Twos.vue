<template>
    <div>
        <span>Twos: {{ getTwos }} </span>
    </div>
</template>

<script>
export default {
    name: 'Twos',
    computed: {
        getTwos() {
            return this.$store.state.twos * 2
        }
    },
    // mounted() {
    //     this.$store.dispatch('countNumbers', 2)
    // }
}
</script>

<style>

</style>
