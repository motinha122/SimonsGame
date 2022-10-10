let simonButtons = document.querySelectorAll(".button");

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

