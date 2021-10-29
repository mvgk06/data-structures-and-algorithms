/*

Problem

https://leetcode.com/problems/coin-change/

Approach

1. Top down
- The memo[i][j] represents the minimum coins required to get the amount j if we can pick elements till ith index.
- At each index, we have two choices either we pick or don't pick the current coin.
- After making a choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If index is out of bounds and if the amount is 0 then return 0.
- Else it's not possible to get the required amount, then return a maximum number.
- If the current subproblem is already solved, then return it's solution instead of recomputing the solution again.

Time - O(n*amount)
Space - O(n*amount)

2. Bottom up
- Create a memo array and initialize the base cases.
- The memo[i][j] represents the minimum coins required to get the amount j when the size of the input is i.
- At each index, we have two choices either we pick or don't pick the current coin.
- Use the memo to get the solution of the smaller sub-problems.
- Return the cell (n, amount) which contains the solution for the main problem.

Time - O(n*amount)
Space - O(n*amount)

3. Bottom up (space optimized)
- To compute the current row, we need the solutions only from the current and the previous row. 
- So we can just have two arrays previous and current to keep track of the solution of the subproblems.
- Use the current and the previous row to get the solution of the current row.
- Update the previous row as current row.
- Return prev[amount] which contains the solution for the main problem.

Time - O(n*amount)
Space - O(amount)

n - number of elements
amount - total amount

*/

/* Top down */

const coinChangeHelper = (coins, amt, i, memo) => {
	if (i < 0) {
		if (amt === 0) {
			return 0;
		}
		return Number.MAX_VALUE;
	}
	if (memo[i][amt] != -1) {
		return memo[i][amt];
	}
	if (coins[i] <= amt) {
		const pick = 1 + coinChangeHelper(coins, amt - coins[i], i, memo);
		const dontPick = coinChangeHelper(coins, amt, i - 1, memo);
		memo[i][amt] = Math.min(pick, dontPick);
	} else {
		const dontPick = coinChangeHelper(coins, amt, i - 1, memo);
		memo[i][amt] = dontPick;
	}
	return memo[i][amt];
};

const coinChange = function (coins, amount) {
	const memo = new Array(coins.length);
	for (let i = 0; i < memo.length; i++) {
		memo[i] = new Array(amount + 1).fill(-1);
	}
	const result = coinChangeHelper(coins, amount, coins.length - 1, memo);
	if (result != Number.MAX_VALUE) {
		return result;
	}
	return -1;
};

/* Bottom up */

const coinChange2 = function (coins, amount) {
	const memo = new Array(coins.length + 1);
	for (let i = 0; i < memo.length; i++) {
		memo[i] = new Array(amount + 1).fill(-1);
	}
	for (let j = 0; j < memo[0].length; j++) {
		memo[0][j] = Number.MAX_VALUE;
	}
	for (let i = 0; i < memo.length; i++) {
		memo[i][0] = 0;
	}
	for (let i = 1; i < memo.length; i++) {
		for (let j = 1; j < memo[i].length; j++) {
			if (coins[i - 1] <= j) {
				memo[i][j] = Math.min(1 + memo[i][j - coins[i - 1]], memo[i - 1][j]);
			} else {
				memo[i][j] = memo[i - 1][j];
			}
		}
	}
	const result = memo[coins.length][amount];
	if (result != Number.MAX_VALUE) {
		return result;
	}
	return -1;
};

/* Bottom up (space optimized) */

const coinChange3 = function (coins, amount) {
	let prev = new Array(amount + 1).fill(Number.MAX_VALUE);
	prev[0] = 0;
	for (let i = 1; i <= coins.length; i++) {
		const curr = new Array(amount + 1);
		curr[0] = 0;
		for (let j = 1; j <= amount; j++) {
			if (coins[i - 1] <= j) {
				curr[j] = Math.min(1 + curr[j - coins[i - 1]], prev[j]);
			} else {
				curr[j] = prev[j];
			}
		}
		prev = [...curr];
	}
	const result = prev[amount];
	if (result != Number.MAX_VALUE) {
		return result;
	}
	return -1;
};
