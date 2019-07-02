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
    },
  },
};
</script>

<style scoped>
    .die-img{
        max-width: 10vw;
    	transition: all .3s ease-in-out;
    }

    .div-img{
        margin: 1%;
    }
    .die-img:hover {
	    filter: hue-rotate(180deg);
        cursor: pointer;
    }
</style>
