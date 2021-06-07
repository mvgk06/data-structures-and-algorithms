/*

Problem
https://leetcode.com/problems/subsets/

Approach
- For every element I have two choices either I pick the current element or I don't pick the current element.
- After making a choice, recursively solve the smaller sub problems.
- Backtrack, undo the choice that was made and try other choices.
- If the end of the array is reached there are no more choices to make so store the current subset in the result.

Time - O(2^n)
Space - O(n)

*/

const findSubsets = (nums, result, currIndex, currSubset) => {

    if (currIndex === nums.length) {
        result.push([...currSubset]);
        return;
    }

    currSubset.push(nums[currIndex]);
    findSubsets(nums, result, currIndex + 1, currSubset);
    currSubset.pop();
    findSubsets(nums, result, currIndex + 1, currSubset);
};

const subsets = function (nums) {
    const result = [], currSubset = [];
    findSubsets(nums, result, 0, currSubset);
    return result;
};