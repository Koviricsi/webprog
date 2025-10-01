const size = 8;
const cellSize = 32;


window.addEventListener("load", (e) => {
    let grid = document.createElement("div");
    grid.className = "board";
    grid.style.gridTemplate = `repeat(${size},1fr)/repeat(${size},1fr)`;

    let fekete = false;

    for (let ci=1; ci<=size*size; ci++){
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";

        if (fekete){
            cell.style.background = "black"
        }
        if (ci % size != 0){
            fekete = !fekete;
        }

        grid.appendChild(cell);
        
    }

    document.body.appendChild(grid);
})