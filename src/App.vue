<template>
    <div id="app" v-bind:class="theme">
        <select-theme v-on:theme="changeTheme" />
        <dash-board />
    </div>
</template>


<script lang="ts">
import Vue from 'vue'

import SelectTheme from '@/components/Select-theme.vue'
import DashBoard   from '@/components/Dash-board.vue'

export default Vue.extend({
    name : 'app',

    data() {
        return {
            theme : 'dark'
        }
    },

    components : {
        SelectTheme, DashBoard
    },

    methods : {
        changeTheme : function (theme : string) {
            this.theme = theme
        }
    }

})
</script>


<style>

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

div#app {
    width: 100vw;
    height: 100vh;

    transition: background 400ms;
    padding: 10px;
}


div#app.dark {
    background: rgb(19, 22, 56);
    color: rgb(231, 231, 231);
}

/* div#app-container {
    max-width: 320px;
    width: 100%;
    height: 100%;

    margin: auto;
} */

</style>