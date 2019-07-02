<template>
    <div class="score">
        <upper-scoreboard class="column"></upper-scoreboard>
        <lower-scoreboard class="column"></lower-scoreboard>
    </div>
</template>

<script>
import UpperScoreboard from './UpperScoreboard';
import LowerScoreboard from './LowerScoreboard';

export default {
  name: 'Table',
  components: {
    UpperScoreboard,
    LowerScoreboard,
  },
};
</script>

<style scoped>
    .score {
        display: flex;
    }

    .column {
        flex: 45%;
        padding: 0.5em;
    }
@media only screen and (max-width: 600px) {
    .column {
        padding: 0.2em;
    }
}
</style>
