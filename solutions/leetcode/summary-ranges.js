/*

Problem

https://leetcode.com/problems/summary-ranges/

Approach
- Use two pointers to keep track of the starting and the ending sequence.
- If the current element is not following the sequence then push the current sequence into the result and start a new sequence.
- Else move the end pointer.

Time - O(n)
Space - O(1)

n - number of elements

*/

const summaryRanges = function (nums) {
    const n = nums.length;
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [nums[0].toString()];
    }
    let i = 0, j = 1, result = [];
    while (j < n) {
        if (nums[j] != 1 + nums[j - 1]) {
            if (j === i + 1) {
                result.push(nums[i].toString());
            }
            else {
                result.push(nums[i] + '->' + nums[j - 1]);
            }
            i = j;
        }
        j++;
    }
    if (j === i + 1) {
        result.push(nums[i].toString());
    }
    else {
        result.push(nums[i] + '->' + nums[j - 1]);
    }
    return result;
};