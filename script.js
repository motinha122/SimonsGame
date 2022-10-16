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
        console.log("Button: " + simonButtons[number].innerText);
        setTimeout(() => {
            simonButtons[number].classList.remove("activated");
        }, 500);
    }

    start() {
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
        setTimeout(() => {
            startButton.textContent = "Your Turn";
        }, (count + 1) * 700);
    }

    compare(simon, i) {
        let arrayCpu = simon.values();
        console.log("Simon: " + arrayCpu[i] + " - Player: " + this.numbers[i]);
        if (arrayCpu[i] == this.numbers[i]) {
            startButton.textContent = "Right!";
            if (i != arrayCpu.length - 1) {
                setTimeout(() => { startButton.textContent = "Next Move"; }, 1000);
            }
            else {
                setTimeout(() => { startButton.textContent = "Next Level"; }, 1000);
                simon.nextLevel();
            }
        }

        else {
            startButton.textContent = "Wrong!";
            setTimeout(() => { startButton.textContent = "Game Over!"; }, 1000);
            this.lose(simon);
        }
    }

    nextLevel() {
        index = 0;
        this.generateRandom();
        console.log(index);
        this.start();
    }

    lose(simon) {
        index = 0;
        simon.reset();
        this.reset();
        simon.generateRandom();
        /*        simon.initialColors();  */
        startButton.textContent = "Start";
    }

    reset() {
        this.numbers = [];
    }
}

let cpu = new Colors();
let player = new Colors();
let index = 0;

/* cpu.initialColors(); */
cpu.generateRandom();
/* function lose(){
    cpu.reset();
    player.reset();
    index = 0;
    cpu.start();
} */

simonButtons.forEach(button => {
    button.addEventListener("click", function () {
        player.addplayerNumber(this.innerText);
        console.log("clicked button: " + this.innerText);
        console.log("index: " + index);
        player.compare(cpu, index);
        index++;
    })
});

function startGame() {
    cpu.start();
}
