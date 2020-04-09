<template>
  <div id="app">
    <diceware msg="Diceware Password generator in Vue"></diceware>
    <projectInfo/>
  </div>
</template>

<script>
import diceware from "./components/diceware";
import projectInfo from "./components/projectinfo";

export default {
  name: "App",
  components: {
    diceware,
    projectInfo,
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
