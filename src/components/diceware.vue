<template>
    <div>
        <h1>Diceware password generator in Vue</h1>
        <generator v-on:passwordChanged="updatePassword"/>
        <display v-bind:password="password"/>
    </div>
</template>

<script>
import generator from "./generator";
import display from "./display";

export default {
    name: "diceware",
    components: {
        generator,
        display
    },
   data() {
        return {
            password: String,
        }
    },
    created() {
        this.password = "";
    },
    methods: {
        updatePassword: function(newPassword) {
            this.password = newPassword 
        }
    }
};
</script>

<style scoped>
</style>