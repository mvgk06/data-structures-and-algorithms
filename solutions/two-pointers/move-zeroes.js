/*

Problem

https://leetcode.com/problems/move-zeroes/

Approach
- Keep track of the index of first zero.
- Traverse the array and if the current element is non zero then swap it with the first zero.
- Move the first zero by 1.
- Return the array.

Time - O(n)
Space - O(1)

n - number of elements

*/

const moveZeroes = function (nums) {
    let firstZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            const temp = nums[i];
            nums[i] = nums[firstZero];
            nums[firstZero] = temp;
            firstZero++;
        }
    }
    return nums;
};