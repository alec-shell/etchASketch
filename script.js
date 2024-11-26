const sketchArea = document.querySelector("#sketchArea");
const countInput = document.querySelector("#countInput");
const reset = document.querySelector("#reset");
const grayscale = document.querySelector("#grayscale");
const randColor = document.querySelector("#randColor");
const initFill = 256;
let currentFill = 256;
let color = false;

fillSketchArea(initFill);

countInput.addEventListener("input", (e) => fillSketchArea(e.target.value**2));
reset.addEventListener("click", () => fillSketchArea(currrentFill));
grayscale.addEventListener("click", function() {
    color = false;
});
randColor.addEventListener("click", function() {
    color = true;
});


function fillSketchArea(count) {

    sketchArea.textContent = "";
    for (let i = 0; i < count; i++) {
        let cell = document.createElement("div");
        let side = (600**2 / count)**0.5;
        side = side.toFixed(2);
        cell.setAttribute("style", `min-width: ${side}px; min-height: ${side}px; max-width: ${side}px; max-height: ${side}px;`);
        cell.addEventListener("mouseover", (e) => selectOutputColor(e.target));
        sketchArea.appendChild(cell);
        currentFill = count;
    };
};


function selectOutputColor(element) {
    if (!color) {
        element.style.backgroundColor = "black";
    }
    else {
        element.style.backgroundColor = generateRandColor();
    }
}


function generateRandColor() {
    color = `rgb(`;
    for (let i = 0; i < 3; i++) {
        let value = Math.floor(Math.random() * 255);
        color += `${value}`;
        if (i !== 2) {
            color += `,`;
        }
    }
    color += `)`;
    return color;
}
