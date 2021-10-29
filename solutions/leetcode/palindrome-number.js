/*

Problem

https://leetcode.com/problems/palindrome-number/

Approach

1. Two pointers
- If the number is negative, then return false.
- Convert the number to a string.
- Check if it is a palindrome using two pointers from left and right.

Time - O(d)
Space - O(d)

2. Reverse the number
- If the number is negative or the last digit is 0 and the number is not zero, then return false.
- Reverse half of the number (to avoid overflow) by getting the digits from the end.
- If the first half of the number is equal to reverse of second half (in case of even digits) or if the first half is equal to reverse of second half divided by 
10 to skip the middle digits (in case of odd digits), then return true.
- Else return false.

Time - O(log(n))
Space - O(1)

d - number of digits
n - number

*/

/* Two pointers */

const isPalindrome = function (x) {
	if (x < 0) {
		return false;
	}
	const s = x.toString();
	let i = 0,
		j = s.length - 1;
	while (i < j) {
		if (s[i] != s[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
};

/* Reverse the number */

const isPalindrome2 = function (x) {
	if (x < 0 || (x % 10 === 0 && x != 0)) {
		return false;
	}
	let rev = 0;
	while (rev < x) {
		const digit = x % 10;
		x = Math.floor(x / 10);
		rev *= 10;
		rev += digit;
	}
	return rev === x || Math.floor(rev / 10) === x;
};
