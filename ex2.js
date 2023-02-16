const b = [54, 21, 65, 32, 43, 76, 87, 98]

document.getElementById("1").innerHTML = b.length;
//outputs the length of the array

document.getElementById("2").innerHTML = b[3] = 59;
//changes the 4th element of the array to 59

document.getElementById("3").innerHTML = b.push(22);
//adds 22 to the end of the array

document.getElementById("4").innerHTML = b.sort().pop();
//the sort() sorts the array alphabetically and the pop() removes the last element of an array


document.getElementById("ex2f").innerHTML = b[4]