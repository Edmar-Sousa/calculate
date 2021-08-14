<template>
    <div id="container">
        <cacl-visor v-bind:exp="expValue" />

        <div class="dash-board">
            <button-calc v-for="i in 19" v-bind:key="i" v-bind:text="i" v-on:clickButton="clickButton" />
        </div>
    </div>
</template>

<script lang="ts">

import Vue from 'vue'
import ButtonCalc from './Button-calc.vue'
import CaclVisor  from './Calc-visor.vue'

import { is_number_or_operator, calculate_expession } from '@/logic.ts'

export default Vue.extend({
    name : 'dash-board',

    components : {
        ButtonCalc,
        CaclVisor
    },

    data() {
        return {
            exp : ''
        }
    },

    computed : {
        expValue : function() : String {
            return this.exp.length == 0 ? '0' : this.exp
        }
    },

    methods : {
        clickButton : function (value : String) {
            if (is_number_or_operator(value) && this.exp.length < 14)
                this.exp += value

            else
                switch (value) {
                    case 'C': this.exp = ''; break
                    case '<': this.delete(); break
                    case '=': this.calcul(); break
                }
        },

        delete : function () {
            this.exp = this.exp.substr(0, this.exp.length - 1)
        },

        calcul : function() {
            let r = calculate_expession(this.exp)

            if (r.length > 14)
                this.exp = String(Number(r).toFixed(2))
        }
    }
})

</script>

<style>

div#container {
    width: 100%;
    height: 80%;
}

div.dash-board {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-areas: 
        "btn1  btn2  btn3  btn4 "
        "btn5  btn6  btn7  btn8 "
        "btn9  btn10 btn11 btn12"
        "btn13 btn14 btn15 btn19"
        "btn16 btn17 btn18 btn19";

    grid-template-columns: repeat(4, 1fr);
    grid-template-rows:    repeat(5, 1fr);
    grid-gap: 10px;
}


</style>