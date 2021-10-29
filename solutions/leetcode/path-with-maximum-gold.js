/*

Problem

https://leetcode.com/problems/path-with-maximum-gold/

Approach
- For each cell that has gold get the maximum gold starting from the current position and return the maximum of all the results.
- Mark the current cell as visited.
- Recursively get the maximum gold if we started from the top, right, bottom and left positions.
- Mark the current cell as not visited.
- Return the current cell plus the maximum from all the positions.

Time - O(4^k)
Space - O(k)

k - number of cells that contains gold

*/

const maxGold = (arr, i, j, visited) => {
	if (
		i < 0 ||
		i === arr.length ||
		j < 0 ||
		j === arr[i].length ||
		arr[i][j] === 0 ||
		visited[i][j]
	) {
		return 0;
	}
	visited[i][j] = true;
	const top = maxGold(arr, i - 1, j, visited);
	const right = maxGold(arr, i, j + 1, visited);
	const bottom = maxGold(arr, i + 1, j, visited);
	const left = maxGold(arr, i, j - 1, visited);
	visited[i][j] = false;
	return arr[i][j] + Math.max(top, right, bottom, left);
};

const getMaximumGold = function (grid) {
	const n = grid.length,
		m = grid[0].length;
	const visited = new Array(n);
	for (let i = 0; i < visited.length; i++) {
		visited[i] = new Array(m).fill(false);
	}
	let result = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] != 0) {
				result = Math.max(result, maxGold(grid, i, j, visited));
			}
		}
	}
	return result;
};
