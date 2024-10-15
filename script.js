// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    const grid = document.getElementById("grid")
    grid.insertRow()
    for (let i = 0; i < numCols; i++){
        grid.rows[numRows].insertCell()
        grid.rows[numRows].lastElementChild.setAttribute('onclick', "changeColor(this)")
    }
    numRows++
    //alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    const grid = document.getElementById("grid")
    const rows = grid.querySelectorAll("tr")
    rows.forEach((row) => {
        row.insertCell()
        row.lastElementChild.setAttribute('onclick', "changeColor(this)")
    })
    numCols++
    //alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    if (numRows > 0){
        const grid = document.getElementById("grid")
        grid.deleteRow(numRows-1)
        numRows--
    }
    //alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    if (numCols > 0){
        const grid = document.getElementById("grid")
        const rows = grid.querySelectorAll("tr")
        rows.forEach((row) => row.deleteCell(numCols-1))
        numCols--
    }
    //alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    const grid = document.getElementById("grid")
    const cells = grid.querySelectorAll("td")
    cells.forEach((cell) => {
        if (cell.style.backgroundColor == "" || cell.style.backgroundColor == "white"){ //No color or white
            cell.style.backgroundColor = colorSelected
        }
    })
    //alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    const grid = document.getElementById("grid")
    const cells = grid.querySelectorAll("td")
    cells.forEach((cell) => 
        cell.style.backgroundColor = colorSelected
    )
    //alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    const grid = document.getElementById("grid")
    const cells = grid.querySelectorAll("td")
    cells.forEach((cell) => 
        cell.style.backgroundColor = "white"
    )
    //alert("Clicked Clear All"); // Replace this line with your code.
}

// Change color of cell object
function changeColor(object){
    object.style.backgroundColor = colorSelected
}