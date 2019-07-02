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
        max-width: 11vw;
    	transition: all .3s ease-in-out;
    }

    .div-img{
        margin: 1%;
        border-radius: 5px;
    }
    .die-img:hover {
	    filter: hue-rotate(180deg);
        cursor: pointer;
    }
    .die-img:active {
        box-shadow: 0 5px #6660;
        transform: translateY(4px);
    }
</style>
