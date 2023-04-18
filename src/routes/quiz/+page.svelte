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
    import Confetti from "../../lib/components/confetti.svelte";
    
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
    
    function handleWrong(){
        incorrectlyAnswered++
        scores.update(state => {
            state.incorrectly++;
            return state;
        });
        result = ""
        currentIndex++
        guess = ""
    }

    function handleClick(){
        if(guess.length > 0){
            if(selectedValues[currentIndex].includes(guess.toLowerCase())){
                correctlyAnswered++
                scores.update(state => {
                    state.correctly++;
                    return state;
                });
                result = 'correct'
                currentIndex++
                guess = ""
                setTimeout(() => {
                    result = ""
                }, 1400)
            }else{
                handleWrong()
                result = 'wrong'
                setTimeout(() => {
                    result = ""
                }, 1300)
            }
        }else{
            const message = document.querySelector<HTMLParagraphElement>(".hide-message")!
            message.style.visibility = "visible";
        }
    }

    
</script>

<div class="container">
    {#if selectedValues.length - currentIndex != 0}
        <h1 class="title"><p>{selectedValues.length - currentIndex}</p>
            
                {#if selectedValues.length - currentIndex === 1}question
                {:else}questions
                {/if} left
            
        </h1>
    {/if}

    <section class="quiz-container">

        {#each questions as question, index}
            {#if index === currentIndex}
                <h1 class="question">{question}</h1>
                <form on:submit|preventDefault={handleClick}>
                    <label for="input">
                        Type in the romaji
                        <input autofocus autocapitalize="words" bind:value={guess} type="text" name="response" id="response" placeholder="romaji...">
                    </label>
                    <div>
                        <button type="button" on:click|preventDefault={handleClick}>Next</button>  
                        <button type="button" on:click|preventDefault={handleWrong}>Skip</button>  
                    </div>
                    
                </form>
                <div style="height: 50px">
                    {#if result === "correct"}
                        <p class="result correct">{correctResponseArray[Math.floor(Math.random() * (correctResponseArray.length - 1))]}</p>
                        {result = ""}
                        {:else if result === "wrong"}
                        <p class="result wrong">{wrongResponseArray[Math.floor(Math.random() * (wrongResponseArray.length - 1))]}</p>
                        {result = ""}
                    {/if}
                </div>
                <p class="hide-message" style="visibility: hidden;">
                    Please type an answer
                </p>
 
            {/if}
        {/each}

        
        {#if currentIndex === questions.length}
            <div class="finish">
                <Confetti/>

                <h1>
                    FINISH!
                </h1>
                <div>
                    <p class="correct">Answered Correctly: {correctlyAnswered}</p>
                    <p class="wrong">Answered Incorrectly: {incorrectlyAnswered}</p>
                </div>
                
                <button on:click={handleBack}>Back</button>
            </div>
        {/if}
        
    </section>


</div>


<style>
    .container{
        background-color: rgb(36, 50, 68);
        height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .quiz-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .result{
        transition: opacity 0.5s ease-in-out;
        font-weight: bolder;
    }
    .question{
        font-size: 4rem;
        animation: pulse 1s ease-in-out;
    }
    .correct{
        color:#60f88b;
    }
    .wrong{
        color:#ff6f6f;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
    label{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    input{
        border: none;
        border-radius: 10px;
        height: 32px;
        padding: 10px;
    }
    button{
        background-color: #ffffff;
        border-radius: 10px;
        width: 100px;
        height: 50px;
        border: none;
        font-weight: bolder;
        user-select: none;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.363);
        align-self: flex-end;
        
    }
    button:active{
        transform: scale(1.2);
        background-color: rgb(172, 172, 172);
    }   
    .finish{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        gap: 1.2rem;
    }
    .finish h1{
        font-size: 3rem;
    }
    .hide-message{
        color: #ff6f6f;
    }
    .title{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title p{
        color: #ead154;
    }

    @media only screen and (max-width: 768px){
        form{
            gap: 2rem;
            padding: 10px;
        }
    }

    @keyframes pulse{
        0%{
            
            transform: scale(1);
        }
        50% {
            
            transform: scale(1.3);
        }
        100% {
            
            transform: scale(1);
        }
    }

</style>
