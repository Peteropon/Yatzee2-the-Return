<template>
    <div>
        <dice></dice>
        <roll></roll>
        <scoreboard></scoreboard>
    </div>
</template>

<script>
import Dice from './Dice'
import Roll from './Roll'
import Scoreboard from './Scoreboard'
export default {
    name: 'Game',
    components: {
        Dice,
        Roll,
        Scoreboard,
    },
};
</script>

<style>

</style>
