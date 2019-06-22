<template>
    <div>One Pair:
        <span v-if="onePairExists">{{onePair}}</span>
    </div>
</template>

<script>
export default {
    name: 'OnePair',
    computed: {
        onePair() {
            return this.$store.state.onePairSum;
        },
        onePairExists() {
            return this.$store.state.onePairValidator;
        }
    }
}
</script>

<style>

</style>
