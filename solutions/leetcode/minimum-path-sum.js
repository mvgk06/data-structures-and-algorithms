/*

Problem

https://leetcode.com/problems/minimum-path-sum/

Approach

1. Top down
- The memo[i][j] represents the minimum path sum if we start from the current cell (i,j).
- For each cell we have two choices either we go right or down.
- After making a choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If i or j becomes invalid, then return 1e5 to indicate that the sum is not valid.
- If the cell (n-1,m-1) is reached, then return the cell value which is the minimum path sum.
- If the current subproblem is already solved, then return it's solution instead of recomputing the solution again.

Time - O(n*m)
Space - O(n*m)

2. Bottom up
- Create a memo array and initialize the base cases.
- The memo[i][j] represents the minimum path sum if we start from the current cell (i,j).
- For each cell we have two choices either we go right or down.
- Use the memo to get the solutions for smaller sub-problems.
- Return memo[0][0] which contains the solution for the main problem.

Time - O(n*m)
Space - O(n*m)

3. Bottom up (space optimized)
- To compute the current row we only need the next row.
- Use two arrays current and next to keep track of the sub-problems.
- Compute the current row using the current and the next row.
- Update the next as current row.
- Return first element of the next row which contains the solution for the main problem.

Time - O(n*m)
Space - O(n)

n - number of rows
m - number of columns

*/

/* Top down */

const helper = (grid, i, j, memo) => {
	if (i >= grid.length || j >= grid[i].length) {
		return 1e5;
	}
	if (i === grid.length - 1 && j === grid[i].length - 1) {
		memo[i][j] = grid[i][j];
		return memo[i][j];
	}
	if (memo[i][j] != -1) {
		return memo[i][j];
	}
	const right = helper(grid, i, j + 1, memo);
	const down = helper(grid, i + 1, j, memo);
	memo[i][j] = grid[i][j] + Math.min(right, down);
	return memo[i][j];
};

const minPathSum = function (grid) {
	const memo = new Array(grid.length);
	for (let i = 0; i < memo.length; i++) {
		memo[i] = new Array(grid[i].length).fill(-1);
	}
	return helper(grid, 0, 0, memo);
};

/* Bottom up */

const minPathSum2 = function (grid) {
	const n = grid.length,
		m = grid[0].length;
	const memo = new Array(n);
	for (let i = 0; i < memo.length; i++) {
		memo[i] = new Array(m).fill(-1);
	}
	memo[n - 1][m - 1] = grid[n - 1][m - 1];
	for (let j = m - 2; j >= 0; j--) {
		memo[n - 1][j] = grid[n - 1][j] + memo[n - 1][j + 1];
	}
	for (let i = n - 2; i >= 0; i--) {
		memo[i][m - 1] = grid[i][m - 1] + memo[i + 1][m - 1];
	}
	for (let i = n - 2; i >= 0; i--) {
		for (let j = m - 2; j >= 0; j--) {
			memo[i][j] = grid[i][j] + Math.min(memo[i + 1][j], memo[i][j + 1]);
		}
	}
	return memo[0][0];
};

/* Bottom up (space optimized) */

const minPathSum3 = function (grid) {
	const n = grid.length,
		m = grid[0].length;
	let next = new Array(n);
	next[m - 1] = grid[n - 1][m - 1];
	for (let j = m - 2; j >= 0; j--) {
		next[j] = grid[n - 1][j] + next[j + 1];
	}
	for (let i = n - 2; i >= 0; i--) {
		const curr = new Array(n);
		curr[m - 1] = grid[i][m - 1] + next[m - 1];
		for (let j = m - 2; j >= 0; j--) {
			curr[j] = grid[i][j] + Math.min(next[j], curr[j + 1]);
		}
		next = [...curr];
	}
	return next[0];
};
