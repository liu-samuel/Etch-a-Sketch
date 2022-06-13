let rows = 4;
let columns = 4;
let container = document.getElementById("grid");

for (i = 0; i < rows; i++) {
    for (j = 0; j < columns; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        document.body.appendChild(cell);
    }
}