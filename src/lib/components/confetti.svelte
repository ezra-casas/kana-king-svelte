<script src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.9.3/tsparticles.confetti.bundle.min.js">
    const amount = 400
    const count = Math.floor(Math.random() * amount),
    defaults = {
        origin: {y: 0.7}, 
    };

    function fire(particleRatio, opts){
        confetti(
            Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio),
            })
        );
    }
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    })
    fire(0.2, {
        spread: 60,
    })
    fire(0.45, {
        spread: 97,
        decay: 0.93,
        startVelocity: 55,
    })
    fire(0.12, {
        spread: 126,
        startVelocity: 35,
        decay: 0.86,
        scalar: 1.2,
    })
    fire(0.4, {
        spread: 111,
        startVelocity: 55,
    })
</script>
<div class="confetti-container">
</div>

