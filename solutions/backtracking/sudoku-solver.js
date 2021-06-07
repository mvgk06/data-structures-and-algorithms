/*

Problem
https://leetcode.com/problems/sudoku-solver/

Approach
- For the current (row,col) traverse all numbers from 1 to 9, if the current number is valid move then place it.
- Recursively solve for smaller sub problem.
- If you found the solution return true else backtrack, undo the choice that was made and try other choices.
- If end of the row is reached then return true to indicate that the solution was found.
- If the end of column is reached then recursively solve for the next row.
- If the current (row,col) has already a number then recursively solve for the next column. 


Time - O(2^n)
Space - O(n)

*/

const isValidMove = (board, row, col, num) => {

    for (let i = 0; i < board[row].length; i++) {
        if (board[row][i] === num) {
            return false;
        }
    }

    for (let i = 0; i < board.length; i++) {
        if (board[i][col] === num) {
            return false;
        }
    }

    const subGridStartingRow = 3 * Math.floor(row / 3), subGridStartingCol = 3 * Math.floor(col / 3);

    for (let i = subGridStartingRow; i < subGridStartingRow + 3; i++) {
        for (let j = subGridStartingCol; j < subGridStartingCol + 3; j++) {
            if (board[i][j] === num) {
                return false;
            }
        }
    }

    return true;

};

const placeNumbers = (board, row, col) => {

    if (row === board.length) {
        return true;
    }

    if (col === board[row].length) {
        return placeNumbers(board, row + 1, 0);
    }

    if (board[row][col] != ".") {
        return placeNumbers(board, row, col + 1);
    }

    for (let num = 1; num <= 9; num++) {
        if (isValidMove(board, row, col, `${num}`)) {
            board[row][col] = `${num}`;
            if (placeNumbers(board, row, col + 1)) {
                return true;
            }
            board[row][col] = ".";
        }
    }

    return false;
};

const solveSudoku = function (board) {
    placeNumbers(board, 0, 0);
};