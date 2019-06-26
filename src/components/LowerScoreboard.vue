<template>
    <div class="table-content">
        <one-pair></one-pair>
        <two-pairs></two-pairs>
        <three-of-a-kind></three-of-a-kind>
        <four-of-a-kind></four-of-a-kind>
        <small-straight></small-straight>
        <large-straight></large-straight>
        <full-house></full-house>
        <chance></chance>
        <yatzy></yatzy>
    </div>
</template>

<script>
import OnePair from './OnePair';
import TwoPairs from './TwoPairs';
import ThreeOfAKind from './ThreeOfAKind';
import FourOfAKind from './FourOfAKind';
import SmallStraight from './SmallStraight';
import LargeStraight from './LargeStraight';
import FullHouse from './FullHouse';
import Yatzy from './Yatzy';
import Chance from './Chance';
export default {
    name: 'LowerScoreboard',
    components: {
        OnePair,
        TwoPairs,
        ThreeOfAKind,
        FourOfAKind,
        SmallStraight,
        LargeStraight,
        FullHouse,
        Yatzy,
        Chance
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
