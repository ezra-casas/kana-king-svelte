<script>
    import { selectedKanaGroup } from "../../stores";
    import { kana } from "../../data/dictionary";
    
    const [hiraganaArray, katakanaArray] = kana
    const availableHiragana = Object.keys(hiraganaArray)
    const availableKatakana = Object.keys(katakanaArray)
    
    let kanaGroup = [];

    function randomizeKana(){
        
        // If more than one group is selected:
        if($selectedKanaGroup.length > 1){
            let count = $selectedKanaGroup.length

            // Loop through length of group selection
            for(let i = 0; i < count; i++){

                //MAYBE: maybe add them as a group (object) 
                const randKanaIndex = Math.floor(Math.random() * 4)
                // MAYBE: create a counter of how many questions to get
                // Would this counter / loop be within the length of the group
                // selection or the outer loop?

                for(; kanaGroup.length < 10; ){
                                    
                    if($selectedKanaGroup[i][0] === "h"){
                        console.log("Hiragana")
                        const addToArray = Object.keys(hiraganaArray[$selectedKanaGroup[i]])[randKanaIndex]
                        kanaGroup.push(addToArray)
                    }else{
                        console.log("Katakana")
                        const addToArray = Object.keys(katakanaArray[$selectedKanaGroup[i]])[randKanaIndex]

                        kanaGroup.push(addToArray)
                    }
                }  
            }
        }
    }


    randomizeKana()
    console.log(kanaGroup)
</script>
<h1>Quiz page</h1>
<p>{$selectedKanaGroup}</p>


<style>
</style>