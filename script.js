const simonButtons = document.querySelectorAll(".button");
let startButton = document.querySelector(".start-button");

class Colors {
    constructor() {
        this.numbers = [];
    }

    values() {
        return this.numbers;
    }

    addplayerNumber(num) {
        this.numbers.push(num);
    }

    generateRandom() {
        let randomInt = Math.floor(Math.random() * 4);
        this.numbers.push(randomInt);
    }

    initialColors() {
        for (let i = 0; i < 4; i++) {
            this.generateRandom();
        }
    }

    buttonBlink(number) {
        simonButtons[number].classList.add("activated");
        console.log(simonButtons[number].innerText);
        setTimeout(() => {
            simonButtons[number].classList.remove("activated");
        }, 500);
    }

    simonDisplay() {
        let count = 0;
        for (let i = 0; i < this.numbers.length; i++) {
            switch (this.numbers[i]) {
                case 0:
                    setTimeout(() => {
                        this.buttonBlink(0);
                    }, (i + 1) * 700); break;
                case 1:
                    setTimeout(() => {
                        this.buttonBlink(1);
                    }, (i + 1) * 700); break;
                case 2:
                    setTimeout(() => {
                        this.buttonBlink(2);
                    }, (i + 1) * 700); break;
                case 3:
                    setTimeout(() => {
                        this.buttonBlink(3);
                    }, (i + 1) * 700); break;
            }
            count++;
        }
        setTimeout(() => { startButton.textContent = "Your Turn"; }, (count + 1) * 700);
    }

    start() {
        setTimeout(() => { startButton.textContent = ""; }, 300);
        this.initialColors();
        this.simonDisplay();
    }

    compare(simon, i) {
        let arrayCpu = simon.values();
        
        if (arrayCpu[i] == this.numbers[i]) {
            startButton.textContent = "Right!";
            if(i != arrayCpu.length - 1){
                setTimeout(() => { startButton.textContent = "Next Move"; }, 1000);
            }
            else {
                setTimeout(() => { startButton.textContent = "Next Level"; }, 1000);
            }
        }

        else {
            startButton.textContent = "Wrong!";
            setTimeout(() => { startButton.textContent = "Game Over!"; }, 1000);
            return false;
        }
    }

    nextLevel(){
        this.generateRandom();
        this.simonDisplay();
    }

    running(simon) {
        let arrayCpu = simon.values();
        for(let i = 0; i < arrayCpu.length; i++){
            this.compare(simon,i);
            if(this.compare(simon,i) == false){
                break;
            }
        }
        simon.nextLevel();
    }

    reset() {
        startButton.textContent = "Start";
        this.numbers = [];
    }

}

let cpu = new Colors();
let player = new Colors();

function clickableColors() {
    simonButtons.forEach(button => {
        button.addEventListener("click", function () {
            player.addplayerNumber(this.innerText);
            console.log(this.innerText);
            /*             player.compare(cpu); */
        })
    });
}

function startGame() {
    /*     cpu.reset();
        player.reset(); */
    cpu.start();
    clickableColors();
}