<template>
  <div>
    <h1>Diceware Password Generator in Vue</h1>
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
          >words per password ({{ MIN_PASS_LENGTH }} -
          {{ MAX_PASS_LENGTH }}):</label
        >
        <input
          id="password_ctrl"
          class="column-right"
          type="number"
          v-model="passwordLength"
          v-on:change="updatePasswordLength"
          onkeyup="this.value=this.value.replace(/[^\d]/,'');"
          v-bind:min="MIN_PASS_LENGTH"
          v-bind:max="MAX_PASS_LENGTH"
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
import getWordsMap from "./repo.js";
import getRandom from "./dice.js";
import password from "./password";

const MAX_PASS_LENGTH = 10;
const MIN_PASS_LENGTH = 4;
const DEFAULT_PASS_LENGTH = 6;
const DEFAULT_SEPARATOR = ".";
const DEFAULT_LANGUAGE = "en";

export default {
  name: "generator",
  components: {
    password,
  },
  data() {
    return {
      password: String,
      repository: new Map(),
      passwordLength: Number,
      language: String,
      separator: String,
      MAX_PASS_LENGTH: MAX_PASS_LENGTH,
      MIN_PASS_LENGTH: MIN_PASS_LENGTH,
    };
  },
  created() {
    this.language = DEFAULT_LANGUAGE;
    this.separator = DEFAULT_SEPARATOR;
    this.passwordLength = DEFAULT_PASS_LENGTH;
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
      let len = Number(event.target.value);
      len = len > MAX_PASS_LENGTH ? MAX_PASS_LENGTH : len;
      len = len < MIN_PASS_LENGTH ? MIN_PASS_LENGTH : len;
      if (len !== this.passwordLength) {
        this.passwordLength = len;
      }
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

<style scoped>
>>> button {
  background: #ff3e00;
  color: white;
  border: none;
  border-radius: 2px;
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
</style>
