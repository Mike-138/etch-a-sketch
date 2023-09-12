function generateEtch(grid) {
    const unitWidth = String(400 / grid) + "px";
    for (let i = 0; i < grid ** 2; i++) {
        let unitSquare = document.createElement("div");
        unitSquare.classList.add("unit-square");
        unitSquare.style.width = unitWidth;
        sketchContainer.appendChild(unitSquare);
    }
}

const sketchContainer = document.querySelector(".sketch-container");
const gridSizeInput = document.querySelector("input");

gridSizeInput.addEventListener("input", () => {
    sketchContainer.innerHTML = "";
    let gridSize = gridSizeInput.valueAsNumber;
    generateEtch(gridSize);
})