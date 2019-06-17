<template>
    <div class="table-content">
        <ones></ones>
        <twos></twos>
        <threes></threes>
        <fours></fours>
        <fives></fives>
        <sixes></sixes>
    </div>
</template>

<script>
import Ones from './Ones'
import Twos from './Twos'
import Threes from './Threes'
import Fours from './Fours'
import Fives from './Fives'
import Sixes from './Sixes'
export default {
    name: 'UpperTable',
    components: {
        Ones,
        Twos,
        Threes,
        Fours,
        Fives,
        Sixes,
    },
}
</script>

<style scoped>
    .table-content > *{
        margin-top: 1%;
        border-style:outset;
    }

</style>
