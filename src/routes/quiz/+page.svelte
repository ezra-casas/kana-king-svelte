<script lang="ts">
    import { selectedKanaGroup } from "../../stores";
    import { kana } from "../../data/dictionary";
    
    const [hiraganaArray, katakanaArray] = kana
    const availableHiragana = Object.keys(hiraganaArray)
    const availableKatakana = Object.keys(katakanaArray)
    

function randomizeKana(): string[] {
    let kanaGroup: string[] = [];

    while (kanaGroup.length < 10) {
        for (let i: number = 0; i < $selectedKanaGroup.length; i++) {
        let group: string = $selectedKanaGroup[i];
        let groupFirstLetter: string = group[0];
        let isLessThanKanaGroup: boolean = kanaGroup.length < 10 ? true : false;

        if (groupFirstLetter === "h" && isLessThanKanaGroup) {
            const currentArray: string[] = Object.keys(hiraganaArray[$selectedKanaGroup[i]]);
            let randInt: number = Math.floor(Math.random() * currentArray.length);
            const addToArray: string = currentArray[randInt];

            if (kanaGroup.includes(addToArray)) {
            randInt = Math.floor(Math.random() * 5);
            }
            kanaGroup.push(addToArray);
        }

        if (groupFirstLetter === "k" && isLessThanKanaGroup) {
            const currentArray: string[] = Object.keys(katakanaArray[$selectedKanaGroup[i]]);
            let randInt: number = Math.floor(Math.random() * currentArray.length);
            const addToArray: string = currentArray[randInt];

            if (addToArray.includes(addToArray)) {
            randInt = Math.floor(Math.random() * 5);
            }
            kanaGroup.push(addToArray);
        }
        }
    }
    return kanaGroup;
}
    const questions = randomizeKana()
    console.log(questions)
</script>
<h1>Quiz page</h1>
<p>{$selectedKanaGroup}</p>


<style>
</style>