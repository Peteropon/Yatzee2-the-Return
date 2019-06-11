<template>
<div>
    <p>:)</p>
    <img :src="image" alt="">
</div>
</template>

<script>
export default {
    name: 'Die',
    data() {
        return {
            image: require('@/assets/Dice-2.png')
        }
    }
};
</script>

<style>

</style>
