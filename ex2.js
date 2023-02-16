let b = [54,21,65,32,43,76,87,98]
document.getElementById('i').innerHTML = b.length
b[3] = 59
document.getElementById('ii').innerHTML = b
b.push(22)
document.getElementById('iii').innerHTML = b
b.sort().pop()
document.getElementById('iv').innerHTML = b
document.getElementById('ex2f').innerHTML = b.join(" + ")

