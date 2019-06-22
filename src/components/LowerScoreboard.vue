<template>
    <div class="table-content">
        <one-pair></one-pair>
        <two-pairs></two-pairs>
    </div>
</template>

<script>
import OnePair from './OnePair';
import TwoPairs from './TwoPairs';
export default {
    name: 'LowerScoreboard',
    components: {
        OnePair,
        TwoPairs,
    }
}
</script>

<style scoped>
    .table-content > *{
        margin-top: 1%;
        border-style:outset;
        border-radius: 5px;
        padding: 0.3em 0 0.3em 1em ;
   }
</style>
