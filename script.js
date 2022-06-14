let container = document.getElementById("grid");
let restart = document.querySelector('.restart');
let cells = document.getElementsByClassName("cell");

let rows = prompt("How many rows? (Up to 64)");
let columns = prompt("How many columns? (Up to 64)");
let numRows = parseInt(rows);
let numColumns = parseInt(columns);
let height = parseInt(container.style.height);
let width = parseInt(container.style.width);

let cellHeight = 640 / numRows;
let cellWidth = 640 / numColumns;

for (i = 0; i < rows * columns; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
    cell.style.height = String(cellHeight) + 'px';
    cell.style.width = String(cellWidth) + 'px';

    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "red";
        console.log("div mouse over");
    }); 

    /* cell.addEventListener("mouseout", () => {
        cell.style.background = "white";
        console.log("div mouse out")
    })

    cell.addEventListener("click", () => {
        color = randomColor();
        cell.style.background = color;
        console.log("div clicked");
    });
    */
}

/*
function mouseOver(id) {
    
}

function mouseClick(id) {
    
} */

function randomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

restart.addEventListener("click", () => {
    for (let cellRestart of cells) {
        cellRestart.style.backgroundColor = "white";
    }
})