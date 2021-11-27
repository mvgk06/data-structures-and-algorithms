/*

Problem

https://pepcoding.com/resources/online-java-foundation/string,-string-builder-and-arraylist/string-with-difference-of-every-two-consecutive-characters-official/ojquestion

Approach
- Push the first character into the result.
- Traverse the string.
- Push the ascii difference between the current and the previous character along with the current character into the result.
- Print the result as a string.

Time - O(n)
Space - O(n)

n - size of string

*/

const solve = (s) => {
	const result = [s[0]];
	for (let i = 1; i < s.length; i++) {
		result.push(`${s.charCodeAt(i) - s.charCodeAt(i - 1)}` + s[i]);
	}
	console.log(result.join(''));
};
