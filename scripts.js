function increaseOpacity(container, event) {
    for (let i = 0; i < container.children.length; i++) {
        let child = container.children[i];
        child.addEventListener("mouseenter", () => {
            if (child.style.opacity < 1) {
                let unitOpacity = Number(child.style.opacity) + 0.1;
                child.style.opacity = unitOpacity;
                console.log(child.style.opacity);
            }     
        });
    }
    event.preventDefault();
}

function fillSquare(square, container) {
    container.addEventListener("mousedown", (event) => {
        square.addEventListener("mouseover", (event) => {
            if (square.style.opacity < 1) {
                let unitOpacity = Number(square.style.opacity) + 0.1;
                square.style.opacity = unitOpacity;
                console.log(square.style.opacity);
            }       
        });
        event.preventDefault();
    });
}

function generateSketch(container, grid) {
    const unitWidth = String(400 / grid) + "px";
    for (let i = 0; i < grid ** 2; i++) {
        let unitSquare = document.createElement("div");
        unitSquare.classList.add("unit-square");
        unitSquare.style.width = unitWidth;
        unitSquare.style.backgroundColor = "black";
        unitSquare.style.opacity = 0;
        container.appendChild(unitSquare);
    }
}

const sketchContainer = document.querySelector(".sketch-container");
const gridSizeInput = document.querySelector("input");

gridSizeInput.addEventListener("input", () => {
    sketchContainer.innerHTML = "";
    let gridSize = gridSizeInput.valueAsNumber;
    generateSketch(sketchContainer, gridSize);
    sketchContainer.addEventListener("mousedown", increaseOpacity(sketchContainer));
    window.addEventListener("mouseup", () => {
        sketchContainer.removeEventListener("mousedown", increaseOpacity(sketchContainer))
    });
});