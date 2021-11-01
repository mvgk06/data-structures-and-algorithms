/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/count-encodings-official/ojquestion

Approach

1. Top down
- The memo[i], represents the number of encodings till the ith index.
- At each index we have two choices, either we can encode one or two numbers.
- After making a choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If i is less than equal to 0, then 1 encoding is possible.
- If the current sub-problem is already solved, then return its solution instead of recomputing the solution again. 

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo and initialize the base case.
- The memo[i], represents the number of encodings till the ith index.
- At each index we have two choices, either we can encode one or two numbers.
- Use the memo to get the solutions of smaller sub-problem.
- Print the last element in memo which gives the solution for the main problem.

Time - O(n)
Space - O(n)

n - size of the string

*/

/* Top down */

const countEncodings = (s, i, memo) => {
	if (i <= 0) {
		return 1;
	}
	if (memo[i] != -1) {
		return memo[i];
	}
	let result = 0;
	if (s[i - 1] != '0' && s[i] != '0') {
		if (s[i - 1] === '1' || s[i - 1] === '2') {
			result = countEncodings(s, i - 2, memo) + countEncodings(s, i - 1, memo);
		} else {
			result = countEncodings(s, i - 1, memo);
		}
	} else if (s[i - 1] != '0' && s[i] === '0') {
		if (s[i - 1] === '1' || s[i - 1] === '2') {
			result = countEncodings(s, i - 2, memo);
		} else if (s[i - 1] === '0' && s[i] != '0') {
			result = countEncodings(s, i - 1, memo);
		}
	}
	memo[i] = result;
	return memo[i];
};

const solve = (s) => {
	const memo = new Array(s.length).fill(-1);
	const result = countEncodings(s, s.length - 1, memo);
	console.log(result);
};

/* Bottom up */

const solve2 = (s) => {
	const memo = new Array(s.length).fill(0);
	for (let i = 0; i < memo.length; i++) {
		if (i === 0) {
			memo[i] = 1;
		} else if (s[i - 1] != '0' && s[i] != '0') {
			if (s[i - 1] === '1' || s[i - 1] === '2') {
				memo[i] = (i - 2 >= 0 ? memo[i - 2] : 1) + memo[i - 1];
			} else {
				memo[i] = memo[i - 1];
			}
		} else if (s[i - 1] != '0' && s[i] === '0') {
			if (s[i - 1] === '1' || s[i - 1] === '2') {
				memo[i] = i - 2 >= 0 ? memo[i - 2] : 1;
			}
		} else if (s[i - 1] === '0' && s[i] != '0') {
			memo[i] = memo[i - 1];
		}
	}
	const result = memo[s.length - 1];
	console.log(result);
};
