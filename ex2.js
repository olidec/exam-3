const b = [54, 21, 65, 32, 43, 76, 87, 98]

document.getElementById("1").innerHTML = b.length;
document.getElementById("2").innerHTML = b[3] = 59;
document.getElementById("3").innerHTML = b.push(22);
document.getElementById("4").innerHTML = b.sort().pop();

document.getElementById("ex2f").innerHTML = b[4]