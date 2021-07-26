/*

Problem

https://leetcode.com/problems/search-in-rotated-sorted-array/

Approach
- Divide the array into two.
- If the mid is equal to the target, then return the index.
- Else if the left subarray is sorted and the target is in that range, then search on left subarray else search on right subarray.
- Else the right subarray is sorted and the target is in that range, then search on right subarray else search on left subarray.

Time - O(log(n))
Space - O(1)

n - number of elements

*/

const search = function (nums, target) {
    let start = 0, end = nums.length - 1, mid;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target <= nums[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else {
            if (target >= nums[mid] && target <= nums[end]) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return -1;
};