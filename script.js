// Variables
const gridContainer = document.getElementById('grid');
const resetButton = document.getElementById('resetButton');
const containerSize = 960;

// Functions
// Reset grid
resetButton.addEventListener('click', () => {
    let gridSize = prompt("Enter the number of squares per side for the new grid (e.g., 16 for 16x16):");
    if (gridSize !== null) {
        gridSize = parseInt(gridSize);
        if (gridSize > 0 && Number.isInteger(gridSize)) {
            createGrid(gridSize);
        } else {
            alert("Please enter a valid number.");
        }
    }
});

function createGrid(size) {
    // Clear existing grid
    gridContainer.innerHTML = '';

    // Calculate size of each square
    const squareSize = containerSize / size;

    // Set grid template columns and rows
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create new grid squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('gridSquare');
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'yellow';
        });
        gridContainer.appendChild(square);
    }
}

// Default grid
createGrid(16);
