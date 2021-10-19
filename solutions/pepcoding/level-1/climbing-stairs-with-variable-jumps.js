/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/climb-stairs-with-variable-jumps-official/ojquestion

Approach

1. Top down
- The memo[i] represents the number of ways to reach the last stair from the ith stair.  
- At each stair, we have at most k choices or jumps that we can make.
- After making a choice, recursively solve for the smaller subproblems and store the solution in the memo.
- If the last stair is reached, then return 1 to indicate that a way is found.
- If out of bounds, then return 0 to indicate that no way is possible.
- If the current subproblem is already solved, then return it's solution instead of recomputing the solution again.

Time - O(n*k)
Space - O(n)

2. Bottom up
- Create a memo and initialize with base cases.
- The memo[i] represents the number of ways to reach the last stair from the ith stair.  
- At each stair, we have at most k choices or jumps that we can make.
- Use the memo to get the solution for smaller subproblems.
- Print memo[0] which contains the solution to the main problem.

Time - O(n*k)
Space - O(n)

n - number of stairs
k - maximum jump length

*/

/* Top down */

const waysToClimb = (i, n, jumps, memo) => {
	if (i === n) {
		return 1;
	}
	if (i > n) {
		return 0;
	}
	if (memo[i] != -1) {
		return memo[i];
	}
	let ways = 0;
	for (let j = 1; j <= jumps[i]; j++) {
		ways += waysToClimb(i + j, n, jumps, memo);
	}
	memo[i] = ways;
	return memo[i];
};

const solve = (n, jumps) => {
	const memo = new Array(n + 1).fill(-1);
	const result = waysToClimb(0, n, jumps, memo);
	console.log(result);
};

/* Bottom up */

const solve2 = (n, jumps) => {
	const memo = new Array(n + 1).fill(0);
	memo[n] = 1;
	for (let i = n - 1; i >= 0; i--) {
		let ways = 0;
		for (let j = 1; j <= jumps[i]; j++) {
			if (i + j <= n) {
				ways += memo[i + j];
			}
		}
		memo[i] = ways;
	}
	const result = memo[0];
	console.log(result);
};
