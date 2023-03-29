<script lang="ts">
    import { selectedKanaGroup } from "../../stores";
    import { kana } from "../../data/dictionary";
    
    
    const [hiraganaArray, katakanaArray] = kana;
    const availableHiragana = Object.keys(hiraganaArray);
    const availableKatakana = Object.keys(katakanaArray);
    
    

    function print(str){
        console.group(str)
    }
    const questions = randomizeKana()
    let input: string = "";
    let currentIndex: number = 0;
    let currentQuestion = questions[currentIndex]
    let values: string[] = [];
    
    function handleClick(){
        if(currentIndex < questions.length){
            currentIndex++;
            currentQuestion = questions[currentIndex]
            input = ''
        }
        if(input === 'o'){
            print('pass')
        }
    }

    function handleSubmit(){
        handleClick()
    }

    function addKana(currentKeys: string[], currentValues: string[], kanaGroup:string[]){
        let randInt: number = Math.floor(Math.random() * currentKeys.length)
        const currentKey: string = currentKeys[randInt]
        const currentValue: string[] = currentValues[randInt]
        print(currentValue)
        if(kanaGroup.includes(currentKey)){
            randInt = Math.floor(Math.random() * currentKeys.length)
        }
        kanaGroup.push(currentKey)
    }
    function randomizeKana(): string[] {
        let kanaGroup: string[] = [];

        while (kanaGroup.length < 10) {
            for (let i: number = 0; i < $selectedKanaGroup.length; i++) {
                const group: string = $selectedKanaGroup[i];
                
                const groupFirstLetter: string = group[0];
                const isLessThanKanaGroup: boolean = kanaGroup.length < 10;
                

                if (groupFirstLetter === "h" && isLessThanKanaGroup) {
                    const currentKeys: string[] = Object.keys(hiraganaArray[$selectedKanaGroup[i]]);
                    const currentValues: string[] = Object.values(hiraganaArray[$selectedKanaGroup[i]]);
                    addKana(currentKeys, currentValues, kanaGroup)
                }

                if (groupFirstLetter === "k" && isLessThanKanaGroup) {
                    const currentKeys: string[] = Object.keys(katakanaArray[$selectedKanaGroup[i]]);
                    
                    addKana(currentKeys, kanaGroup)
                }
            }
        }
        return kanaGroup;
    }
    
</script>


<h1>Quiz page</h1>

<section class="quiz-container">
    {#each questions as question, index}
        {#if index === currentIndex}
            <h1>{question}</h1>

            <form on:submit|preventDefault={handleSubmit}>
                <input autofocus bind:value={input} type="text" name="response" id="response" placeholder="romaji...">
                <button type="button" on:click|preventDefault={handleClick}>Next</button>    
            </form>
        {/if}
    {/each}
    {#if currentIndex === questions.length}
        <h1>
            FINISH!
        </h1>
        <button>Back</button>
    {/if}
</section>




<style>
</style>
