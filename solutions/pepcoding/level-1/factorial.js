/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/factorial-official/ojquestion

Approach
- Multiply the current number with the factorial of smaller number (recursively solve for smaller sub problems).
- If the current number is 0, then return 1.

Time - O(n)
Space - O(n)

n - number

*/

const helper = (n) => {
	if (n === 0) {
		return 1;
	}
	return n * helper(n - 1);
};

const solve = (n) => {
	const result = helper(n);
	console.log(result);
};
