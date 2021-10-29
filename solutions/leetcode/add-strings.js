/*

Problem

https://leetcode.com/problems/add-strings/

Approach
- Use two pointers left, right and traverse from backwards. 
- Keep track of sum, carry and add the individual digits.

Time - O(n+m)
Space - O(n+m)

n - size of string 1
m - size of string 2

*/

const addStrings = function (num1, num2) {
	let left = num1.length - 1,
		right = num2.length - 1,
		carry = 0,
		result = '';
	while (left >= 0 || right >= 0) {
		let sum =
			(left >= 0 ? parseInt(num1[left]) : 0) +
			(right >= 0 ? parseInt(num2[right]) : 0) +
			carry;
		if (sum > 9) {
			carry = Math.floor(sum / 10);
			sum = sum % 10;
		} else {
			carry = 0;
		}
		result = sum.toString() + result;
		left -= 1;
		right -= 1;
	}
	if (carry != 0) {
		result = carry.toString() + result;
	}
	return result;
};
