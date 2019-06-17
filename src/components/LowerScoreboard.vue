<template>
    <div class="table-content">
        <one-pair></one-pair>
    </div>
</template>

<script>
import OnePair from './OnePair';
export default {
    name: 'LowerScoreboard',
    components: {
        OnePair,
    }
}
</script>

<style scoped>
    .table-content > *{
        margin-top: 1%;
        border-style:outset;
         border-radius: 5px;
   }
</style>
