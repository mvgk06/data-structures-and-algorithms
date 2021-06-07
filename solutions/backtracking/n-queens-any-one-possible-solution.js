/*

Problem (follow up question)
https://leetcode.com/problems/n-queens/

Approach
- Traverse all the columns of a row and if the current (row,col) is a valid move then place the queen.
- Recursively solve for smaller sub problems.
- If you were successful in placing all the queens then no need to backtrack just return true to indicate that we have found a solution.
- Else backtrack, undo the choice that was made and try other choices.
- If the end of the row is reached then all queens are placed so store the current solution in the result.

Time - O(2^n)
Space - O(n)

*/

const isValidMove = (board, row, col) => {

    let i, j;

    i = row;
    while (i >= 0) {
        if (board[i][col] === "Q") {
            return false;
        }
        i--;
    }

    i = row, j = col;
    while (i >= 0 && j >= 0) {
        if (board[i][j] === "Q") {
            return false;
        }
        i--;
        j--;
    }

    i = row, j = col;
    while (i >= 0 && j < board[i].length) {
        if (board[i][j] === "Q") {
            return false;
        }
        i--;
        j++;
    }

    return true;
};

const placeQueens = (board, result, row) => {

    if (row === board.length) {
        const currSolution = [];
        for (let i = 0; i < board.length; i++) {
            let currRowSolution = "";
            for (let j = 0; j < board[i].length; j++) {
                currRowSolution += board[i][j];
            }
            currSolution.push(currRowSolution);
        }
        result.push(currSolution);
        return true;
    }

    for (let col = 0; col < board[row].length; col++) {
        if (isValidMove(board, row, col)) {
            board[row][col] = "Q";
            if (placeQueens(board, result, row + 1, 0)) {
                return true;
            }
            board[row][col] = ".";
        }
    }

    return false;
};

const solveNQueens = function (n) {

    const board = new Array(n);

    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(n).fill(".");
    }

    const result = [];
    placeQueens(board, result, 0);
    return result;
};