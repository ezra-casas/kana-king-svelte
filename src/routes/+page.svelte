<script>    
    import {selectedKanaGroup} from "../stores"
    import DisplayKanaSelection from "../lib/components/DisplayKanaSelection.svelte"
    import { version } from "../lib/versioning/version";
</script>

<div class="container">
    <div>
        <h1>Kana King</h1>
        <hr>
    </div>
    <section>
        <div class="selection">
            <DisplayKanaSelection/>
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
        height: 100vh;
        padding: 0;
        margin: 0;
        justify-content: space-between;
        background-color: rgb(36, 50, 68);
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
    @media only screen and (max-width: 767px){
        .container{
            padding: 0 15px;
        }
        h1{
            font-size: 3rem;
        }
    }
</style>