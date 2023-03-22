<script>
    import { selectedKanaGroup } from "../../stores";
    import { kana } from "../../data/dictionary";

    const [hiraganaArray, katakanaArray] = kana
    const availableHiragana = Object.keys(hiraganaArray)
    const availableKatakana = Object.keys(katakanaArray)
    

    function getRandomKana(){
        console.log(hiraganaArray[$selectedKanaGroup[0]])
        console.log(Object.keys(hiraganaArray[$selectedKanaGroup[0]]))
    }

    getRandomKana()

</script>
<h1>Quiz page</h1>
<p>{$selectedKanaGroup}</p>


<style>
</style>