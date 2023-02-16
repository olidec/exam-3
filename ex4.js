document.getElementById("Tinkerbell") 
var xPositions = [100, 200];

var draw = function() 
    if (mouseIsPressed) {
        xPositions.push(mouseX);
    }
    noStroke();
    background(212, 254, 255);
    
    stroke(64, 117, 207);
    fill(196, 33, 255);
    for (var i = 0; i < xPositions.length; i++) { 
        var hopper = getImage("tinkerbell");
    image(hopper, 189, 227);
    }
    