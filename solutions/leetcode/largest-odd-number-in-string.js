/*

Problem

https://leetcode.com/problems/largest-odd-number-in-string/

Approach
- Traverse the string backwards and if the current digit is odd, then return the substring from 0 to current index.
- If no odd digit is found, then return an empty string.

Time - O(n)
Space - O(1)

n - size of the string

*/

const isOdd = (d) => {
	return d === 1 || d === 3 || d === 5 || d === 7 || d === 9;
};

const largestOddNumber = function (num) {
	for (let i = num.length - 1; i >= 0; i--) {
		const d = parseInt(num[i]);
		if (isOdd(d)) {
			return num.substring(0, i + 1);
		}
	}
	return '';
};
