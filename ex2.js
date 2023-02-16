let b = [54, 21, 65, 32, 43, 76, 87, 98];

console.log(b.length);
b[3] = 59;

console.log(b);

b.push(22);

console.log(b);
b.sort().pop();

console.log(b);

b.push(23, 23 ,21 ,163 ,123);

console.log(b.join(" + "));

console.log(b[b.length - 1]);

let exTwo = document.getElementById("ex2f");

exTwo.innerHTML = b[5];