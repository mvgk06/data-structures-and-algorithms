/*

Problem

https://pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/paint-house-official/ojquestion

Approach

1. Top down
- The memo[i][end] represents the minimum painting cost till the ith house where the last house is painted with color end.
- At each index, we have three choices either we paint with red(0), blue(1) or green(2) based on the ending color.
- After making the choice recursively solve for the smaller sub-problems and store the solutions in the memo.
- If the index is less than 0, then return 0.
- If the current sub-problem is already solved, then return its solution instead of recomputing the solution again.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with base cases.
- The memo[i][end] represents the minimum painting cost of i houses where the last house is painted with color end.
- At each index, we have three choices either we paint with red(0), blue(1) or green(2) based on the ending color.
- Use the memo to get the solutions for the smaller sub-problems.
- Print the minimum of the last row of memo which gives the solution for the main problem.

Time - O(n)
Space - O(n)

n - number of houses

*/

/* Top down */

const minCost = (cost, i, end, memo) => {
	if (i < 0) {
		return 0;
	}
	if (end !== -1 && memo[i][end] !== -1) {
		return memo[i][end];
	}
	let res = 1e9;
	for (let j = 0; j < 3; j++) {
		if (j !== end) {
			res = Math.min(res, cost[i][j] + minCost(cost, i - 1, j, memo));
		}
	}
	memo[i][end] = res;
	return memo[i][end];
};

const solve = (cost) => {
	const n = cost.length,
		memo = new Array(n);
	for (let i = 0; i < memo.length; i++) {
		memo[i] = new Array(3).fill(-1);
	}
	const result = minCost(cost, n - 1, -1, memo);
	console.log(result);
};

/* Bottom up */

const solve2 = (cost) => {
	const n = cost.length,
		memo = new Array(n + 1);
	for (let i = 0; i < memo.length; i++) {
		memo[i] = new Array(3).fill(1e9);
	}
	for (let j = 0; j < memo[0].length; j++) {
		memo[0][j] = 0;
	}
	for (let i = 1; i < memo.length; i++) {
		for (let j = 0; j < memo[i].length; j++) {
			let res = 1e9;
			for (let k = 0; k < 3; k++) {
				if (k !== j) {
					res = Math.min(res, cost[i - 1][j] + memo[i - 1][k]);
				}
			}
			memo[i][j] = res;
		}
	}
	let result = 1e9;
	for (let j = 0; j < memo[n].length; j++) {
		result = Math.min(result, memo[n][j]);
	}
	console.log(result);
};
