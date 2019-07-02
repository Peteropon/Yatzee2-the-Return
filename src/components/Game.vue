<template>
    <div class="game">
        <dice id="dice"></dice>
        <roll id="roll"></roll>
        <scoreboard></scoreboard>
    </div>
</template>

<script>
import Dice from './Dice';
import Roll from './Roll';
import Scoreboard from './Scoreboard';

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
    .game {
        display: grid;
    }
    .game > * {
        justify-content: center;
    }
    #roll {
        margin-bottom: 4%;
    }
</style>
