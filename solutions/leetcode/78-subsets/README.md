# [78. Subsets](https://leetcode.com/problems/subsets/)

## Solution 1 - Backtracking

```js
const helper = (arr, start, curr, result) => {
    result.push([...curr]);
    for (let i = start; i < arr.length; i++) {
        curr.push(arr[i]);
        helper(arr, i + 1, curr, result);
        curr.pop();
    }
};

const subsets = function (nums) {
    const result = [];
    helper(nums, 0, [], result);
    return result;
};
```

-   Time - `O((2^n)*n)`
-   Space - `O((2^n)*n)`
-   Where `n` is the size of the array.
