/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/zero-one-knapsack-official/ojquestion

Approach

1. Top down
- The memo[i][j] represents the maximum value that can be obtained if the capacity is j and elements till the ith index can be used.
- At each index, we have two choices either we pick or don't pick the current element.
- After making a choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If the capacity or index becomes 0, then return 0.
- If the current subproblem is already solved, then return it's solution instead of recomputing the solution again.

Time - O(n*capacity)
Space - O(n*capacity)

2. Bottom up
- Create a memo array and initialize with base cases.
- The memo[i][j] represents the maximum value that can be obtained if the capacity is j and the size of the input is i.
- At each index, we have two choices either we pick or don't pick the current element.
- Use the memo to get the solutions of smaller sub-problems.
- Print the cell (n,capacity) which contains the solution for the main problem.

Time - O(n*capacity)
Space - O(n*capacity)

3. Bottom up (space optimized)
- To compute the solution for the current row we only need the solutions of the previous row. 
- Use two arrays previous and current to keep track of the solution of the subproblems.
- Compute the current row using the previous row.
- Update the previous row as current row.
- Print prev[capacity] which contains the solution for the main problem.

Time - O(n*capacity)
Space - O(capacity)

n - number of elements
capacity - total capacity

*/

/* Top down */

const knapsack = (profits, weights, capacity, index, memo) => {
	if (index < 0 || capacity <= 0) {
		return 0;
	}
	if (memo[index][capacity] != -1) {
		return memo[index][capacity];
	}
	if (weights[index] <= capacity) {
		const pick = profits[index] + knapsack(profits, weights, capacity - weights[index], index - 1, memo);
		const dontPick = knapsack(profits, weights, capacity, index - 1, memo);
		memo[index][capacity] = Math.max(pick, dontPick);
	}
	else {
		const dontPick = knapsack(profits, weights, capacity, index - 1, memo);
		memo[index][capacity] = dontPick;
	}
	return memo[index][capacity];
};

const solve = (n, profits, weights, capacity) => {
	const memo = new Array(n);
	for (let i = 0; i < memo.length; i++) {
		memo[i] = new Array(capacity + 1).fill(-1);
	}
	const result = knapsack(profits, weights, capacity, n - 1, memo);
	console.log(result);
};

/* Bottom up */

const solve2 = (n, profits, weights, capacity) => {
	const memo = new Array(n + 1);
	for (let i = 0; i < memo.length; i++) {
		memo[i] = new Array(capacity + 1).fill(-1);
	}
	for (let i = 0; i < memo.length; i++) {
		for (let j = 0; j < memo[i].length; j++) {
			if (i === 0 || j === 0) {
				memo[i][j] = 0;
			}
			else if (weights[i - 1] <= j) {
				memo[i][j] = Math.max(profits[i - 1] + memo[i - 1][j - weights[i - 1]], memo[i - 1][j]);
			}
			else {
				memo[i][j] = memo[i - 1][j];
			}
		}
	}
	const result = memo[n][capacity];
	console.log(result);
};

/* Bottom up (space optimized) */

const solve3 = (n, profits, weights, capacity) => {
	let prev = new Array(capacity + 1).fill(0);
	for (let i = 1; i <= n; i++) {
		const curr = new Array(capacity + 1);
		curr[0] = 0;
		for (let j = 1; j < curr.length; j++) {
			if (weights[i - 1] <= j) {
				curr[j] = Math.max(profits[i - 1] + prev[j - weights[i - 1]], prev[j]);
			}
			else {
				curr[j] = prev[j];
			}
		}
		prev = [...curr];
	}
	const result = prev[capacity];
	console.log(result);
};
