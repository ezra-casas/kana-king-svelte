<script lang="ts">
    import { 
        selectedKanaGroup, 
        romajiAnswers, 
		scores
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
    let correctlyAnswered = 0;
    let incorrectlyAnswered = 0;

    const questions = randomizeKana($selectedKanaGroup, selectedValues, hiraganaArray, katakanaArray)
    
    function handleClick(){
        if(selectedValues[currentIndex].includes(guess)){
            correctlyAnswered++
            scores.update(state => {
                state.correctly++;
                return state;
            });
            currentIndex++
            guess = ""
        }else{
            incorrectlyAnswered++
            scores.update(state => {
                state.incorrectly++;
                return state;
            });
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
        <p>Answered Correctly: {correctlyAnswered}</p>
        <p>Answered Incorrectly: {incorrectlyAnswered}</p>
        <p>{$scores.correctly}</p>
        <button on:click={handleBack}>Back</button>
    {/if}
</section>




<style>
</style>
