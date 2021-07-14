/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/first-index-official/ojquestion

Approach
- If the current element is equal to the key then return the current index.
- Else recursively find the first index for smaller sub problems.
- If the end of the array is reached, then return -1.

Time - O(n)
Space - O(n)

n - number of elements

*/

const firstIndex = (index, arr, key) => {
	if (index === arr.length) {
		return -1;
	}
	if (arr[index] === key) {
		return index;
	}
	const result = firstIndex(index + 1, arr, key);
	if (result != -1) {
		return result;
	}
	return -1;
};

const solve = (n, arr, key) => {
	const result = firstIndex(0, arr, key);
	console.log(result);
};