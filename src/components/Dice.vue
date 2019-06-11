<template>
<div class="dc">
    <div class="dc-1" v-for="die, index in dice"
    :key="index" :die="die" >
        <die></die>
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

<style <style lang="scss" scoped>
    .dc {
        display: block;
    }


</style>
