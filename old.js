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

simonDisplay() {
    this.numbers.forEach(e => {
        let index = this.numbers.indexOf(e);
        console.log(e);
        switch (e) {
            case 0:
                setTimeout(()=>{
                    this.addclass(0);
                },(index+1)*600); break;
            case 1:
                setTimeout(()=>{
                    this.addclass(1);
                },(index+1)*600); break;
            case 2:
                setTimeout(()=>{
                    this.addclass(2);
                },(index+1)*600); break;
            case 3:
                setTimeout(()=>{
                    this.addclass(3);
                },(index+1)*600); break;
        }
    })
}

simonDisplay() {
    this.numbers.forEach(e => {
        let index = this.numbers.indexOf(e);
        console.log(e);
        switch (e) {
            case 0:
                setTimeout(()=>{
                    this.addclass(0);
                },(index+1)*600); break;
            case 1:
                setTimeout(()=>{
                    this.addclass(1);
                },(index+1)*600); break;
            case 2:
                setTimeout(()=>{
                    this.addclass(2);
                },(index+1)*600); break;
            case 3:
                setTimeout(()=>{
                    this.addclass(3);
                },(index+1)*600); break;
        }
    })
}