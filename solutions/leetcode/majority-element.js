/*

Problem

https://leetcode.com/problems/majority-element/

Approach

1. Sorting
- Sort the array.
- Return the mid which is the majority element.

Time - O(n*log(n))
Space - O(1)

2. Hashing
- Store the occurences of elements in a map.
- Return the element that occurs more than n/2 times.

Time - O(n)
Space - O(n)

3. Boyer moore voting
- Assume the first element as majority and make the count as 1.
- If the current element is equal to the majority element, then increment the count.
- Else decrement the count.
- If the count becomes equal to 0, then reset the count to 1 and assign the current element as majority.
- Return the majority element.

Time - O(n)
Space - O(1)

n - number of elements

*/

/* Sorting */

const majorityElement = function (nums) {
	nums.sort((a, b) => {
		if (a < b) {
			return -1;
		}
		return 1;
	});
	return nums[Math.floor(nums.length / 2)];
};

/* Hashing */

const majorityElement2 = function (nums) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			map.set(nums[i], map.get(nums[i]) + 1);
		} else {
			map.set(nums[i], 1);
		}
	}
	for (let key of map.keys()) {
		if (map.get(key) > Math.floor(nums.length / 2)) {
			return key;
		}
	}
};

/* Boyer moore voting */

const majorityElement3 = function (nums) {
	let count = 1,
		result = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === result) {
			count++;
		} else {
			count--;
		}
		if (count == 0) {
			count = 1;
			result = nums[i];
		}
	}
	return result;
};
