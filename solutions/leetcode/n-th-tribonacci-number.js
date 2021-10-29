/*

Problem

https://leetcode.com/problems/n-th-tribonacci-number/

Approach

1. Top down
- Each state in the memo represents the ith tribonacci number.
- For each index, the tribonacci is the sum of the previous three tribonacci.
- After making the choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If n is less than equal to 1, then return n.
- If n is 2, then return 1.
- If the current subproblem is already computed then return it instead of recomputing them.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with base cases.
- Each state in the memo represents the ith tribonacci number.
- For each index, the tribonacci is the sum of the previous three tribonacci.
- Use the memo to get the solutions to the smaller sub-problems.
- Return the last element of the memo which contains the nth tribonacci.

Time - O(n)
Space - O(n)

3. Bottom up (space optimized)
- To compute the current subproblem we only need the solution of the previous three sub-problems.
- So keep three variables to store the solutions of the previous three sub-problems.
- Initialize the variables with the base case.
- Loop and compute the solution for n. 

Time - O(n)
Space - O(1)

n - number

*/

/* Top down */

const tribHelper = (n, memo) => {
	if (n <= 1) {
		return n;
	}
	if (n === 2) {
		return 1;
	}
	if (memo[n] != -1) {
		return memo[n];
	}
	const first = tribHelper(n - 1, memo);
	const second = tribHelper(n - 2, memo);
	const third = tribHelper(n - 3, memo);
	memo[n] = first + second + third;
	return memo[n];
};

const tribonacci = function (n) {
	const memo = new Array(n + 1).fill(-1);
	return tribHelper(n, memo);
};

/* Bottom up */

const tribonacci2 = function (n) {
	const memo = new Array(n + 1).fill(-1);
	memo[0] = 0;
	memo[1] = 1;
	memo[2] = 1;
	for (let i = 3; i < memo.length; i++) {
		memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
	}
	return memo[n];
};

/* Bottom up (space optimized) */

const tribonacci3 = function (n) {
	let first = 0,
		second = 1,
		third = 1;
	if (n === 0) {
		return first;
	}
	if (n === 1) {
		return second;
	}
	for (let i = 3; i <= n; i++) {
		const next = first + second + third;
		first = second;
		second = third;
		third = next;
	}
	return third;
};
