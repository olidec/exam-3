let tinkerbell = document.getElementById("tinkerbell");
document.addEventListener("mousemove", (e) => {
    tinkerbell.style.left = `${e.x}px`;
    tinkerbell.style.top = `${e.y}px`;
})