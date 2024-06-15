// script.js
const gameBoard = document.getElementById('game');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let board = Array(9).fill(null);
let currentPlayer = 'X';

function handleClick(event) {
    const index = event.target.dataset.index;
    if (board[index] || checkWin(board) || checkDraw(board)) {
        return;
    }
    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    if (checkWin(board)) {
        setTimeout(() => alert(`${currentPlayer} wins!`), 100);
    } else if (checkDraw(board)) {
        setTimeout(() => alert('Draw!'), 100);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') {
            aiMove();
        }
    }
}

function aiMove() {
    let availableIndices = board.map((cell, index) => cell === null ? index : null).filter(index => index !== null);
    let aiIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    board[aiIndex] = 'O';
    cells[aiIndex].textContent = 'O';
    if (checkWin(board)) {
        setTimeout(() => alert('O wins!'), 100);
    } else if (checkDraw(board)) {
        setTimeout(() => alert('Draw!'), 100);
    } else {
        currentPlayer = 'X';
    }
}

function checkWin(board) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === currentPlayer);
    });
}

function checkDraw(board) {
    return board.every(cell => cell !== null);
}

function resetGame() {
    board = Array(9).fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
