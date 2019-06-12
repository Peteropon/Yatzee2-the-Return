<template>
<div class="img">
    <img :src="die.img" alt="image of a die">
</div>
</template>

<script>
export default {
    name: 'Die',
    props: ['die'],
    // data() {
    //     return {
    //         image
    //     }
    // },
    // beforeMount() {
    //     const value = Math.floor(Math.random() * 7) +1
    //     //this.$store.state.dice[0].value = value
    //     this.image = require('@/assets/Dice-' + value + '.png')
    //     //this.image = this.$store.state.dice[0].img

    // },

};
</script>

<style scoped>

</style>
