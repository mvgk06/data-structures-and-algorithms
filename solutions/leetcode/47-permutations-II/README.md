# [47. Permutations II](https://leetcode.com/problems/permutations-ii/)

## Solution 1 - Backtracking + Hash set

```js
const helper = (arr, set, curr, result) => {
    if (curr.length === arr.length) {
        result.push([...curr]);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        const currIsNotPicked = !set.has(i),
            currIsNotDuplicate = i === 0 || !set.has(i - 1) || arr[i] !== arr[i - 1];
        if (currIsNotPicked && currIsNotDuplicate) {
            curr.push(arr[i]);
            set.add(i);
            helper(arr, set, curr, result);
            curr.pop();
            set.delete(i);
        }
    }
};

const permuteUnique = function (nums) {
    nums.sort((first, second) => {
        if (first < second) {
            return -1;
        }
        return 1;
    });
    const set = new Set(),
        result = [];
    helper(nums, set, [], result);
    return result;
};
```

-   Time - `O(n!*n)`
-   Space - `O(n!*n)`
-   Where `n` is the size of the array.
