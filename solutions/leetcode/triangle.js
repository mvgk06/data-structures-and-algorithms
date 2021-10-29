/*

Problem

https://leetcode.com/problems/triangle/

Approach

1. Top down
- Each state in the memo[i][j] represents the minimum path sum if we start from the current cell (i,j).
- For each cell we have two choices either we go bottom or bottomRight.
- After making a choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If j becomes invalid, then return 1e7 to indicate that the sum is not valid.
- If the last row is reached, then return the cell value which is the minimum path sum.
- If the current subproblem is already computed, then return it instead of recomputing them.

Time - O(n*m)
Space - O(n*m)

2. Bottom up
- Create a memo array and initialize the base cases.
- Each state in the memo[i][j] represents the minimum path sum if we start from the current cell (i,j).
- For each cell we have two choices either we go bottom or bottomRight.
- Use the memo to get the solutions for smaller sub-problems.
- Return the cell (0,0) of memo which gives the solution to the main problem.

Time - O(n*m)
Space - O(n*m)

3. Bottom up (space optimized)
- To compute the current row we only need the next row.
- Use two arrays current and next to keep track of the sub-problems.
- Compute the current row using the next row.
- Update the next as current row.
- Return the first element of the next row which gives the solution to the main problem.

Time - O(n*m)
Space - O(n)

n - number of rows
m - number of columns

*/

/* Top down */

const helper = (triangle, i, j, memo) => {
	if (j >= triangle[i].length) {
		return 1e7;
	}
	if (i === triangle.length - 1) {
		return triangle[i][j];
	}
	if (memo[i][j] != -1) {
		return memo[i][j];
	}
	const bottom = helper(triangle, i + 1, j, memo);
	const bottomRight = helper(triangle, i + 1, j + 1, memo);
	memo[i][j] = triangle[i][j] + Math.min(bottom, bottomRight);
	return memo[i][j];
};

const minimumTotal = function (triangle) {
	const memo = new Array(triangle.length);
	for (let i = 0; i < memo.length; i++) {
		memo[i] = new Array(triangle[i].length).fill(-1);
	}
	return helper(triangle, 0, 0, memo);
};

/* Bottom up */

const minimumTotal2 = function (triangle) {
	const n = triangle.length,
		memo = new Array(n);
	for (let i = 0; i < n; i++) {
		memo[i] = new Array(triangle[i].length).fill(-1);
	}
	for (let j = 0; j < triangle[n - 1].length; j++) {
		memo[n - 1][j] = triangle[n - 1][j];
	}
	for (let i = n - 2; i >= 0; i--) {
		for (let j = 0; j < triangle[i].length; j++) {
			memo[i][j] = triangle[i][j] + Math.min(memo[i + 1][j], memo[i + 1][j + 1]);
		}
	}
	return memo[0][0];
};

/* BOttom up (space optimized) */

const minimumTotal3 = function (triangle) {
	const n = triangle.length;
	let next = new Array(n);
	for (let j = 0; j < triangle[n - 1].length; j++) {
		next[j] = triangle[n - 1][j];
	}
	for (let i = n - 2; i >= 0; i--) {
		const curr = new Array(triangle[i].length);
		for (let j = 0; j < triangle[i].length; j++) {
			curr[j] = triangle[i][j] + Math.min(next[j], next[j + 1]);
		}
		next = [...curr];
	}
	return next[0];
};
