const sketchArea = document.querySelector("#sketchArea");
const countInput = document.querySelector("#countInput");
const reset = document.querySelector("#reset");
let initFill = 256;

fillSketchArea(initFill);

countInput.addEventListener("input", (e) => fillSketchArea(e.target.value**2));
reset.addEventListener("click", () => fillSketchArea(initFill));


function fillSketchArea(count) {
    sketchArea.textContent = "";
    for (let i = 0; i < count; i++) {
        let cell = document.createElement("div");
        let side = (600**2 / count)**0.5;
        cell.setAttribute("style", `min-width: ${side}px; min-height: ${side}px; max-width: ${side}px; max-height: ${side}px;`);
        cell.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "black");
        console.log("Side: ", side, " Count: ", count)
        sketchArea.appendChild(cell);
    };
};
