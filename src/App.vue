<template>
  <div id="app">
    <h1>Welcome to a good Yatzy game!</h1>
    <game></game>
  </div>
</template>

<script>
import Game from "./components/Game"
export default {
    components: {
        Game
    }
}
</script>

<style scoped>
    #app {
        background-color: rgb(12, 61, 61);
    }
</style>


