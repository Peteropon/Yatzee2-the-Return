<template>
    <div class="table-content">
        <ones></ones>
        <twos></twos>
        <threes></threes>
        <fours></fours>
        <fives></fives>
        <sixes></sixes>
        <upper-sum></upper-sum>
        <bonus></bonus>
        <total-sum></total-sum>
    </div>
</template>

<script>
import Ones from './Ones';
import Twos from './Twos';
import Threes from './Threes';
import Fours from './Fours';
import Fives from './Fives';
import Sixes from './Sixes';
import UpperSum from './UpperSum';
import Bonus from './Bonus';
import TotalSum from './TotalSum';

export default {
  name: 'UpperScoreboard',
  components: {
    Ones,
    Twos,
    Threes,
    Fours,
    Fives,
    Sixes,
    UpperSum,
    Bonus,
    TotalSum
  },
};
</script>

<style scoped>
    .table-content >*{
        margin-top: 1%;
        border-style:outset;
        border-radius: 5px;
        padding: 0.3em 0 0.3em 1em ;
    }

</style>
