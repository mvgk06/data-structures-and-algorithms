/*

Problem

https://leetcode.com/problems/reverse-string/

Approach

1. Copy backwards
- Copy the string from backwards using a temp array.

Time - O(n)
Space - O(n)

2. Two pointers
- Swap the characters using two pointers start, end until the string is reversed.

Time - O(n)
Space - O(1)

n - size of the string

*/

/* Copy backwards */

const reverseString = function (s) {
	const temp = [];
	for (let i = s.length - 1; i >= 0; i--) {
		temp.push(s[i]);
	}
	for (let i = 0; i < s.length; i++) {
		s[i] = temp[i];
	}
	return s;
};

/* Two pointers */

const reverseString2 = function (s) {
	let start = 0,
		end = s.length - 1;
	while (start < end) {
		const temp = s[start];
		s[start] = s[end];
		s[end] = temp;
		start++;
		end--;
	}
	return s;
};
