/*

Problem
https://leetcode.com/problems/subsets-ii/

Approach
- For every element I have two choices 
    - If the current element is equal to previous element then
        - If the previous element was already picked for the subset then I have two choices either I pick the current element or I don't pick the current element.
        - Else I will have only one choice that is to not pick the current element.
    - Else I have two choices either I pick the current element or I don't pick the current element.
- After making a choice, recursively solve the smaller sub problems.
- If the end of the array is reached there are no more choices to make so store the current subset in the result.

Time - O(2^n)
Space - O(n)

*/

const findUniqueSubsets = (nums, result, currIndex, currSubset, prevPicked) => {

    if (currIndex === nums.length) {
        result.push([...currSubset]);
        return;
    }

    if (currIndex > 0 && nums[currIndex] === nums[currIndex - 1]) {
        if (prevPicked) {
            currSubset.push(nums[currIndex]);
            findUniqueSubsets(nums, result, currIndex + 1, currSubset, true);
            currSubset.pop();
            findUniqueSubsets(nums, result, currIndex + 1, currSubset, false);
        }
        else {
            findUniqueSubsets(nums, result, currIndex + 1, currSubset, false);
        }
    }
    else {
        currSubset.push(nums[currIndex]);
        findUniqueSubsets(nums, result, currIndex + 1, currSubset, true);
        currSubset.pop();
        findUniqueSubsets(nums, result, currIndex + 1, currSubset, false);
    }
};

const subsetsWithDup = function (nums) {
    const result = [], currSubset = [];
    nums.sort((a, b) => {
        if (a <= b) {
            return -1;
        }
        return 1;
    });
    findUniqueSubsets(nums, result, 0, currSubset, false);
    return result;
};
