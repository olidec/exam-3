tinkerbell = document.getElementById("tinkerbell")

document.addEventListener("mousemove", (e) => {
    tinkerbell.style.left = `${e.x}px`;
})