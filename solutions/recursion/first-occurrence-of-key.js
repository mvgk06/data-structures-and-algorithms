/*

Recursion

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