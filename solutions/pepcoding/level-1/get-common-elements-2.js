/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/hashmap-and-heap/gce2-official/ojquestion

Approach
- Store all the elmenents from array 1 into a map.
- Traverse the array 2 if the current element exist in the map and its count is not zero, then print it and reduce its count in the map by 1.

Time - O(n+m)
Space - O(n)

n - number of elements in array 1
m - number of elements in array 2

*/

const solve = (arr1, arr2) => {
	const map = new Map();
	for (let i = 0; i < arr1.length; i++) {
		if (map.has(arr1[i])) {
			map.set(arr1[i], map.get(arr1[i]) + 1);
		} else {
			map.set(arr1[i], 1);
		}
	}
	for (const key of arr2) {
		if (map.has(key)) {
			const count = map.get(key);
			if (count !== 0) {
				console.log(key);
				map.set(key, count - 1);
			}
		}
	}
};
