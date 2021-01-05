/*

Binary search

Time - O(log n)
Space - O(1)

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
            else if (nums[mid] < nums[mid - 1]) {
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