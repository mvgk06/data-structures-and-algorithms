/*

Problem

https://leetcode.com/problems/sqrtx/

Approach

1. Linear search
- Traverse all the numbers from 0 till x.
- If the square of i is equal to x, then return i.
- Else if the square of i is greater than x, then return i-1.

Time - O(n)
Space - O(1)

2. Binary search
- Consider the range from 0 till x as the search space.
- Divide the search space into two.
- If the square of mid is equal to x, then return mid.
- Else if the square of mid is greater than x, then mark mid-1 as potential result and search on the left subarray.
- Else search on the right subarray.
- Return the result.

Time - O(log(n))
Space - O(1)

n - number of elements

*/

/* Linear search */

const mySqrt = function (x) {
	for (let i = 0; i <= x; i++) {
		const sq = i * i;
		if (sq === x) {
			return i;
		} else if (sq > x) {
			return i - 1;
		}
	}
};

/* Binary search */

const mySqrt2 = function (x) {
	let start = 0,
		end = x,
		result = -1;
	while (start <= end) {
		const mid = Math.floor(start + (end - start) / 2);
		const sq = mid * mid;
		if (sq === x) {
			return mid;
		} else if (sq > x) {
			result = mid - 1;
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return result;
};
