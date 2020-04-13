<template>
  <div>
    <h1>{{ msg }}</h1>
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
  props: ["msg"],
};
</script>
