/*

Problem

https://leetcode.com/problems/number-of-islands/

Approach

1. DFS
- From each land cell that is not visited, perform dfs to visit the cells.
- Mark the current cell as visited.
- Recursively visit all the adjacent cells of the current cell.
- If the current cell is invalid or visited or is water, then return.
- After visiting all the cells in the current component, increment the result by 1.
- Return the result. 

Time - O(n*m)
Space - O(n*m)

2. BFS
- From each land cell that is not visited, perform bfs to visit the cells.
- Mark the current cell as visited and enque it into the queue.
- While the queue is not empty, deque a cell.
- Visit all the adjacent cells of the current cell which are not yet visited, mark them as visited and enque them into the queue.
- After visiting all the cells in the current component, increment the result by 1.
- Return the result. 

Time - O(n*m)
Space - O(n*m)

n - number of rows
m - number of columns

*/

/* DFS */

const dfs = (graph, visited, paths, i, j) => {
	if (
		i < 0 ||
		i >= graph.length ||
		j < 0 ||
		j >= graph[i].length ||
		visited[i][j] ||
		graph[i][j] === '0'
	) {
		return;
	}
	visited[i][j] = true;
	for (let k = 0; k < paths.length; k++) {
		const row = i + paths[k][0],
			col = j + paths[k][1];
		dfs(graph, visited, paths, row, col);
	}
};

const numIslands = function (graph) {
	const n = graph.length;
	const visited = new Array(n);
	for (let i = 0; i < visited.length; i++) {
		visited[i] = new Array(graph[i].length).fill(false);
	}
	const paths = [
		[-1, 0],
		[0, 1],
		[0, -1],
		[1, 0],
	];
	let result = 0;
	for (let i = 0; i < graph.length; i++) {
		for (let j = 0; j < graph[i].length; j++) {
			if (graph[i][j] === '1' && !visited[i][j]) {
				dfs(graph, visited, paths, i, j);
				result += 1;
			}
		}
	}
	return result;
};

/* BFS */

const Queue = require('../../data-structures/queue.js');

const isValid = (graph, visited, i, j) => {
	return (
		i >= 0 &&
		i < graph.length &&
		j >= 0 &&
		j < graph[i].length &&
		!visited[i][j] &&
		graph[i][j] === '1'
	);
};

const bfs = (graph, visited, paths, i, j) => {
	const queue = new Queue();
	queue.enque([i, j]);
	visited[i][j] = true;
	while (queue.getSize() > 0) {
		const [row, col] = queue.getFront();
		queue.deque();
		for (let i = 0; i < paths.length; i++) {
			const currRow = row + paths[i][0],
				currCol = col + paths[i][1];
			if (isValid(graph, visited, currRow, currCol)) {
				visited[currRow][currCol] = true;
				queue.enque([currRow, currCol]);
			}
		}
	}
};

const numIslands2 = function (graph) {
	const n = graph.length;
	const visited = new Array(n);
	for (let i = 0; i < visited.length; i++) {
		visited[i] = new Array(graph[i].length).fill(false);
	}
	const paths = [
		[-1, 0],
		[0, 1],
		[0, -1],
		[1, 0],
	];
	let result = 0;
	for (let i = 0; i < graph.length; i++) {
		for (let j = 0; j < graph[i].length; j++) {
			if (graph[i][j] === '1' && !visited[i][j]) {
				bfs(graph, visited, paths, i, j);
				result += 1;
			}
		}
	}
	return result;
};
