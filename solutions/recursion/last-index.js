/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/last-index-official/ojquestion

Approach
- If the current element is equal to the key, then return the current index.
- Else recursively find the last index for smaller sub problems and return it.
- If n becomes equal to 0, then return -1.

Time - O(n)
Space - O(n)

n - number of elements

*/

const lastIndex = (n, arr, key) => {
	if (n === 0) {
		return -1;
	}
	if (arr[n - 1] === key) {
		return n - 1;
	}
	return lastIndex(n - 1, arr, key);
};

const solve = (n, arr, key) => {
	const result = lastIndex(n, arr, key);
	console.log(result);
};
