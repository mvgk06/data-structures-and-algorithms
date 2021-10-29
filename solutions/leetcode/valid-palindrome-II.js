/*

Problem

https://leetcode.com/problems/valid-palindrome-ii/

Approach

1. Recursive
- Use two pointers i, j.
- If the ith and jth character is same, then recursively check if palindrome for (i+1,j-1).
- Else if a character was already removed, then return false.
- Else recursively check if plaindrome for (i+1,j) and (i,j-1).
- If i is greater than or equal to j, then return true.

Time - O(n)
Space - O(n)

2. Iterative
- Use two pointers i, j.
- If the ith and jth character is same, then increment i by 1 and decrement j by 1.
- Else if a character was already removed, then return false.
- Else check if palindrome for (i+1,j) and (i,j-1).
- If i is greater than or equal to j, then return true.

Time - O(n)
Space - O(1)

n - size of the string

*/

/* Recursive */

const helper = (s, i, j, charRemoved) => {
	if (i >= j) {
		return true;
	}
	if (s[i] === s[j]) {
		return helper(s, i + 1, j - 1, charRemoved);
	} else {
		if (charRemoved) {
			return false;
		}
		return helper(s, i + 1, j, true) || helper(s, i, j - 1, true);
	}
};

const validPalindrome = function (s) {
	return helper(s, 0, s.length - 1, false);
};

/* Iterative */

const isValid = (s, i, j) => {
	while (i < j) {
		if (s[i] === s[j]) {
			i++;
			j--;
		} else {
			return false;
		}
	}
	return true;
};

const validPalindrome2 = function (s) {
	let i = 0,
		j = s.length - 1,
		charRemoved = false;
	while (i < j) {
		if (s[i] === s[j]) {
			i++;
			j--;
		} else {
			if (charRemoved) {
				return false;
			} else {
				return isValid(s, i + 1, j) || isValid(s, i, j - 1);
			}
		}
	}
	return true;
};
