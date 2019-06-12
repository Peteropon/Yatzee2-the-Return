<template>
    <div class="dc-1" >
        <die class="dv-img" v-for="die, index in dice"
    :key="index" :die="die" @dieClicked='selectDie(die)'></die>
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
    },
    methods: {
        selectDie(die) {
            console.log('hi ' + die.value)
        }
    }
}
</script>

<style  scoped>
    .dc-1 {
        display: flex;
        margin: 1em;
    }
</style>
