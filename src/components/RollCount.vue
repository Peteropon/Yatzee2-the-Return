<template>
    <div :counter="counter"
    :class="{green: rollcounter == 3, yellow: rollcounter == 2,
    orange: rollcounter == 1, red: rollcounter == 0}"> {{counter}} /3 rolls left</div>
</template>

<script>
export default {
    name: 'RollCount',
    props: {
        counter: {
            type: Number,
            required: true,
        }
    },
    computed: {
        rollcounter() {
            return this.counter;
        }
    }
}
</script>

<style scoped>
.green {
    background-color: rgb(14, 218, 92);
}
.yellow {
    background-color: rgb(212, 226, 9);
}
.orange {
    background-color: rgb(199, 148, 9);
}
.red {
    background-color: rgb(228, 102, 97);
}
</style>
