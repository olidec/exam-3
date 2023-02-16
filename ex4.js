document.getElementById("mydiv").onmousemove = function(e) {
    document.getElementById("tinkerbell").style.top = e.pageY*1 + 5 + "px";
    document.getElementById("tinkerbell").style.left = e.pageX*1 + 5 + "px";
}