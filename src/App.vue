<template>
  <div id="app">
    <generator />
    <projectInfo />
  </div>
</template>

<script>
import generator from "./components/dpg/dpg-main";
import projectInfo from "./components/projectinfo";

export default {
  name: "App",
  components: {
    generator,
    projectInfo,
  },
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
