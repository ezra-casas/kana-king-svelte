interface Confetti{
    confetti: HTMLDivElement;
    x: Number;
    y: number;
    angle: number;
    velocity: number;
    color: string;
}

class ConfettiAnimation{
    private container: HTMLDivElement;
    private confettis: Confetti[] = [];

    constructor(){
        this.container = document.createElement('div');
        this.container.classList.add('confetti-container');
        document.body.appendChild(this.container);
    }

    private createConfetti(): Confetti{
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        this.container.appendChild(confetti);

        const x = Math.random() * window.innerWidth;
        const y = -20;
        const angle = Math.random() * 360;
        const velocity = Math.random() * 10 + 5;
        const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        return {confetti, x, y, angle, velocity, color}
    }

    private updateConfetti(confetti: Confetti, deltaTime: number){
        const {x, y, angle, velocity} = confetti;
        const radian = angle * Math.PI / 180;

        confetti.x = x + Math.cos(radian) * velocity * deltaTime;
        confetti.y = y + Math.sin(radian) * velocity * deltaTime + 0.5 * 9.81 * deltaTime * deltaTime;
        confetti.angle += Math.random() * 0.5 - 0.25;

        confetti.confetti.style.transform = `translate(${confetti.x}px, ${confetti.y}px) rotate(${confetti.angle}deg)`;
    }

    private removeConfetti(confetti: Confetti) {
        confetti.confetti.remove();
        const index = this.confettis.indexOf(confetti);
        this.confettis.splice(index, 1);
      }
    
      private animate() {
        const now = performance.now();
        const deltaTime = (now - this.lastTime) / 1000;
        this.lastTime = now;
    
        if (Math.random() < 0.2) {
          const confetti = this.createConfetti();
          this.confettis.push(confetti);
        }
    
        this.confettis.forEach((confetti) => {
          this.updateConfetti(confetti, deltaTime);
    
          if (confetti.y > window.innerHeight) {
            this.removeConfetti(confetti);
          }
        });
    
        requestAnimationFrame(() => this.animate());
      }
    
      private lastTime: number = performance.now();
    
      start() {
        requestAnimationFrame(() => this.animate());
      }
}


export const confettiAnimation = new ConfettiAnimation();

