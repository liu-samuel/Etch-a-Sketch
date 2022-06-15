let change = document.querySelector(".change");
let container = document.getElementById("grid");
let restart = document.querySelector('.restart');
let cells = document.getElementsByClassName("cell");

let rows = 16;
let columns = 16;
let height = parseInt(container.style.height);
let width = parseInt(container.style.width);

let cellHeight = 600 / rows;
let cellWidth = 600 / columns;

for (i = 0; i < rows * columns; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
    cell.style.height = String(cellHeight) + 'px';
    cell.style.width = String(cellWidth) + 'px';

    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "grey";
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

change.addEventListener("click", () => {
    rows = prompt("How many rows? (Up to 100)");
    columns = prompt("How many columns? (Up to 100)");
    numRows = parseInt(rows);
    numColumns = parseInt(columns);

    for (let cell of cells) {
        container.removeChild(cell);
    }

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
})