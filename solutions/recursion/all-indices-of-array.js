/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/all-indices-official/ojquestion

Approach
- Recursively find all the matching indices for rest of the elements.
- If the current element is equal to the key then add it to the result.
- If the index is less than 0, then return.

Time - O(n)
Space - O(n)

n - number of items

*/

const allIndices = (arr, key, index, result) => {
	if (index < 0) {
		return;
	}
	allIndices(arr, key, index - 1, result);
	if (arr[index] === key) {
		result.push(index);
	}
};

const solve = (n, arr, key) => {
	const result = [];
	allIndices(arr, key, n - 1, result);
	for (let i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
};