<template>
  <div>
    <textarea
      id="passwordArea"
      class="password-area"
      readonly
      rows="1"
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
