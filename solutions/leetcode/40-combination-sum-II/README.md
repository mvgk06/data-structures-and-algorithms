# [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

## Solution 1 - Backtracking

```js
const helper = (arr, target, start, curr, result) => {
    if (target === 0) {
        result.push([...curr]);
        return;
    }
    for (let i = start; i < arr.length; i++) {
        if (i === start || arr[i] !== arr[i - 1]) {
            if (arr[i] <= target) {
                curr.push(arr[i]);
                helper(arr, target - arr[i], i + 1, curr, result);
                curr.pop();
            }
        }
    }
};

const combinationSum2 = function (candidates, target) {
    candidates.sort((first, second) => {
        if (first < second) {
            return -1;
        }
        return 1;
    });
    const result = [];
    helper(candidates, target, 0, [], result);
    return result;
};
```

-   Time - `O((2^n)*n)`
-   Space - `O((2^n)*n)`
-   Where `n` is the size of the array.
