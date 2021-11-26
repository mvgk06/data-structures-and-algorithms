/*

Problem

https://pepcoding.com/resources/online-java-foundation/string,-string-builder-and-arraylist/toggle-case-official/ojquestion

Approach
- Traverse the string.
- If the current character is uppercase, then convert it into lowercase using ascii and push it into the result.
- Else convert it into uppercase using ascii and push it into the result.
- Return the result as a string.

Time - O(n)
Space - O(n)

n - size of string

*/

const isUpperCase = (code) => {
	return code >= 65 && code <= 90;
};

const toggleCase = (s) => {
	const result = [];
	for (let i = 0; i < s.length; i++) {
		const code = s.charCodeAt(i);
		if (isUpperCase(code)) {
			result.push(String.fromCharCode(code + 32));
		} else {
			result.push(String.fromCharCode(code - 32));
		}
	}
	return result.join('');
};

const solve = (s) => {
	console.log(toggleCase(s));
};
