<script lang='ts'>
    import { kana } from "../../data/dictionary";
    import { selectedKanaGroup } from "../../stores";
    import {
        clearAll, 
        selectAll, 
        quizMe, 
        handleCheckboxChange
    } from "../helpers/helpersFunctions";

    const [hiraganaArray, katakanaArray] = kana
    const availableHiragana = Object.keys(hiraganaArray)
    const availableKatakana = Object.keys(katakanaArray)

</script>

<section>
    <div class="kanaGroup">

        <!-- HIRAGANA -->
        <div class="hiragana kana">
            {#each availableHiragana as group, index}
                {#if index < 10}
                    <label>
                        <input class="kana-selection" type="checkbox" value={group} on:click={(event)=> handleCheckboxChange(event, selectedKanaGroup)}>
                        <span class="checkmark"></span>
                        {Object.keys(hiraganaArray[availableHiragana[index]])[0]}
                    </label>
                {/if}
            {/each}
        </div>
        <!-- Special HIRAGANA -->
        <div id="specialGroup" class="visible">
            
            <div class="s-hiragana s-kana">
            
                {#each availableHiragana as _, index}
                    {#if index+10 < availableHiragana.length}
                        <label>
                            <input id="" type="checkbox" value={availableHiragana[index+10]} on:click={(event)=> handleCheckboxChange(event, selectedKanaGroup)}>
                            <span class="checkmark"></span>
                            {Object.keys(hiraganaArray[availableHiragana[index+10]])[0]}
                        </label>
                    {/if}
                {/each}
            </div>
            <hr>
        </div>

        <!-- KATAKANA -->
        <div class="katakana kana">
            {#each availableKatakana as group, index}
                {#if index < 10}
                    <label>
                        <input class="kana-selection" type="checkbox" value={group} on:click={(event)=> handleCheckboxChange(event, selectedKanaGroup)}>
                        <span class="checkmark"></span>
                        {Object.keys(katakanaArray[availableKatakana[index]])[0]}
                    </label>
                {/if}
            {/each}
        </div>
        <!-- SPECIAL KATAKANA -->
        <div id="specialGroup" class="visible">
            
            <div class="s-katakana s-kana">
            
                {#each availableKatakana as group, index}
                    {#if index+10 < availableKatakana.length}
                        <label>
                            <input type="checkbox" value={group} on:click={(event)=> handleCheckboxChange(event, selectedKanaGroup)}>
                            <span class="checkmark"></span>
                            {Object.keys(katakanaArray[availableKatakana[index+10]])[0]}
                        </label>
                    {/if}
                {/each}
            </div>    
        </div>
        
    </div>
    
    <div class="btn-container">
        <div class="buttons">
            <button class="button" on:click={selectAll}>Select All</button>
            <button class="button" on:click={clearAll}>Clear All</button>
            <button class="button" on:click={quizMe($selectedKanaGroup)}>Quiz Me</button>    
        </div>

        <h1 id="no_groups" class="notVisible">
            Please select a group of kana
        </h1>
    </div>

</section>

<style>
    .switch-container{
        display: flex;
        gap: 0.5rem;

        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
    .switch input{
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider::before{
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        bottom: 4px;
        background-color: #ffa8a8;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        border-radius: 50%;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
    .slider{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ff6f6f;
        -webkit-transition: .4s;
        transition: .5s ease;
        border-radius: 34px;
    }
    .slider:before {
        content: "";
        position: absolute;
        top: -3px;
        left: -2px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .switch{
        display: inline-block;
        position: relative;
        width: 50px;
        height: 20px;
        transition: background-color 0.3s;
    }
    .switch input:checked + .slider{
        background-color: #21f35d;
    }
    .switch input:focus + .slider{
        box-shadow: 0 0 1px #21f35d;
    }
    .switch input:checked + .slider:before{
        transform: translateX(26px);
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        box-shadow: 0 0 20px rgba(220, 255, 193, 0.4);
        background-color: #27ff64;
        transition: transform 0.2s ease;
    }

    .notVisible{
        visibility: hidden;
        color: #ff6f6f;
    }
    #specialGroup, .visible{
        animation: fadeIn 2s ease-in-out;
    }
    .visible{
        display: none;
    }

    .kanaGroup{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        width: 600px;
        flex-direction: column;
        gap: 0.5rem;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
    .kana, .s-kana{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .kana input, .s-kana input{
        display: none;
    }
    .checkmark{
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: #eee;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.363);
        border-radius: 2px;
    }
    .kana input:checked + .checkmark, .s-kana input:checked + .checkmark{
        background-color: #21f364;
        box-shadow: none;
    }
    .kana label{
        display: inline-block;
        font-size: 22px;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        
    }
    .s-kana label{
        display: inline-block;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    .btn-container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
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
    button{
        background-color: #ffffff;
        border-radius: 10px;
        width: 100px;
        height: 50px;
        border: none;
        user-select: none;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.363);
    }
    button:active{
        transform: scale(1.2);
        background-color: rgb(172, 172, 172);
    }
    button:last-child{
        font-weight: bolder;
    }


    @keyframes fadeIn{
        from{opacity: 0;}
        to{opacity: 1;}
    }
    @keyframes fadeOut{
        from{opacity: 1;}
        to{opacity: 0;}
    }
    @media (max-width: 768px){
        section{
            
        }
        .kanaGroup{
            display: flex;
            flex-wrap: wrap;
            gap: 1.3rem;
            width: 300px;
            height: 100%;
        }
        input[type="checkbox"]{
            transform: scale(1.5);
            margin: 10px;
        }
    }
    

</style>