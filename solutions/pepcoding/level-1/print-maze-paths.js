/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-maze-paths-official/ojquestion

Approach
- At each index, we have two choices either we can go horizontal (right) or vertical (bottom).
- After making a choice, recursively solve for the smaller sub problems.
- Backtrack, undo the choice that was made (this will be taken care by recursion as numbers are passed by value) and try other choices.
- If cell (n-1,m-1) is reached, then push the current path into the result and return.
- If out of bounds, then return.

Time - O(2^a)
Space - O(a+a*b)

n - number of rows
m - number of columns
a - length of the longest path
b - number of paths

*/

const helper = (n, m, i, j, curr, result) => {
	if (i === n - 1 && j === m - 1) {
		result.push(curr);
		return;
	}
	if (i >= n || j >= m) {
		return;
	}
	helper(n, m, i, j + 1, curr + 'h', result);
	helper(n, m, i + 1, j, curr + 'v', result);
};

const solve = (n, m) => {
	const curr = '',
		result = [];
	helper(n, m, 0, 0, curr, result);
	for (let i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
};
