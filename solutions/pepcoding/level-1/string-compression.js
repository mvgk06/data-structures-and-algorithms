/*

Problem

https://pepcoding.com/resources/online-java-foundation/string,-string-builder-and-arraylist/string-compression-official/ojquestion

Approach
- Initialize pointer i as 1 and len as 1.
- Traverse the string.
- If the current character is equal to the previous character, then increment i and len.
- Else push the character at i-1 and its len into the result, increment i and reset the len to 1.
- Push the last character and its len into the result, and return the result as a string.

Time - O(n)
Space - O(n)

n - size of string

*/

const compress = (s) => {
	const result = [];
	let i = 1;
	while (i < s.length) {
		if (s[i] === s[i - 1]) {
			i++;
		} else {
			result.push(s[i - 1]);
			i++;
		}
	}
	result.push(s[i - 1]);
	return result.join('');
};

const compressWithLength = (s) => {
	const result = [];
	let i = 1,
		len = 1;
	while (i < s.length) {
		if (s[i] === s[i - 1]) {
			i++;
			len++;
		} else {
			result.push(s[i - 1]);
			if (len > 1) {
				result.push(len.toString());
			}
			i++;
			len = 1;
		}
	}
	result.push(s[i - 1]);
	if (len > 1) {
		result.push(len.toString());
	}
	return result.join('');
};

const solve = (s) => {
	console.log(compress(s));
	console.log(compressWithLength(s));
};
