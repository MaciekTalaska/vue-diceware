<template>
  <div>
    <h1>Diceware password generator in Vue</h1>
    <generator />
  </div>
</template>

<script>
import generator from "./generator";

export default {
  name: "diceware",
  components: {
    generator,
  },
  data() {
    return {
      password: String,
    };
  },
  created() {
    this.password = "";
  },
};
</script>
