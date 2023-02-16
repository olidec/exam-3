const b = [54,21,65,32,43,76,87,98];

let length = b.length;
document.getElementById("Numbers").innerHTML = b.length;


b[3] = 59;
document.getElementById("ex2").innerHTML = b;

b.push(22);
document.getElementById("ex3").innerHTML = b;

document.getElementById("ex4").innerHTML = b.sort().pop();

const o = ['i am finished']
document.getElementById("ex2f").innerHTML = o;

let Numbers = [54 + 21 + 65 + 32 + 43 + 76 + 87 + 98]
document.getElementById("ex8").innerHTML = Numbers;

