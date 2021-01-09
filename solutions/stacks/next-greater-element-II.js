/*

Stack

Time - O(n)
Space - O(n)

*/

const computeNearestGreatestOnRight = (nums, right, stack) => {

    let currIndex = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length != 0 && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            right[currIndex] = -1;
        }
        else {
            right[currIndex] = stack[stack.length - 1];
        }
        currIndex--;
        stack.push(i);
    }

};

const getNearestGreatestOnRight = (nums) => {

    let right = new Array(nums.length).fill(0), stack = [];

    for (let i = 1; i <= 2; i++) {
        computeNearestGreatestOnRight(nums, right, stack);
    }

    return right;
};

const nextGreaterElements = function (nums) {

    const right = getNearestGreatestOnRight(nums);
    const result = [];
    for (let i = 0; i < right.length; i++) {
        if (right[i] === -1) {
            result[i] = -1;
        }
        else {
            result[i] = nums[right[i]];
        }
    }

    return result;
};