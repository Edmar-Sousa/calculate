<template>
    <button class="btn-calc" v-bind:style="areaName" v-bind:class="classEs" v-on:click="clickButton">
        {{ buttonsValue[text - 1] }}
    </button>
</template>

<script>

import Vue from 'vue'
import ButtonsList from '@/ButtonsList.ts'

export default Vue.extend({
    name : 'button-calc',

    props : {
        text : Number,
    },

    computed : {
        areaName : function() {
            return `grid-area: btn${this.text};`
        },

        classEs : function() {
            const i = this.text - 1
            const v = this.buttonsValue[i]

            return isNaN(v) && (i < 16 || i > 17) ? 'color-2' : ''
        }
    },

    data() {
        return {
            buttonsValue : ButtonsList
        }
    },

    methods : {
        clickButton : function() {
            this.$emit('clickButton', this.buttonsValue[this.text - 1])
        }
    }

})

</script>

<style>

button.btn-calc {
    background: rgba(173, 173, 173, 0.555);
    border: none;
    border-radius: 3px;
}

button.color-2 {
    background: rgba(0, 255, 34, 0.685);
}

</style>