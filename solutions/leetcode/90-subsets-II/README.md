# [90. Subsets II](https://leetcode.com/problems/subsets-ii/)

```js
const helper = (arr, start, curr, result) => {
    result.push([...curr]);
    for (let i = start; i < arr.length; i++) {
        if (i === start || arr[i] !== arr[i - 1]) {
            curr.push(arr[i]);
            helper(arr, i + 1, curr, result);
            curr.pop();
        }
    }
};

const subsetsWithDup = function (nums) {
    nums.sort((first, second) => {
        if (first < second) {
            return -1;
        }
        return 1;
    });
    const result = [];
    helper(nums, 0, [], result);
    return result;
};
```

-   Time - `O((2^n)*n)`
-   Space - `O((2^n)*n)`
-   Where `n` is the size of the array.
