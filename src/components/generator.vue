<template>
    <div class="container">this is passoword generator placeholder
        <div>
            <label class="column-left" for="language_ctrl">language:</label>
            <select 	class="column-right"
                                id="language_ctrl" 
                                bind:value={language} 
                                on:change="{async (e) => loadDicewareWordList() }">
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
                            bind:value={passwordLength} 
                            onkeyup="this.value=this.value.replace(/[^\d]/,'');"
                            on:change="{validatePasswordLength}"
                            min=4 max=10 vlaue={defaultLength}/>
        </div>
        <div>
                <label 	class="column-left" 
                                for="separator_ctrl">separator:</label>
                <input 	id="separator_ctrl" 
                                class="column-right" 
                                bind:value={separator} />
        </div>
        <div>
            <button on:click={generatePassword}>
                Generate password
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "generator"
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