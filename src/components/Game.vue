<template>
    <div>
        <dice></dice>
        <roll></roll>
    </div>
</template>

<script>
import Dice from './Dice'
import Roll from './Roll'
export default {
    name: 'Game',
    components: {
        Dice,
        Roll
    }
}
</script>

<style>

</style>
