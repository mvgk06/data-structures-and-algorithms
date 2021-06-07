/*

Problem
https://leetcode.com/problems/permutations-ii/

Approach
- Since duplicates are present, for each index I have to pick only the unique elements from the array but still I have to pick the duplicate elements based on their
  number of occurrences inorder to get all the permutations.
- Use a map to find the occurences of elements in the array.
- For each key of the map if the count is greater than 0 then I pick the current element else I don't pick the current element.
- After making a choice, recursively solve for the smaller sub problems.
- Backtrack, undo the choice that was made and try other choices.
- Once the current permutation is formed then store the it in the result.

Time - O(n^n)
Space - O(n)

*/

const findAllUniquePermutation = (n, numsMap, currPermutation, result) => {

    if (currPermutation.length === n) {
        result.push([...currPermutation]);
        return;
    }

    for (let key of numsMap.keys()) {
        if (numsMap.get(key) > 0) {
            currPermutation.push(key);
            numsMap.set(key, numsMap.get(key) - 1);
            findAllUniquePermutation(n, numsMap, currPermutation, result);
            currPermutation.pop();
            numsMap.set(key, numsMap.get(key) + 1);
        }
    }

    return;
};

const permuteUnique = function (nums) {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {
            numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
        }
        else {
            numsMap.set(nums[i], 1);
        }
    }

    const result = [], currPermutation = [];
    findAllUniquePermutation(nums.length, numsMap, currPermutation, result);
    return result;
};