/*

Problem

https://leetcode.com/problems/intersection-of-two-arrays-ii/

Approach
- Store the occurences of all the elements in array 1 in a map.
- Traverse the array 2 and if the current element exist in the map, then decreament the count and push it into the result.
- If the count of the element is 0, then remove it from the map.
- Return the result.

Time - O(n+m)
Space - O(n)

n - size of array 1
m - size of array 2

*/

const intersect = function (nums1, nums2) {
	const map = new Map();
	for (let i = 0; i < nums1.length; i++) {
		if (map.has(nums1[i])) {
			map.set(nums1[i], map.get(nums1[i]) + 1);
		} else {
			map.set(nums1[i], 1);
		}
	}
	const result = [];
	for (let i = 0; i < nums2.length; i++) {
		if (map.has(nums2[i])) {
			map.set(nums2[i], map.get(nums2[i]) - 1);
			if (map.get(nums2[i]) === 0) {
				map.delete(nums2[i]);
			}
			result.push(nums2[i]);
		}
	}
	return result;
};
