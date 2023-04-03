<script lang="ts">
    import { 
        selectedKanaGroup, 
        romajiAnswers 
    } from "../../stores";
    import { kana } from "../../data/dictionary";
    import {
        handleBack, 
        print, 
        addRandomKana, 
        randomizeKana
    } from "../../lib/helpers/helpersFunctions"
    
    const [hiraganaArray, katakanaArray] = kana;
    
    let selectedValues:string[][] = [];
    let guess: string = "";
    let currentIndex = 0;

    const questions = randomizeKana($selectedKanaGroup, selectedValues, hiraganaArray, katakanaArray)
    
    function handleClick(){
        if(selectedValues[currentIndex].includes(guess)){
            console.log("pass")
            currentIndex++
            guess = ""
        }else{
            console.log("Fail")
            currentIndex++
            guess = ""
        }
        
    }

</script>


<h1>Quiz page</h1>

<section class="quiz-container">
    {#each questions as question, index}
        {#if index === currentIndex}
            <h1>{question}</h1>

            <form on:submit|preventDefault={handleClick}>
                <input autofocus bind:value={guess} type="text" name="response" id="response" placeholder="romaji...">
                <button type="button" on:click|preventDefault={handleClick}>Next</button>    
            </form>
        
        {/if}
    {/each}

    {#if currentIndex === questions.length}
        <h1>
            FINISH!
        </h1>
        <button on:click={handleBack}>Back</button>
    {/if}
</section>




<style>
</style>
