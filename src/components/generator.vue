<template>
  <div>
    <div class="container">
      <div>
        <label class="column-left" for="language_ctrl">language:</label>
        <select
          class="column-right"
          id="language_ctrl"
          v-bind:value="language"
          v-on:change="updateLanguage"
        >
          <option value="en">English</option>
          <option value="fi">Finnish</option>
          <option value="mi">Maori</option>
          <option value="pl">Polish</option>
        </select>
      </div>
      <div>
        <label class="column-left" for="password_ctrl"
          >words per password (4-10):</label
        >
        <input
          id="password_ctrl"
          class="column-right"
          type="number"
          v-bind:value="passwordLength"
          v-on:change="updatePasswordLength"
          onkeyup="this.value=this.value.replace(/[^\d]/,'');"
          on:change="{validatePasswordLength}"
          min="4"
          max="10"
        />
      </div>
      <div>
        <label class="column-left" for="separator_ctrl">separator:</label>
        <input id="separator_ctrl" class="column-right" v-model="separator" />
      </div>
      <div>
        <button v-on:click="generatePassword">
          Generate password
        </button>
      </div>
      <password v-bind:password="password" />
    </div>
  </div>
</template>

<script>
import getWordsMap from "./../repo.js";
import getRandom from "./../dice.js";
import password from "./password";

export default {
  name: "generator",
  components: {
    password,
  },
  data() {
    return {
      password: String,
      repository: new Map(),
      passwordLength: String,
      language: String,
      separator: String,
    };
  },
  created() {
    this.language = "en";
    this.separator = ".";
    this.passwordLength = 4;
    this.password = "";
  },
  mounted() {
    this.updateLanguageInternal(this.language);
  },
  methods: {
    updateLanguageInternal: function (language) {
      getWordsMap(language).then((result) => {
        this.repository.set(this.language, result);
      });
    },
    updateLanguage: function (event) {
      let language = event.target.value;

      this.language = language;
      if (!this.repository.has(language)) {
        this.updateLanguageInternal(language);
      }
    },
    updatePasswordLength: function (event) {
      this.passwordLength = Number(event.target.value);
    },
    generatePassword: function () {
      this.password = "";
      let words = this.repository.get(this.language);
      let allwords = new Array(this.passwordLength);
      allwords = allwords.fill().map(() => words[getRandom() % words.length]);
      this.password = allwords.join(this.separator);
    },
  },
};
</script>

<style>
button {
  background: #ff3e00;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 2px;
  /* max-width: 60%; */
  margin: 10px;
  text-transform: capitalize;
  padding: 10px 20px;
}
div {
  padding-bottom: 10px;
}
.container {
  width: 600px;
  border: 1px solid #ffffff;

  /*margin: 0 auto;*/
  display: inline-grid;
  background-color: lightblue;
  padding: 60px 60px 20px 60px;
  border-radius: 5px;
}

.column-left {
  float: left;
  white-space: nowrap;
}

.column-right {
  width: 300px;
  float: right;
  box-sizing: border-box;
}

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
