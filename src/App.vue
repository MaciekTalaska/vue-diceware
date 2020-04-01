<template>
  <div id="app">
    <diceware msg="Diceware Password generator in Vue"></diceware>
  </div>
</template>

<script>
import diceware from "./components/diceware";

export default {
  name: "App",
  components: {
    diceware
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
