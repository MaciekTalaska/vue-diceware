<template>
  <div>
    <textarea
      id="passwordArea"
      class="password-area"
      readonly
      rows="2"
      v-bind:value="password"
    />
    <button v-on:click="copyPasswordToClipboard">copy to clipboard</button>
  </div>
</template>

<script>
export default {
  name: "display",
  props: {
    password: String,
  },
  methods: {
    copyPasswordToClipboard: function () {
      let el = document.getElementById("passwordArea");
      el.select();
      document.execCommand("copy");
      el.selectionStart = el.selectionEnd;
    },
  },
};
</script>

<style scoped>
.password-area {
  background-color: aliceblue;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  padding: 10px;
}
</style>
