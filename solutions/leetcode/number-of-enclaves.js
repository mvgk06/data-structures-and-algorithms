/*

Problem

https://leetcode.com/problems/number-of-enclaves/

Approach

1. DFS
- Perform dfs from the boundary where the cell has 1.
- Recursively visit all the adjacent cells that has 1 and mark them as -1.
- Traverse the board and coount all the 1 and convert all the -1 back to 1.

Time - O(n*m)
Space - O(n*m)

2. BFS
- Enque all the boundary cells that has 1 into the queue.
- Perform bfs from the sources, visit all the adjacent cells that has 1 and mark them as -1.
- Traverse the board and coount all the 1 and convert all the -1 back to 1.

Time - O(n*m)
Space - O(n*m)

n - number of rows
m - number of columns

*/

/* DFS */

const dfs = (grid, visited, paths, i, j) => {
	if (
		i < 0 ||
		i >= grid.length ||
		j < 0 ||
		j >= grid[i].length ||
		visited[i][j] ||
		grid[i][j] === 0
	) {
		return;
	}
	visited[i][j] = true;
	grid[i][j] = -1;
	for (let k = 0; k < paths.length; k++) {
		const row = i + paths[k][0],
			col = j + paths[k][1];
		dfs(grid, visited, paths, row, col);
	}
};

const numEnclaves = function (grid) {
	const n = grid.length,
		m = grid[0].length,
		visited = new Array(n);
	for (let i = 0; i < n; i++) {
		visited[i] = new Array(m);
		visited[i].fill(false);
	}
	const paths = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (
				grid[i][j] === 1 &&
				!visited[i][j] &&
				(i === 0 || i === n - 1 || j === 0 || j === m - 1)
			) {
				dfs(grid, visited, paths, i, j);
			}
		}
	}
	let result = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 1) {
				result++;
			}
			if (grid[i][j] === -1) {
				grid[i][j] = 1;
			}
		}
	}
	return result;
};

/* BFS */

const Queue = require('../../data-structures/queue');

const isValid = (grid, visited, i, j) => {
	return (
		i >= 0 &&
		i < grid.length &&
		j >= 0 &&
		j < grid[i].length &&
		!visited[i][j] &&
		grid[i][j] === 1
	);
};

const bfs = (grid, visited, paths, queue) => {
	while (queue.getSize() > 0) {
		const [row, col] = queue.getFront();
		queue.deque();
		grid[row][col] = -1;
		for (let k = 0; k < paths.length; k++) {
			const currRow = row + paths[k][0],
				currCol = col + paths[k][1];
			if (isValid(grid, visited, currRow, currCol)) {
				visited[currRow][currCol] = true;
				queue.enque([currRow, currCol]);
			}
		}
	}
};

const numEnclaves2 = function (grid) {
	const n = grid.length,
		m = grid[0].length,
		visited = new Array(n);
	for (let i = 0; i < n; i++) {
		visited[i] = new Array(m);
		visited[i].fill(false);
	}
	const paths = [
			[1, 0],
			[0, 1],
			[-1, 0],
			[0, -1],
		],
		queue = new Queue();
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (
				grid[i][j] === 1 &&
				!visited[i][j] &&
				(i === 0 || i === n - 1 || j === 0 || j === m - 1)
			) {
				visited[i][j] = true;
				queue.enque([i, j]);
			}
		}
	}
	bfs(grid, visited, paths, queue);
	let result = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 1) {
				result++;
			}
			if (grid[i][j] === -1) {
				grid[i][j] = 1;
			}
		}
	}
	return result;
};
