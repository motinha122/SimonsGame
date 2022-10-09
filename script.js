let simonButtons = document.querySelectorAll(".button");

simonButtons.forEach(button => {
    button.addEventListener("click", function () {
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

    startArray() {
        for (let i = 0; i < 4; i++) {
            this.addRandom();
        }
    }

    values() {
        console.log(this.numbers);
    }

    addclass(number) {
        simonButtons[number].classList.add("activated");
        setTimeout(() => {
            simonButtons[number].classList.remove("activated");
        },200);
    }

    simonDisplay() {
        let Array = this.numbers;
        for (let i = 0; i < Array.length; i++) {
            switch (Array) {
                case 0:
                    setTimeout(()=>{
                        simonButtons[i].addclass(0);
                    },(i+1)*600); break;
                case 1:
                    setTimeout(()=>{
                        simonButtons[i].addclass(1);
                    },(i+1)*600); break;
                case 2:
                    setTimeout(()=>{
                        simonButtons[i].addclass(2);
                    },(i+1)*600); break;
                case 3:
                    setTimeout(()=>{
                        simonButtons[i].addclass(3);
                    },(i+1)*600); break;
            }
        }
    }
    
}

let cpu = new Colors();

cpu.startArray();
cpu.addRandom();
cpu.values();
cpu.simonDisplay();