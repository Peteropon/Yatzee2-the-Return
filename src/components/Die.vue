<template>
<div class="img" @click="$emit('dieClicked')">
    <img :src="die.img" alt="image of a die">
</div>
</template>

<script>
export default {
    name: 'Die',
    props: ['die'],
    methods: {
        hi($event){
            console.log('hi from ' + $event.target.value)
        }
    },
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
    img{
        max-width: 10vw;
    }

    .img{
        margin: 1%;
    }
</style>
