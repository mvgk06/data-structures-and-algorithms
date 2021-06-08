/*

Approach
- If the current element is equal to the key then return the current index.
- Else recursively solve the smaller sub problems.
- If the end of the array is reached then return -1 to indicate that key is not found.

Time - O(n)
Space - O(n)

*/

const firstOccurrence = (arr, key, currIndex) => {
	if (currIndex === arr.length) {
		return -1;
	}

	if (arr[currIndex] === key) {
		return currIndex;
	}

	return firstOccurrence(arr, key, currIndex + 1);
};