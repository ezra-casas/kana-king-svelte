<script lang="ts">
    import { 
        selectedKanaGroup, 
        romajiAnswers, 
		scores,
        answered
    } from "../../stores";
    import { kana } from "../../data/dictionary";
    import {
        handleBack, 
        print, 
        addRandomKana, 
        randomizeKana,
    } from "../../lib/helpers/helpersFunctions"
    
    const [hiraganaArray, katakanaArray] = kana;
    
    let selectedValues:string[][] = [];
    let guess: string = "";
    let currentIndex = 0;
    let correctlyAnswered = 0;
    let incorrectlyAnswered = 0;
    const correctResponseArray = [
        "That's right!", 
        "You did it!",
        "You got it!",
        "That's correct!",
        "Yes!",
        "Look at you go!",
        "You're on fire!"
    ]
    const wrongResponseArray = [
        "Sorry!",
        "Almost!",
        "Don't give up!",
        "Keep trying!",
        "You'll get there!",
        "This one's a toughy!",
    ]
    let result = '';

    const questions = randomizeKana($selectedKanaGroup, selectedValues, hiraganaArray, katakanaArray)
    
    function handleClick(){
        if(selectedValues[currentIndex].includes(guess)){
            correctlyAnswered++
            scores.update(state => {
                state.correctly++;
                return state;
            });
            result = 'correct'
            // answered.update(state => {
            //     const spread = [...state.good, selectedValues[currentIndex]]
            //     state = {
            //         ...state,
            //         good: spread,
            //     }
            //     return state
            // })

            currentIndex++
            guess = ""
        }else{
            incorrectlyAnswered++
            scores.update(state => {
                state.incorrectly++;
                return state;
            });
            
            result = 'wrong'
            // answered.update(state => {
            //     const spreadState = [...state.bad, selectedValues[currentIndex]]
            //     state = {
            //         ...state,
            //         bad: spreadState,
            //     }
            //     return state
            // })
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
            {#if result === "correct"}
                <p style="color: green;">{correctResponseArray[Math.floor(Math.random() * (correctResponseArray.length - 1))]}</p>
                {:else if result === "wrong"}
                <p style="color: red;">{wrongResponseArray[Math.floor(Math.random() * (wrongResponseArray.length - 1))]}</p>
            {/if}
            
            
        {/if}
    {/each}

    {#if currentIndex === questions.length}
        <h1>
            FINISH!
        </h1>
        <p style="color: green">Answered Correctly: {correctlyAnswered}</p>
        <p style="color: red">Answered Incorrectly: {incorrectlyAnswered}</p>
        <button on:click={handleBack}>Back</button>
    {/if}

</section>




<style>
</style>
