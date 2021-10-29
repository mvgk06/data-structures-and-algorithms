/*

Problem

https://leetcode.com/problems/max-area-of-island/

Approach

1. DFS
- From each land cell which is not yet visited perform dfs to compute the area of the current component.
- Return the maximum area of all the components.

Time - O(n*m)
Space - O(n*m)

2. BFS
- From each land cell which is not yet visited perform bfs to compute the area of the current component.
- Return the maximum area of all the components.

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
		return 0;
	}
	visited[i][j] = true;
	let area = 0;
	for (let k = 0; k < paths.length; k++) {
		const row = i + paths[k][0],
			col = j + paths[k][1];
		area += dfs(grid, visited, paths, row, col);
	}
	return 1 + area;
};

const maxAreaOfIsland = function (grid) {
	const n = grid.length,
		m = grid[0].length,
		visited = new Array(n);
	for (let i = 0; i < n; i++) {
		visited[i] = new Array(m).fill(false);
	}
	const paths = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	];
	let result = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (grid[i][j] === 1 && !visited[i][j]) {
				result = Math.max(result, dfs(grid, visited, paths, i, j));
			}
		}
	}
	return result;
};

/* BFS */

const Queue = require('../../data-structures/queue.js');

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

const bfs = (grid, visited, paths, i, j) => {
	const queue = new Queue();
	visited[i][j] = true;
	queue.enque([i, j]);
	let result = 0;
	while (queue.getSize() > 0) {
		const [row, col] = queue.getFront();
		queue.deque();
		result += 1;
		for (let k = 0; k < paths.length; k++) {
			const currRow = row + paths[k][0],
				currCol = col + paths[k][1];
			if (isValid(grid, visited, currRow, currCol)) {
				visited[currRow][currCol] = true;
				queue.enque([currRow, currCol]);
			}
		}
	}
	return result;
};

const maxAreaOfIsland2 = function (grid) {
	const n = grid.length,
		m = grid[0].length,
		visited = new Array(n);
	for (let i = 0; i < n; i++) {
		visited[i] = new Array(m).fill(false);
	}
	const paths = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	];
	let result = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (grid[i][j] === 1 && !visited[i][j]) {
				result = Math.max(result, bfs(grid, visited, paths, i, j));
			}
		}
	}
	return result;
};
