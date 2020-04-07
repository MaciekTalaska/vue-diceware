<template>
<div>
    <div class="container">
        <div>
            <label class="column-left" for="language_ctrl">language:</label>
            <select 	class="column-right"
                                id="language_ctrl" 
                                v-bind:value="language"
                                v-on:change="updateLanguage">
                <option value="en">English</option>
                <option value="pl">Polish</option>
                <option value="fi">Finnish</option>
                <option value="mi">Maori</option>
            </select>
        </div>
        <div>
            <label 	class="column-left"
                            for="password_ctrl">words per password (4-10):</label>
            <input 	id="password_ctrl" 	
                            class="column-right"
                            type="number" 
                            v-bind:value="passwordLength"
                            onkeyup="this.value=this.value.replace(/[^\d]/,'');"
                            on:change="{validatePasswordLength}"
                            min=4 max=10 vlaue={defaultLength}/>
        </div>
        <div>
                <label 	class="column-left" 
                                for="separator_ctrl">separator:</label>
                <input 	id="separator_ctrl" 
                                class="column-right" 
                                v-bind:value="separator" />
        </div>
        <div>
            <button v-on:click="generatePassword">
                Generate password
            </button>
        </div>
    </div>
    <!-- this is just temporary -->
    <p>{{password}}</p>
</div>
</template>

<script>
import getWordsMap from "./../repo.js";
import getRandom from "./../dice.js";

export default {

    name: "generator",
    data() {
        return {
            password: String,
            repository: new Map(),
            passwordLength: String,
            language: String,
            separator: String,
        }
    },
    created() {
        console.log("created")

        this.language = "en";
        this.separator = ".";
        this.passwordLength = 4;
        this.password = "";
    },
    mounted() {
        console.log("mounted");
        this.updateLanguageInternal(this.language);
    },
    methods: {
        updateLanguageInternal: function(language) {
            console.log('language: ', language);
            getWordsMap(language).then(result => {
                this.repository.set(this.language, result);
            })
        },
        updateLanguage: function(event) {
            let language = event.target.value;

            this.language = language;
            if (! this.repository.has(language)) {
                this.updateLanguageInternal(language);
            }
        },
        generatePassword: function() {
            this.password = "";
            let words = this.repository.get(this.language);
            let allwords = new Array(this.passwordLength);
            allwords = allwords.fill().map(() => words[getRandom() % words.length]);
            this.password = allwords.join(this.separator);

            console.log("password: ", this.password);
        },
}

};
</script>

<style scoped>
button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 2px;
    max-width: 60%;
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
    padding: 60px;
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