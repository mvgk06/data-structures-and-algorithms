# [46. Permutations](https://leetcode.com/problems/permutations/)

## Solution 1 - Backtracking + Hash set

```js
const helper = (arr, curr, result) => {
    if (curr.size === arr.length) {
        result.push([...curr]);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!curr.has(arr[i])) {
            curr.add(arr[i]);
            helper(arr, curr, result);
            curr.delete(arr[i]);
        }
    }
};

const permute = function (nums) {
    const curr = new Set(),
        result = [];
    helper(nums, curr, result);
    return result;
};
```

-   Time - `O(n!*n)`
-   Space - `O(n!*n)`
-   Where `n` is the size of the array.
