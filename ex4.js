document.getElementById("Tinkerbell") 
var xPositions = [100, 200];

var draw = function() 
    if (mouseIsPressed) {
        xPositions.push(mouseX);
    }

    for (var i = 0; i < xPositions.length; i++) { 
        var hopper = getImage("tinkerbell");
    image(hopper, 189, 227);
    }
    