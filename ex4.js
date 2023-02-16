document.getElementById("tinkerbell");

let ctx = Canvas.getContext("2d");
let x = [100,];
let y = [0];
let tinkerbellX = 10; 

ctx.drawImage(tinkerbell,tinkerbellX,10,10);

document.addEventListener("mousemove",(e) => {
    something.style.left = '${e.x}px';
})