const container = document.querySelector("#container");
const sel = document.querySelector("#sel");sel.textContent = "select";
container.style.maxWidth = "500px";
container.style.maxHidth = "500px";
let ms = false;
container.addEventListener("mousedown",() =>{
    ms = true;
    console.log(ms);
});
container.addEventListener("mouseup", () => {
    ms = false;
    console.log(ms);
});
let n = 100;
let wdth = 500/n+"px";
for(let i = 1;i<=n;i++){
    for(let j = 1;j<=n;j++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel",i+"*"+j);
        pixel.style.width = wdth;
        pixel.style.height = wdth;
        container.appendChild(pixel);
        pixel.addEventListener("mouseover", () =>{
            if(ms == true){
            console.log(ms);
            pixel.style.background = "black";
            }
        });
        pixel.addEventListener("click", ()=>{
            pixel.style.background = "black";
        });
    }
}
