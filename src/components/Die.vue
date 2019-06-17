<template>
<div class="div-img" @click="$emit('dieClicked')">
    <img class="die-img" :src="die.img" alt="image of a die">
</div>
</template>

<script>
export default {
    name: 'Die',
    props: {
        die: {
            type: Object,
            required: true,
        }
    }

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
    .die-img{
        max-width: 10vw;
    	transition: all .1s ease-in-out;
    }

    .div-img{
        margin: 1%;
    }
    .die-img:hover {
	filter: hue-rotate(180deg);
    }
</style>
