/*

Problem

https://leetcode.com/problems/remove-duplicates-from-sorted-array/

Approach

1. Brute force
- Use a temp array to copy the unique elements from the input.
- Copy the unique elements from the temp array back to the input.
- Return the size of the unique elements.

Time - O(n)
Space - O(n)

2. Two pointers
- Use two pointers one to keep track of last index of unique elements and the other to traverse the input.
- If the current element is unique, then swap it with the next index of the other pointer.
- Return the size of the unique elements.

Time - O(n)
Space - O(1)

n - number of elements

*/

/* Brute force */

const removeDuplicates = function (nums) {
    const n = nums.length;
    if (n === 0 || n === 1) {
        return n;
    }
    const temp = new Array(n).fill(undefined);
    temp[0] = nums[0];
    let i = 0;
    for (let j = 1; j < n; j++) {
        if (nums[j] != temp[i]) {
            temp[i + 1] = nums[j];
            i++;
        }
    }
    for (let k = 0; k < n; k++) {
        if (temp[k] != undefined) {
            nums[k] = temp[k];
        }
        else {
            return k;
        }
    }
    return n;
};

/* Two pointers */

const removeDuplicates2 = function (nums) {
    const n = nums.length;
    if (n === 0 || n === 1) {
        return n;
    }
    let i = 0, j = 1;
    while (j < n) {
        if (nums[i] === nums[j]) {
            j++;
        }
        else {
            const temp = nums[i + 1];
            nums[i + 1] = nums[j];
            nums[j] = temp;
            i++;
            j++;
        }
    }
    return i + 1;
};