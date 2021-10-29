/*

Problem

https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/

Approach

1. Brute force
- Store all the substrings of the word in a set.
- Traverse the patterns array, if the current pattern is in the set, then increment the result by 1.
- Return the result.

Time - O(n^2+m)
Space - O(n^2)

2. Pattern search
- Traverse the patterns array, if the current pattern is a substring of word, then increment the result by 1.
- Return the result.

Time - O(m*n)
Space - O(m*n)

n - size of word
m - number of elements in patterns

*/

/* Brute force */

const numOfStrings = function (patterns, word) {
	const set = new Set();
	for (let i = 0; i < word.length; i++) {
		for (let j = i; j < word.length; j++) {
			set.add(word.substring(i, j + 1));
		}
	}
	let result = 0;
	for (let i = 0; i < patterns.length; i++) {
		if (set.has(patterns[i])) {
			result++;
		}
	}
	return result;
};

/* Pattern search */

const numOfStrings2 = function (patterns, word) {
	let result = 0;
	for (let i = 0; i < patterns.length; i++) {
		if (word.indexOf(patterns[i]) != -1) {
			result++;
		}
	}
	return result;
};
