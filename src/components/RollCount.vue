<template>
    <div :counter="counter"> {{counter}} /3 rolls left</div>
</template>

<script>
export default {
    name: 'RollCount',
    props: {
        counter: {
            type: Number,
            required: true,
        }
    },
}
</script>

<style>

</style>
