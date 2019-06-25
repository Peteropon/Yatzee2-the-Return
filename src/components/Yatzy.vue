<template>
    <div @click.once="registerPoints" :class="{selected: isSelected,
    available: yatzyExist && !isSelected}"> Yatzy:
        <span v-if="yatzyExist && !isSelected"> Yatzy! </span>
        <span v-else-if="!isSelected"> 0 / 50</span>
        <span v-else-if="isSelected && !yatzyExist"> 0 </span>
        <span v-else> 50 </span>
    </div>
</template>

<script>
export default {
    name: 'Yatzy',
    data() {
        return {
            isSelected: false
        }
    },
    computed: {
        yatzyExist() {
            return this.$store.state.yatzy;
        }
    },
    methods: {
        registerPoints() {
            this.isSelected = true;
            this.$store.commit('registerYatzy');
        }
    }
}
</script>

<style>
    .selected {
        background-color: rgba(90, 209, 173, 0.8);
    }
    .available {
        background-color: rgb(14, 218, 92);
    }
</style>
