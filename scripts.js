const sketchContainer = document.querySelector(".sketch-container");
const gridSizeInput = document.querySelector("input");

gridSizeInput.addEventListener("input", () => {
    let gridSize = gridSizeInput.valueAsNumber;
    console.log(gridSize);
})

for (let i = 0; i < 256; i++) {
    let unitSquare = document.createElement("div");
    unitSquare.classList.add("unit-square");
    sketchContainer.appendChild(unitSquare);
}