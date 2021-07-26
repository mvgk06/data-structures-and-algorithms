/*

Problem

https://leetcode.com/problems/find-peak-element/

Approach
- Divide the array into two.
- If the mid is greater than its left and right neighbor, then return it.
- Else if the left is greater than mid, then search on the left subarray.
- Else search on the right subarray.

Time - O(log(n))
Space - O(1)

n - number of elements

*/

const findPeakElement = function (nums) {
    if (nums.length === 1) {
        return 0;
    }
    let start = 0, end = nums.length - 1, mid;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (mid > 0 && mid < nums.length - 1) {
            if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            else if (nums[mid - 1] > nums[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else if (mid === 0) {
            if (nums[mid] > nums[mid + 1]) {
                return mid;
            }
            else {
                start = mid + 1;
            }
        }
        else if (mid === nums.length - 1) {
            if (nums[mid] > nums[mid - 1]) {
                return mid;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return -1;
};