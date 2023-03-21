<script lang='ts'>
    import { kana } from "../../data/dictionary";
    import { selectedKanaGroup } from "../../stores";
    // import {clearAll} from "./helpersFunctions";
    const [hiraganaArray, katakanaArray] = kana
    const availableHiragana = Object.keys(hiraganaArray)
    const availableKatakana = Object.keys(katakanaArray)

    const isSelected:string[] = []

    function boxIsChecked(e:Event){
        let isChecked = e.target.checked
        let group = e.target.value

        if(isChecked){
            isSelected.push(group)
            selectedKanaGroup.update(array => [...array, group])
        }else{
            let index = $selectedKanaGroup.indexOf(group)
            console.log(index)
            if(index !== -1){
                isSelected.splice(index, 1)
                selectedKanaGroup.update(group => [...group.filter(x => x !== group[index])])
                
            }

        }
        console.log($selectedKanaGroup)
    }

    function selectAll(e:Event){
        e.preventDefault()
        let checkboxes = document.querySelectorAll("input")

        checkboxes.forEach(box => {
            box.checked = true
            selectedKanaGroup.update(array => [...array, box.value])
        })
    }

    function clearAll(e:Event){
        e.preventDefault()
        let checkboxes = document.querySelectorAll('input')

        checkboxes.forEach(box => {
            box.checked = false
            isSelected.splice(0, isSelected.length)
        })
        selectedKanaGroup.set([])
    }

    function quizMe(){
        
    }
</script>

<section>
    DisplayKanaSelection
    <button on:click={selectAll}>Select All</button>
    <button on:click={clearAll}>Clear All</button>
    <button on:submit={quizMe}>Submit</button>

    <input on:click={boxIsChecked} type="checkbox" value="Ezra"/>Ezra 
    <input on:click={boxIsChecked} type="checkbox" value="Marianne"/>Marianne
    <input on:click={boxIsChecked} type="checkbox" value="Hiro"/>Hiro
    <input on:click={boxIsChecked} type="checkbox" value="Zeus"/>Zeus
</section>

<h1>Selected kana: {$selectedKanaGroup}</h1>