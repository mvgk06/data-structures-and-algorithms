/* 

Problem

https://leetcode.com/problems/minimum-falling-path-sum/

Approach

1. Top down
- Each state in the memo[i][j] represents the minimum falling path sum if we start from the current cell (i,j).
- For each cell we have three choices either we go bottomLeft, bottom or bottomRight.
- After making a choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If j becomes invalid, then return 1e5 to indicate that the sum is not valid.
- If the last row is reached, then return the cell value which is the minimum falling path sum.
- If the current subproblem is already computed, then return it instead of recomputing them.

Time - O(n^2)
Space - O(n^2)

2. Bottom up
- Create a memo array and initialize the base cases.
- Each state in the memo[i][j] represents the minimum falling path sum if we start from the current cell (i,j).
- For each cell we have three choices either we go bottomLeft, bottom or bottomRight.
- Use the memo to get the solutions for smaller sub-problems.
- Return the minimum value from the first row of the memo which gives the solution to the main problem.

Time - O(n^2)
Space - O(n^2)

3. Bottom up (space optimized)
- To compute the current row we only need the next row.
- Use two arrays current and next to keep track of the sub-problems.
- Compute the current row using the next row.
- Update the next as current row.
- Compute the solution from the next row.

Time - O(n^2)
Space - O(n)

n - number of rows, columns

*/

/* Top down */

const helper = (mat, paths, i, j, memo) => {
	if (j < 0 || j >= mat.length) {
		return 1e5;
	}
	if (i === mat.length - 1) {
		return mat[i][j];
	}
	if (memo[i][j] != -1) {
		return memo[i][j];
	}
	let curr = Number.MAX_VALUE;
	for (let k = 0; k < paths.length; k++) {
		const row = i + paths[k][0],
			col = j + paths[k][1];
		curr = Math.min(curr, helper(mat, paths, row, col, memo));
	}
	memo[i][j] = mat[i][j] + curr;
	return memo[i][j];
};

const minFallingPathSum = function (matrix) {
	const n = matrix.length,
		memo = new Array(n);
	for (let i = 0; i < n; i++) {
		memo[i] = new Array(n).fill(-1);
	}
	const paths = [
		[1, -1],
		[1, 0],
		[1, 1],
	];
	let result = Number.MAX_VALUE;
	for (let j = 0; j < n; j++) {
		result = Math.min(result, helper(matrix, paths, 0, j, memo));
	}
	return result;
};

/* Bottom up */

const minFallingPathSum2 = function (matrix) {
	const n = matrix.length,
		memo = new Array(n);
	for (let i = 0; i < n; i++) {
		memo[i] = new Array(n);
	}
	const paths = [
		[1, -1],
		[1, 0],
		[1, 1],
	];
	for (let j = 0; j < n; j++) {
		memo[n - 1][j] = matrix[n - 1][j];
	}
	for (let i = n - 2; i >= 0; i--) {
		for (let j = 0; j < n; j++) {
			let curr = Number.MAX_VALUE;
			for (let k = 0; k < paths.length; k++) {
				const row = i + paths[k][0],
					col = j + paths[k][1];
				if (col >= 0 && col < matrix.length) {
					curr = Math.min(curr, memo[row][col]);
				}
			}
			memo[i][j] = matrix[i][j] + curr;
		}
	}
	let result = Number.MAX_VALUE;
	for (let j = 0; j < n; j++) {
		result = Math.min(result, memo[0][j]);
	}
	return result;
};

/* Bottom up (space optimized) */

const minFallingPathSum3 = function (matrix) {
	const n = matrix.length,
		paths = [
			[1, -1],
			[1, 0],
			[1, 1],
		];
	let next = new Array(n);
	for (let j = 0; j < n; j++) {
		next[j] = matrix[n - 1][j];
	}
	for (let i = n - 2; i >= 0; i--) {
		const curr = new Array(n);
		for (let j = 0; j < n; j++) {
			let currRes = Number.MAX_VALUE;
			for (let k = 0; k < paths.length; k++) {
				const col = j + paths[k][1];
				if (col >= 0 && col < matrix.length) {
					currRes = Math.min(currRes, next[col]);
				}
			}
			curr[j] = matrix[i][j] + currRes;
		}
		next = [...curr];
	}
	let result = Number.MAX_VALUE;
	for (let j = 0; j < n; j++) {
		result = Math.min(result, next[j]);
	}
	return result;
};
