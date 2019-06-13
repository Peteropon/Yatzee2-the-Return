<template>
    <div class="dc-1" >
        <die class="dv-img" v-for="(die, index) in dice"
    :key="index" :die="die" :index='index'
    @dieClicked='selectDie(die, index)'></die>
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
        selectDie(die, index) {
            console.log('hi ' + die.value + index)
            this.$store.dispatch('toggleSelectedDie', index)

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
