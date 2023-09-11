const sketchContainer = document.querySelector(".sketch-container");

for (let i = 0; i < 256; i++) {
    let unitSquare = document.createElement("div");
    unitSquare.style.cssText = "width: 25px; aspect-ratio: 1; border: 1px solid black; background: grey; box-sizing: border-box;";
    sketchContainer.appendChild(unitSquare);
    console.log("LOOP");
}