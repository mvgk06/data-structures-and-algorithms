/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-decreasing-official/ojquestion

Approach
- Print the current number.
- Recursively solve for smaller sub problems.
- If the number is equal to 0, then return.

Time - O(n)
Space - O(n)

n - number

*/

const helper = (n) => {
	if (n === 0) {
		return;
	}
	console.log(n);
	helper(n - 1);
};

const solve = (n) => {
	helper(n);
};
