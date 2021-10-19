/* 

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/power-linear-official/ojquestion

Approach
- Multiply the base with smaller power (recursively solve for smaller sub-problems).
- If the exponent is equal to 0, then return 1.

Time - O(m)
Space - O(m)

n - base
m - exponent

*/

const helper = (n, m) => {
	if (m === 0) {
		return 1;
	}
	return n * helper(n, m - 1);
};

const solve = (n, m) => {
	const result = helper(n, m);
	console.log(result);
};
