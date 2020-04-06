<template>
    <div>
        <h1>Diceware password generator in Vue</h1>
        <generator/>
        <display/>
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
    props: {
        msg: String
    }
};
</script>

<style scoped>
</style>