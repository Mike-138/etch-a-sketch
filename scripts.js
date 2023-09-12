function increaseOpacity(event) {
    let child = event.target;
    if (event.buttons !== 1 || child.style.opacity >= 1) {
        child.removeEventListener("mouseover", increaseOpacity);
    } else {
        let unitOpacity = Number(child.style.opacity) + 0.1;
        child.style.opacity = unitOpacity;
    }
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
});

sketchContainer.addEventListener("mousedown", (event) => {
    if (event.button == 0) {
        let unitOpacity = Number(event.target.style.opacity) + 0.1;
        event.target.style.opacity = unitOpacity;
        for (let i = 0; i < sketchContainer.children.length; i++) {
            let child = sketchContainer.children[i];
            child.addEventListener("mouseover", increaseOpacity);
        }
        event.preventDefault();
    }
});