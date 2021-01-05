/*

Binary search

Time - O(log n)
Space - O(1)

*/

const getPosition = (nums, target, position) => {

    let start = 0, end = nums.length - 1, mid, result = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] === target) {
            result = mid;
            if (position) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else if (target > nums[mid]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    return result;
};

const searchRange = function (nums, target) {

    const output = [];

    output.push(getPosition(nums, target, true));

    if (output[0] === -1) {
        output.push(-1);
        return output;
    }

    output.push(getPosition(nums, target, false));
    return output;
};