let change = document.querySelector(".change");
let container = document.getElementById("grid");
let restart = document.querySelector('.restart');
let erase = document.querySelector('.erase');
let draw = document.querySelector('.draw');
let cells = document.getElementsByClassName("cell");

let numRows = 16;
let numColumns = 16;
let height = parseInt(container.style.height);
let width = parseInt(container.style.width);

let drawing = true;

createGrid(numRows, numColumns);


function randomColor() {
    let randomColor = '#' + (Math.random().toString(16) + "000000").substring(2,8)
    return randomColor;
}

restart.addEventListener("click", () => {
    for (let cellRestart of cells) {
        cellRestart.style.backgroundColor = "beige";
    }
})

change.addEventListener("click", () => {
    let rows = prompt("How many rows? (Up to 100)");
    let columns = prompt("How many columns? (Up to 100)");
    numRows = parseInt(rows);
    numColumns = parseInt(columns);

    while (cells[0]) {
        container.removeChild(cells[0]);
    }

    createGrid(numRows, numColumns)
})

function addMouseOver(cell) {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "grey";
        console.log("div mouse over"); 
    });
    return cell;
}

function addMouseOut(cell) {
    cell.addEventListener("mouseout", () => {
        cell.style.background = "beige";
        console.log("div mouse out")
    });
    return cell;
}

function addMouseClick(cell) {
    cell.addEventListener("click", () => {
        color = randomColor();
        cell.style.background = color;
        console.log("div clicked");
    });
    return cell;
}

erase.addEventListener("click",  () => {
    for (let cell of cells) {
        cell.removeEventListener("click", addMouseClick);
        cell.removeEventListener("mouseover", addMouseOver);
        addEraseOver(cell);
    }
});

draw.addEventListener("click",  () => {
    for (let cell of cells) {
        cell.removeEventListener("mouseover", addEraseOver);
        addMouseClick(cell);
        addMouseOver(cell);
    }
    
});

function addEraseOver(cell) {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "beige";
        console.log("erasing");
    })
}

function createGrid(rows, columns) {
    let cellHeight = (640 - numColumns * 2) / numRows;
    let cellWidth = (640 - numRows * 2) / numColumns;

    for (i = 0; i < rows * columns; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
        cell.style.height = String(cellHeight) + 'px';
        cell.style.width = String(cellWidth) + 'px';
        cell.style.backgroundColor = "beige";
    
        addMouseOver(cell);
        // addMouseOut(cell);
        addMouseClick(cell);
        
    }
}