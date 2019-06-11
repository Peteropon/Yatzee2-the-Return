<template>
<div class="img">
    <img :src="image" alt="image of a die">
</div>
</template>

<script>
export default {
    name: 'Die',
    data() {
        return {
            image: this.$store.state.dice[2].img
        }
    }
};
</script>

<style scoped>

</style>
