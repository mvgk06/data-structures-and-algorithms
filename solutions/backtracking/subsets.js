/*

Backtracking

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