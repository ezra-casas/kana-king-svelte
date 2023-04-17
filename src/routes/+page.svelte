<script lang="ts">    
    import DisplayKanaSelection from "../lib/components/DisplayKanaSelection.svelte"
    import {toggleClassOnElements} from "../lib/helpers/helpersFunctions";
    import {version} from "../lib/versioning/version"

    function showHidden(): void{
        
        toggleClassOnElements(".s-kana", "kana-selection", "input")
        toggleClassOnElements("#specialGroup", "visible")
        
        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        if(isMobile) { toggleClassOnElements('.container', 'height') }
        

        
    }
</script>

<div class="container height">
    <div>
        <h1>Kana King</h1>
        <hr>
    </div>
    <section>
            <DisplayKanaSelection/>
            <div class="switch-container">
                <label class="switch">
                    <input type="checkbox" on:click={showHidden}>
                    <span class="slider"></span>
                </label>
                Special Kana
            </div>
    </section>
    

    <footer>
        {version}
    </footer>
</div>


<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 0;
        justify-content: space-between;
        background-color: rgb(36, 50, 68);
    }

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
    .height{
        height: 100vh;
    }

    section{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    h1{
        font-size: 4rem;
    }
    hr{
        color: #fff;
    }
    footer{
        padding: 0;
        margin: 0;
    }
    @media (max-width: 767px){
        h1{
            font-size: 3rem;
        }
    }
    @media only screen and (max-width: 320px){
        .height{
            height: auto;
        }
    }
</style>