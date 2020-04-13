<template>
  <div>
    <textarea
      id="passwordArea"
      class="password-area"
      readonly
      rows="1"
      v-model="password"
    />
    <button on:click="{copyPasswordToClipboard}">copy to clipboard</button>
  </div>
</template>

<script>
export default {
  name: "display",
  props: {
    password: String,
  },
};
</script>

<style scoped></style>
