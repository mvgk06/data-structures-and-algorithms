/*

Problem

https://leetcode.com/problems/string-compression/

Approach
- Initialize pointer i as 0, pointer j as 1 and len as 1.
- Traverse the array.
- If the current character is equal to the previous character, then increment j and len.
- Else set the character at i as character at j-1, increment i, set the len of the character, increment j and reset the len to 1.
- Set the last character, increment i, set its len and return pointer i.

Time - O(n)
Space - O(n)

n - number of elements

*/

const compress = function (chars) {
	let i = 0,
		j = 1,
		len = 1;
	while (j < chars.length) {
		if (chars[j] === chars[j - 1]) {
			j++;
			len++;
		} else {
			chars[i] = chars[j - 1];
			i++;
			if (len > 1) {
				const s = len.toString();
				for (let k = 0; k < s.length; k++) {
					chars[i] = s[k];
					i++;
				}
			}
			j++;
			len = 1;
		}
	}
	chars[i] = chars[j - 1];
	i++;
	if (len > 1) {
		const s = len.toString();
		for (let k = 0; k < s.length; k++) {
			chars[i] = s[k];
			i++;
		}
	}
	return i;
};
