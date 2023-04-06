<script lang='ts'>
    import { kana } from "../../data/dictionary";
    import { selectedKanaGroup } from "../../stores";
    import {clearAll, selectAll, quizMe} from "../helpers/helpersFunctions";

    const [hiraganaArray, katakanaArray] = kana
    const availableHiragana = Object.keys(hiraganaArray)
    const availableKatakana = Object.keys(katakanaArray)

    function boxIsChecked(event:MouseEvent){
        const inputElement = event.target as HTMLInputElement;
        const isChecked = inputElement.checked;
        const group = inputElement.value;        

        if(isChecked){
            selectedKanaGroup.update(array => [...array, group])
        }else{
            const index = $selectedKanaGroup.indexOf(group)
            if(index !== -1){
                selectedKanaGroup.update(group => [...group.filter(x => x !== group[index])])
            }
        }
    }

</script>

<section>

    <div class="kanaGroup">

        <!-- HIRAGANA -->
        <div class="hiragana kana">
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
        <div class="katakana kana">
            {#each availableKatakana as group, index}
            {#if index < 10}
                <label>
                    <input type="checkbox" value={group} on:click={boxIsChecked}>
                    {Object.keys(katakanaArray[availableKatakana[index]])[0]}
                </label>
            {/if}
            {/each}
        </div>

    </div>
    
    <div class="buttons">
        <button class="button" on:click={selectAll}>Select All</button>
        <button class="button" on:click={clearAll}>Clear All</button>
        <button class="button" on:click={quizMe($selectedKanaGroup)}>Quiz Me</button>    
    </div>

</section>

<h1 id="no_groups" class="notVisible">Please select a group of kana</h1>

<style>

    .notVisible{
        visibility: hidden;
    }
    .kanaGroup{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .kana{
        display: flex;
        
    }
    section{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .buttons{
        padding-top: 15px;
        display: flex;   
        gap: 1.2rem;
        justify-content: space-around;

    }

    label{
        font-size: 1.4rem;
    }
    button{
        background-color: #ffffff;
        border-radius: 10px;
        width: 100px;
        height: 32px;
        border: none;
        user-select: none;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.363);
    }
    button:active{
        transform: scale(1.2);
    }
    button:last-child{
        font-weight: bolder;
    }
</style>