<template>
    <div id="btn-container" v-bind:class="theme" v-on:click="changeTheme">
        <div id="circle"></div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({ 
    name : 'select-theme',

    data() {
        return {
            theme : 'dark'
        }
    },

    methods : {
        changeTheme : function() {
            this.theme = this.theme == 'dark' ? 'light' : 'dark'
            this.$emit('theme', this.theme)
        }
    }

})
</script>


<style scoped>

div#btn-container {
    width: 60px;
    height: 30px;

    border-radius: 15px;

    background: rgb(8, 10, 32);
    padding: 2px 5px;
}

div#btn-container div#circle {
    width: 25px;
    height: 25px;

    pointer-events: none;

    border-radius: 50%;
    background: rgb(30, 104, 165);
}

div#btn-container.light div#circle {
    float: right;
}

</style>