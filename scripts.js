const sketchContainer = document.querySelector(".sketch-container");

for (let i = 0; i < 256; i++) {
    let unitSquare = document.createElement("div");
    unitSquare.classList.add("unit-square");
    sketchContainer.appendChild(unitSquare);
}