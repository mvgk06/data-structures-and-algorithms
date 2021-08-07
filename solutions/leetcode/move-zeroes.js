/*

Problem

https://leetcode.com/problems/move-zeroes/

Approach

1. Brute force
- Use two pointers i, j and a temp array to move all the non zeroes to the start.
- Traverse and set the rest of the elements in temp as zeroes.
- Copy the elements in the temp array back to the input array.

Time - O(n)
Space - O(n)

2. Copying in place
- Use two pointers i, j and move all the non zeroes to the start.
- Traverse and set the rest of the elements in input as zeroes.

Time - O(n)
Space - O(1)

3. Swapping
- Keep track of the index of first zero.
- Traverse the array and if the current element is non zero then swap it with the first zero.
- Move the first zero by 1.
- Return the array.

Time - O(n)
Space - O(1)

n - number of elements

*/

/* Brute force */

const moveZeroes = function (nums) {
    const n = nums.length, temp = new Array(n);
    let i = 0;
    for (let j = 0; j < n; j++) {
        if (nums[j] != 0) {
            temp[i] = nums[j];
            i++;
        }
    }
    while (i < n) {
        temp[i] = 0;
        i++;
    }
    for (let j = 0; j < n; j++) {
        nums[j] = temp[j];
    }
};

/* Copying in place */

const moveZeroes2 = function (nums) {
    const n = nums.length;
    let i = 0;
    for (let j = 0; j < n; j++) {
        if (nums[j] != 0) {
            nums[i] = nums[j];
            i++;
        }
    }
    while (i < n) {
        nums[i] = 0;
        i++;
    }
};

/* Swapping */

const moveZeroes3 = function (nums) {
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