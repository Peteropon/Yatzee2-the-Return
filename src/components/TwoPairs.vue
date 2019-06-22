<template>
    <div> Two Pairs:
        <span v-if="twoPairsExist">{{ twoPairs }}</span>
    </div>
</template>

<script>
export default {
    name: 'TwoPairs',
    computed: {
        twoPairsExist() {
            return this.$store.state.twoPairValidator;
        },
        twoPairs() {
            return this.$store.state.twoPairSum;
        }
    }
}
</script>

<style>

</style>
