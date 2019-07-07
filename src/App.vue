<template>
  <div id="app">
    <game></game>
  </div>
</template>

<script>
import Game from './components/Game';

export default {
  components: {
    Game,
  },
};
</script>

<style scoped>
    #app {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

    }
    @media (min-width: 50em) {
        #app > *{
            max-width: 60%;
            padding-left: 15%;
        }
    }
</style>
