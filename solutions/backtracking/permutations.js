/*

Problem
https://leetcode.com/problems/permutations/

Approach
- For each index, I have p choices where p is the number of possible elements that I can pick.
- After making a choice, recursively solve the smaller sub problems.
- Backtrack, undo the choice that was made and try other choices.
- Once the current permutation is formed then store the it in the result.

Time - O(n^n)
Space - O(n)

*/

const findAllPermutations = (nums, result, currPermutation) => {

    if (currPermutation.size === nums.length) {
        result.push([...currPermutation]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (!currPermutation.has(nums[i])) {
            currPermutation.add(nums[i]);
            findAllPermutations(nums, result, currPermutation);
            currPermutation.delete(nums[i]);
        }
    }

    return;
};

const permute = function (nums) {
    const result = [], currPermutation = new Set();
    findAllPermutations(nums, result, currPermutation);
    return result;
};