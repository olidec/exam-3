let b = [54, 21, 65, 32, 43, 76, 87, 98];



console.log(b.length);
b[3] = 59;

console.log(b);

b = [54, 21, 65, 32, 43, 76, 87, 98];

b.push(22);

console.log(b);

 b = [54, 21, 65, 32, 43, 76, 87, 98];

b.sort().pop();

console.log(b);

b = [54, 21, 65, 32, 43, 76, 87, 98];

console.log(b[7]);

b.push(23, 23 ,21 ,163 ,123); // test values

console.log(b.join(" + "));

console.log(b[b.length - 1]);

b = [54, 21, 65, 32, 43, 76, 87, 98];

//All above is code to see if my answers are right

let exTwo = document.getElementById("ex2f");

exTwo.innerHTML = b[5];