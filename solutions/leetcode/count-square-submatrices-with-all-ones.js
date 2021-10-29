/*

Problem

https://leetcode.com/problems/count-square-submatrices-with-all-ones/

Approach

1. Top down
- Each state in memo[i][j] represents the maximum side of valid square (which also gives the number of valid squares) that ends at (i,j).
- For each cell, the solution is 1 + the minimum of top, topLeft and left.
- After making the choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If i or j goes out of bounds, then return 0.
- If the current subproblem is already computed then return it instead of recomputing them again.
- The result is the sum of all elements in memo.

Time - O(m*n)
Space - O(m*n)

2. Bottom up
- Create a memo array and initialize the base cases.
- Each state in memo[i][j] represents the maximum side of valid square (which also gives the number of valid squares) that ends at (i,j).
- For each cell, the solution is 1 + the minimum of top, topLeft and left.
- Use the memo to get the solution of the smaller sub-problems.
- The result is the sum of all elements in memo.

Time - O(m*n)
Space - O(m*n)

3. Bottom up (space optimized)
- To compute the current row, we only need the current and previous row.
- Use two arrays current and previous to keep track of the sub-problems.
- Compute the current row using the current and previous row.
- Update the result.
- Set the previous row as current row.
- Return the result.

Time - O(m*n)
Space - O(n)

m - number of rows
n - number of columns

*/

/* Top down */

const helper = (mat, i, j, memo) => {
	if (i < 0 || j < 0) {
		return 0;
	}
	if (memo[i][j] != -1) {
		return memo[i][j];
	}
	const top = helper(mat, i - 1, j, memo);
	const topLeft = helper(mat, i - 1, j - 1, memo);
	const left = helper(mat, i, j - 1, memo);
	memo[i][j] = 1 + Math.min(top, topLeft, left);
	return memo[i][j];
};

const countSquares = function (matrix) {
	const m = matrix.length,
		n = matrix[0].length;
	const memo = new Array(m);
	for (let i = 0; i < m; i++) {
		memo[i] = new Array(n).fill(-1);
	}
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (matrix[i][j] === 0) {
				memo[i][j] = 0;
			} else {
				helper(matrix, i, j, memo);
			}
		}
	}
	let result = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			result += memo[i][j];
		}
	}
	return result;
};

/* Bottom up */

const countSquares2 = function (matrix) {
	const m = matrix.length,
		n = matrix[0].length;
	const memo = new Array(m);
	for (let i = 0; i < m; i++) {
		memo[i] = new Array(n).fill(0);
	}
	let result = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (matrix[i][j] === 1) {
				if (i > 0 && j > 0) {
					memo[i][j] = 1 + Math.min(memo[i - 1][j], memo[i - 1][j - 1], memo[i][j - 1]);
				} else {
					memo[i][j] = 1;
				}
			}
			result += memo[i][j];
		}
	}
	return result;
};

/* Bottom up (space optimized) */

const countSquares3 = function (matrix) {
	const m = matrix.length,
		n = matrix[0].length;
	let prev = new Array(n).fill(0),
		result = 0;
	for (let i = 0; i < m; i++) {
		const curr = new Array(n).fill(0);
		for (let j = 0; j < n; j++) {
			if (matrix[i][j] === 1) {
				if (i > 0 && j > 0) {
					curr[j] = 1 + Math.min(prev[j], prev[j - 1], curr[j - 1]);
				} else {
					curr[j] = 1;
				}
			}
			result += curr[j];
		}
		prev = [...curr];
	}
	return result;
};
