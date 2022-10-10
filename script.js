const simonButtons = document.querySelectorAll(".button");

simonButtons.forEach(button => {
    button.addEventListener("click", function() {
        console.log(this.innerText);
    })
});

class Colors {
    constructor() {
        this.numbers = [];
    }

    addRandom() {
        let randomInt = Math.floor(Math.random() * 4);
        this.numbers.push(randomInt)
    }

    initialColors() {
        for (let i = 0; i < 4; i++) {
            this.addRandom();
        }
    }

    values() {
        console.log(this.numbers);
    }

    buttonBlink(number) {
        simonButtons[number].classList.add("activated");
        console.log(simonButtons[number]);
        setTimeout(() => {
            simonButtons[number].classList.remove("activated");
        },500);
    }

    simonDisplay() {
        let Array = this.numbers;
        for (let i = 0; i < Array.length; i++) {
            switch (Array[i]) {
                case 0:
                    setTimeout(()=>{
                        this.buttonBlink(0);
                    },(i+1)*700); break;
                case 1:
                    setTimeout(()=>{
                        this.buttonBlink(1);
                    },(i+1)*700); break;
                case 2:
                    setTimeout(()=>{
                        this.buttonBlink(2);
                    },(i+1)*700); break;
                case 3:
                    setTimeout(()=>{
                        this.buttonBlink(3);
                    },(i+1)*700); break;
            }
        }
    }
    

}

let cpu = new Colors();

cpu.initialColors();
cpu.values();
cpu.simonDisplay();