<script lang="ts">
    import { selectedKanaGroup, romajiAnswers } from "../../stores";
    import { kana } from "../../data/dictionary";
    
    const [hiraganaArray, katakanaArray] = kana;
    const availableHiragana = Object.keys(hiraganaArray);
    const availableKatakana = Object.keys(katakanaArray);
    
    let values:string[] = [];
    let input: string = "";
    let currentIndex: number = 0;

    function print(str){
        console.group(str)
    }
    const questions = randomizeKana()
    
    function handleClick(){
        if(currentIndex < questions.length){
            currentIndex++;
            
            input = ''
        }
    }

    function handleSubmit(){
        handleClick()
    }

    function addKana(currentKeys: string[], currentValues: string[], kanaGroup:string[]): void{
        let currentElementIndex: number = Math.floor(Math.random() * currentKeys.length)
        const currentKey: string = currentKeys[currentElementIndex]
        const currentValue: string[] = currentValues[currentElementIndex]
        values.push(currentValue)

        if(kanaGroup.includes(currentKey)){
            currentElementIndex = Math.floor(Math.random() * currentKeys.length)
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
                    const currentValues: string[] = Object.values(katakanaArray[$selectedKanaGroup[i]]);
                    addKana(currentKeys, currentValues, kanaGroup)
                }
            }
        }
        return kanaGroup;
    }
    function verify(kanaValues, kanaKey, index){
        if(kanaValues[index] === input){
            print("pass")
        }
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
        {values[index]}
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
