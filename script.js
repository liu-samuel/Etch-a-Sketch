let container = document.getElementById("grid");
let rows = prompt("How many rows? (Up to 64)");
let columns = prompt("How many columns? (Up to 64)");

for (i = 0; i < rows * columns; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
    cell.style.height = (500 / rows);
    cell.style.width = (500 / columns);

    cell.addEventListener("mouseenter", () => {
        cell.style.background = "red";
        console.log("div mouse over");
    }); 

    cell.addEventListener("mouseout", () => {
        cell.style.background = "white";
        console.log("div mouse out")
    })

    cell.addEventListener("click", () => {
        color = randomColor();
        cell.style.background = color;
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