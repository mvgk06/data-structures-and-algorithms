/*

Problem

https://leetcode.com/problems/n-queens/

Approach
- At each row, we have at most n choices to place the queen.
- If the current move is valid, then place the queen and recursively solve for the smaller sub problems.
- Backtrack, undo the choice that was made and try other choices.
- If the row becomes equal to the board length, then push the current solution into the result and return.

Time - O(n^n)
Space - O(n^2)

n - number of rows and columns

*/

const isValidMove = (board, row, col) => {
	let i = row - 1,
		j = col;
	while (i >= 0) {
		if (board[i][j] === 'Q') {
			return false;
		}
		i--;
	}
	(i = row - 1), (j = col - 1);
	while (i >= 0 && j >= 0) {
		if (board[i][j] === 'Q') {
			return false;
		}
		i--;
		j--;
	}
	(i = row - 1), (j = col + 1);
	while (i >= 0 && j < board[i].length) {
		if (board[i][j] === 'Q') {
			return false;
		}
		i--;
		j++;
	}
	return true;
};

const placeQueens = (board, result, row) => {
	if (row === board.length) {
		const curr = [];
		for (let i = 0; i < board.length; i++) {
			let rowSolution = [];
			for (let j = 0; j < board[i].length; j++) {
				rowSolution.push(board[i][j]);
			}
			curr.push(rowSolution.join(''));
		}
		result.push(curr);
		return;
	}
	for (let col = 0; col < board[row].length; col++) {
		if (isValidMove(board, row, col)) {
			board[row][col] = 'Q';
			placeQueens(board, result, row + 1);
			board[row][col] = '.';
		}
	}
	return;
};

const solveNQueens = function (n) {
	const board = new Array(n);
	for (let i = 0; i < board.length; i++) {
		board[i] = new Array(n).fill('.');
	}
	const result = [];
	placeQueens(board, result, 0);
	return result;
};
