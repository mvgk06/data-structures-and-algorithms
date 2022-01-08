# [1. Two Sum](https://leetcode.com/problems/two-sum/)

## Solution 1 - Brute force

```js
const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
```

-   Time - `O(n^2)`
-   Space - `O(1)`
-   Where `n` is the size of the array.

## Solution 2 - Two pointers

```js
const twoSum = function (nums, target) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push([i, nums[i]]);
    }
    arr.sort((first, second) => {
        if (first[1] < second[1]) {
            return -1;
        }
        return 1;
    });
    let i = 0,
        j = arr.length - 1;
    while (i < j) {
        const sum = arr[i][1] + arr[j][1];
        if (sum === target) {
            return [arr[i][0], arr[j][0]];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
};
```

-   Time - `O(nlogn)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 3 - Hash map

```js
const twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        } else {
            map.set(nums[i], i);
        }
    }
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.
