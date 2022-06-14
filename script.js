let rows = 4;
let columns = 4;
let container = document.getElementById("grid");

for (i = 0; i < rows * columns; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = i
    container.appendChild(cell);
    cell.addEventListener("mouseover", () => {
        cell.style.background = "red";
        console.log("div mouse over");
    });
    cell.addEventListener("click", () => {
        cell.style.background = randomColor();
        console.log("div clicked");
    });
}


/* function mouseOver(id) {
    
}

function mouseClick(id) {
    
} */

function randomColor() {
    let maxVal = 0xFFFFFF
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    let randColor = randomNumber.toString(16);
    return randColor;
}