/*

Backtracking

Time - O(2^n)
Space - O(n)

*/

const findUniqueSubsets = (nums, result, currIndex, currSubset, prevIncluded) => {

    if (currIndex === nums.length) {
        result.push([...currSubset]);
        return;
    }

    if (currIndex > 0 && nums[currIndex] === nums[currIndex - 1]) {
        if (prevIncluded) {
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
