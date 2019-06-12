<template>
<div class="dc">
    <div class="dc-1"  >
        <die v-for="die, index in dice"
    :key="index" :die="die"></die>
    </div>
</div>
</template>

<script>
import Die from './Die'
export default {
    name: 'Dice',
    components: {
        Die
    },
    computed: {
        dice() {
            return this.$store.state.dice
        }
    }
}
</script>

<style  scoped>
    .dc-1 {
        display: inline-block;
    }


</style>
