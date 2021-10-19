/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-backtracking/knights-tour-official/ojquestion

Approach
- At each cell, we have 8 choices to place the knight.
- After making a choice, recursively solve for the smaller sub problems.
- Backtrack undo the choice that was made and try other choices.
- If the cell becomes out of bounds or it is already visited, then return.
- If all the cells are visited, then print the moves made and return.

Time - O(8^(n^2))
Space - O(n^2)

n - number of rows and columns

*/

const printBoard = (board) => {
	const n = board.length,
		m = board[0].length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m - 1; j++) {
			process.stdout.write(board[i][j].toString() + ' ');
		}
		console.log(board[i][m - 1].toString());
	}
	console.log('');
};

const moveKnight = (board, i, j, paths, move) => {
	if (i < 0 || i >= board.length || j < 0 || j >= board.length || board[i][j] !== -1) {
		return;
	}
	if (move === board.length * board.length) {
		board[i][j] = move;
		printBoard(board);
		board[i][j] = -1;
		return;
	}
	board[i][j] = move;
	for (let k = 0; k < paths.length; k++) {
		const row = i + paths[k][0],
			col = j + paths[k][1];
		moveKnight(board, row, col, paths, move + 1);
	}
	board[i][j] = -1;
	return;
};

const solve = (n, i, j) => {
	const board = new Array(n);
	for (let i = 0; i < n; i++) {
		board[i] = new Array(n).fill(-1);
	}
	const paths = [
		[-2, 1],
		[-1, 2],
		[1, 2],
		[2, 1],
		[2, -1],
		[1, -2],
		[-1, -2],
		[-2, -1],
	];
	moveKnight(board, i, j, paths, 1);
};
