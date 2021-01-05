/* 

Binary search

Time - O(log n)
Space - O(1)

*/

const findMin = function (nums) {

    if (nums.length === 1) {
        return nums[0];
    }

    else if (nums.length === 2) {
        return (nums[0] < nums[1] ? nums[0] : nums[1]);
    }

    let start = 0, end = nums.length - 1, mid;
    const n = nums.length - 1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] < nums[(mid + n - 1) % n] && nums[mid] < nums[(mid + 1) % n]) {
            return nums[mid];
        }
        else if (nums[mid] < nums[nums.length - 1]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return -1;
};