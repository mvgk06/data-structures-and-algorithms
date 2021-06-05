/*

Problem
https://leetcode.com/problems/binary-search/

Approach
- Divide the array into two.
- If the mid is equal to the target return it.
- Else if the mid is smaller than the target then search on the right subarray.
- Else search on the left subarray.

Time - O(log(n))
Space - O(1)

*/

const search = function (nums, target) {

    let start = 0, end = nums.length - 1, mid;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    return -1;
};