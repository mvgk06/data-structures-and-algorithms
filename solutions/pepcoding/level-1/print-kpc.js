/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-kpc-official/ojquestion

Approach
- At each index we go through the characters of the string mapped to the current number and we have two choices either we pick or don't pick the character.
- After making a choice, recursively solve for the smaller sub problems.
- Backtrack, undo the choice that was made (this will be taken care by recursion as strings are passed by value) and try other choices.
- If the index becomes equal to the length of the string and if the length of current combination is equal to the string length, then push the current combination 
into the result and return.

Time - O(4^n)
Space - O(4^n)

n - size of the string

*/

const helper = (s, map, i, curr, result) => {
	if (i === s.length) {
		if (curr.length === s.length) {
			result.push(curr);
		}
		return;
	}
	const str = map[s[i]];
	for (let j = 0; j < str.length; j++) {
		helper(s, map, i + 1, curr + str[j], result);
		helper(s, map, i + 1, curr, result);
	}
};

const solve = (s) => {
	const map = {
		0: '.;',
		1: 'abc',
		2: 'def',
		3: 'ghi',
		4: 'jkl',
		5: 'mno',
		6: 'pqrs',
		7: 'tu',
		8: 'vwx',
		9: 'yz',
	};
	const curr = '',
		result = [];
	helper(s, map, 0, curr, result);
	for (let i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
};
