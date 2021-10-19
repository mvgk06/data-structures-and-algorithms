/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/first-index-official/ojquestion

Approach
- If the current element is equal to the key, then return the current index.
- Else recursively find the first index from the rest of the elements and return it.
- If the end of the array is reached, then return -1.

Time - O(n)
Space - O(n)

n - number of elements

*/

const helper = (i, arr, key) => {
	if (i === arr.length) {
		return -1;
	}
	if (arr[i] === key) {
		return i;
	}
	return helper(i + 1, arr, key);
};

const solve = (arr, key) => {
	const result = helper(0, arr, key);
	console.log(result);
};
