# [39. Combination Sum](https://leetcode.com/problems/combination-sum/)

## Solution 1 - Backtracking

```js
const helper = (arr, target, start, curr, result) => {
    if (target === 0) {
        result.push([...curr]);
        return;
    }
    for (let i = start; i < arr.length; i++) {
        if (arr[i] <= target) {
            curr.push(arr[i]);
            helper(arr, target - arr[i], i, curr, result);
            curr.pop();
        }
    }
};

const combinationSum = function (candidates, target) {
    const result = [];
    helper(candidates, target, 0, [], result);
    return result;
};
```

-   Time - `O((2^n)*n)`
-   Space - `O((2^n)*n)`
-   Where `n` is the size of the array.
