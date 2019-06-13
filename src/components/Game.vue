<template>
    <div>
        <dice></dice>
        <roll></roll>
        <Table></Table>
    </div>
</template>

<script>
import Dice from './Dice'
import Roll from './Roll'
import Table from './Table'
export default {
    name: 'Game',
    components: {
        Dice,
        Roll,
        Table,
    },
};
</script>

<style>

</style>
