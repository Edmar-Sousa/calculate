<template>
    <div id="calc-visor">
        {{ exp }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'calc-visor',

    props : ['exp']
})

</script>

<style scoped>

div#calc-visor {
    width: 100%;
    height: 60px;

    margin: 10px auto;
    padding: 0 5px;
    line-height: 60px;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 35px;
    text-align: right;
}

</style>