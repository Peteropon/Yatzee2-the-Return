<template>
    <div class="game">
    <h1>Welcome to a good Yatzy game!</h1>
        <dice id="dice"></dice>
        <roll id="roll"></roll>
        <scoreboard></scoreboard>
        <footer class="flex-content">
            <a id="linkedin" href="https://www.linkedin.com/in/petros-tsavdaridis-a8575059/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
         alt="linkedin logo"></a>
         <a id="github" href="https://github.com/Peteropon"><img src="data:image/png;base64,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"
          alt="github logo"></a></footer>
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
    .flex-content {
        display: flex;
        justify-content:space-around;
        align-content: center;
        margin: 1em;
    }
    .flex-content > * {
        line-height: 3em;
    }
    #github > * {
        width: 8vw;
    }
    #linkedin > * {
        padding-top: 10%;
        width: 8vw;
    }
    h1 {
        text-align: center;
        font-size: 5vw;
    }
    html {
        background-color: rgb(43, 39, 39);
        width: 100%;
    }
    @media (min-width: 50em) {
        html {
            background-color: rgb(206, 199, 106);
            background-image: linear-gradient(rgb(204, 233, 98), rgb(176, 176, 192))
        }
        h1 {
            text-align: center;
            min-width: 55vw;
            font-size: 2em;
        }
        #github > * {
        max-width: 5vw;
    }
        #linkedin > * {
            max-width: 5vw;
        }
    .game {
        display: grid;
    }

    }
</style>
