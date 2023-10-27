let colorSel = "white";
let ms = false;
let n = 16;
const container = document.querySelector("#container");
const sel = document.querySelector("#sel");
container.style.maxWidth = "500px";
container.style.maxHidth = "500px";

const blk = document.querySelector("#blk")
const custom = document.querySelector("#cstm")
const erase = document.querySelector("#ers")
const clr = document.querySelector("#clr")
const sliderValue = document.querySelector("#t");
const slider = document.querySelector("#myRange");
sliderValue.innerHTML = slider.value;
slider.oninput = function() {
    n = this.value;
    sliderValue.innerHTML = this.value;
    container.innerHTML = "";
    createGrid(n);
  }

blk.addEventListener("click", () => {
    colorSel = "Black";
    blk.style.background = "rgb(130, 130, 130)";
    custom.style.background = "white";
    erase.style.background = "white";
});

custom.addEventListener("change", () => {
    colorSel = event.target.value;
    custom.style.background = "rgb(130, 130, 130)";
    blk.style.background = "white";
    erase.style.background = "white";
});

erase.addEventListener("click", () => {
    colorSel = "White";
    erase.style.background = "rgb(130, 130, 130)";
    custom.style.background = "white";
    blk.style.background = "white";
});



container.addEventListener("mousedown",() =>{
    ms = true;
});
container.addEventListener("mouseup", () => {
    ms = false;
});



clr.addEventListener("click", () => {
    container.innerHTML = "";
    createGrid(n);
});

function createGrid(a){
    for(let i = 1;i<=a;i++){
        const coloums = document.createElement("div");
        coloums.classList.add("coloum",i);
        container.appendChild(coloums);
        for(let j = 1;j<=a;j++){
            const pixel = document.createElement("div");
            pixel.classList.add("pixel",i+"*"+j);
            coloums.appendChild(pixel);
            pixel.addEventListener("mouseover", () =>{
                if(ms == true){
                pixel.style.background = colorSel;
                }
            });
            pixel.addEventListener("click", ()=>{
                pixel.style.background = colorSel;
            });
        }
    }
}

createGrid(n);