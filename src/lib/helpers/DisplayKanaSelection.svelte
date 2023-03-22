<script lang='ts'>
    import {goto} from "$app/navigation"

    import { kana } from "../../data/dictionary";
    import { selectedKanaGroup } from "../../stores";
    import {clearAll, selectAll} from "./helpersFunctions";

    const [hiraganaArray, katakanaArray] = kana
    const availableHiragana = Object.keys(hiraganaArray)
    const availableKatakana = Object.keys(katakanaArray)


    function boxIsChecked(e:Event){
        const isChecked = e.target?.checked
        const group = e.target?.value


        if(isChecked){
            selectedKanaGroup.update(array => [...array, group])
        }else{
            const index = $selectedKanaGroup.indexOf(group)
            if(index !== -1){
                selectedKanaGroup.update(group => [...group.filter(x => x !== group[index])])
            }
        }
    }

    export function quizMe(){
        if($selectedKanaGroup.length > 0){
            goto("/quiz")
        }else{
            const isVisible = document.getElementById('no_groups')
            if(isVisible){
                isVisible.style.visibility = 'visible'
            }
        }
    }

</script>

<section>
    DisplayKanaSelection
    <button on:click={selectAll}>Select All</button>
    <button on:click={clearAll}>Clear All</button>
    <button on:click={quizMe}>Quiz Me</button>

<!-- HIRAGANA -->
    <div>
        {#each availableHiragana as group, index}
            {#if index < 10}
                <label>
                    <input type="checkbox" value={group} on:click={boxIsChecked}>
                    {Object.keys(hiraganaArray[availableHiragana[index]])[0]}
                </label>
            {/if}
        {/each}
    </div>
<!-- KATAKANA -->
    <div>
        {#each availableKatakana as group, index}
        {#if index < 10}
            <label>
                <input type="checkbox" value={group} on:click={boxIsChecked}>
                {Object.keys(katakanaArray[availableKatakana[index]])[0]}
            </label>
        {/if}
        {/each}
    </div>
</section>

<h1 id="no_groups" class="notVisible">Please select a group of kana</h1>

<style>
    .notVisible{
        visibility: hidden;
    }
</style>