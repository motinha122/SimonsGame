class Car{
    constructor(model,quantity){
        this.model = model;
        this.quantity = quantity;
    }

    Model(){
        return this.model;
    }
}

const carList = ["Saveiro","Gol","Uno","Corsa","Parati"];
const carQtd = [2000,5465,3405,4566,5555];

let cars = new Array(carList.length);

for(let i = 0; i < carList.length; i++){
    cars[i] = new Car(carList[i],carQtd[i]);
}

console.log(cars[0]);

/* compare(simon,i) {
    let arrayCpu = simon.values();

    if (arrayCpu[i] == this.numbers[i]) {
        startButton.textContent = "Right!";
        setTimeout(() => { startButton.textContent = "Next Move"; }, 1000);
    }

    else {
        startButton.textContent = "Wrong!";
        this.reset();
        simon.reset();
        console.log(simon.values());
        setTimeout(() => { startButton.textContent = "Game Over!"; }, 1000);
        setTimeout(() => { startButton.textContent = "Start"; }, 2000);
    }
}
 */
/* let simonButtons = document.querySelectorAll(".button");

simonButtons.forEach(button => {
    button.addEventListener("click",function(){
        print(this.innerText);
    })
});

let playerColors = [];

let cpuColors = [];

function print(text){
    playerColors.push(text);
}

function randomInt(array){
    let num = Math.floor(Math.random()*4);
    array.push(num);
}

for (let i = 0; i < 4; i++) {
    randomInt(cpuColors);     
}
console.log(cpuColors);

for(i = 0; i < 5; i++){
    
    console.log(cpuColors);
}

compare(simon) {
    let arrayCpu = simon.values();
    let currentSize = 0;
    for (let i = 0; i < this.numbers.length; i++) {
        if(currentSize < this.numbers.length){
            currentSize++;            
            if(arrayCpu.length != 0){            
                if (arrayCpu[i] == this.numbers[i]) {
                    startButton.textContent = "Right!";
                    setTimeout(() => { startButton.textContent = "Next Move"; }, 1000);
                }
                else {
                    startButton.textContent = "Wrong!";
                    this.reset();
                    simon.reset();
                    console.log(simon.values());
                    setTimeout(() => { startButton.textContent = "Game Over!"; }, 1000);
                    setTimeout(() => { startButton.textContent = "Start"; }, 2000);
                }
            }
        }else{
            arrayCpu.generateRandom();
            startButton.textContent = "Level finished";
        }
    }
} */