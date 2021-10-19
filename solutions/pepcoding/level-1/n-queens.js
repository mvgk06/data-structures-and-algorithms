/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-backtracking/n-queens-official/ojquestion

Approach
- At each row, we have at most n choices to place the queen.
- If the current move is valid, then place the queen and recursively solve for the smaller sub problems.
- Backtrack, undo the choice that was made and try other choices.
- If the row becomes equal to the board length, then print the board and return.

Time - O(n^n)
Space - O(n^2)

n - number of rows and columns

*/

const isValidMove = (board, i, j) => {
	let row = i - 1,
		col = j;
	while (row >= 0) {
		if (board[row][col] === 1) {
			return false;
		}
		row--;
	}
	(row = i - 1), (col = j - 1);
	while (row >= 0 && col >= 0) {
		if (board[row][col] === 1) {
			return false;
		}
		row--;
		col--;
	}
	(row = i - 1), (col = j + 1);
	while (row >= 0 && col < board[i].length) {
		if (board[row][col] === 1) {
			return false;
		}
		row--;
		col++;
	}
	return true;
};

const printBoard = (board) => {
	for (let a = 0; a < board.length - 1; a++) {
		for (let b = 0; b < board[a].length; b++) {
			if (board[a][b] === 1) {
				process.stdout.write(`${a}-${b}, `);
			}
		}
	}
	for (let b = 0; b < board[board.length - 1].length; b++) {
		if (board[board.length - 1][b] === 1) {
			console.log(`${board.length - 1}-${b}, .`);
		}
	}
};

const placeQueens = (board, i) => {
	if (i === board.length) {
		printBoard(board);
		return;
	}
	for (let j = 0; j < board[i].length; j++) {
		if (isValidMove(board, i, j)) {
			board[i][j] = 1;
			placeQueens(board, i + 1);
			board[i][j] = 0;
		}
	}
	return;
};

const solve = (n) => {
	const board = new Array(n);
	for (let i = 0; i < board.length; i++) {
		board[i] = new Array(n).fill(0);
	}
	placeQueens(board, 0);
};
