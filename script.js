let rows = 4;
let columns = 4;
let container = document.getElementById("grid");

for (i = 0; i < rows * columns; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = i
    document.body.appendChild(cell);
    cell.addEventListener('mouseover', mouseOver(cell.id));
    cell.addEventListener('click', mouseClick(cell.id));
}


function mouseOver(id) {
    document.getElementsByClassName("cell")[id].style.background = "red";
}

function mouseClick(id) {
    document.getElementsByClassName("cell")[id].style.background = randomColor();
}

function randomColor() {
    let maxVal = 0xFFFFFF
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    let randColor = randomNumber.toString(16);
    return randColor;
}