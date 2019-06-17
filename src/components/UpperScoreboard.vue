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
  },
};
</script>

<style scoped>
    .table-content > *{
        margin-top: 1%;
        border-style:outset;
        border-radius: 5px;
    }

</style>
