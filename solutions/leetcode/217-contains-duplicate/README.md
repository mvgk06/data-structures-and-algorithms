# [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

## Solution 1 - Brute force

```js
const containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};
```

-   Time - `O(n^2)`
-   Space - `O(1)`
-   Where `n` is the size of the array.

## Solution 2 - Sort

```js
const containsDuplicate = function (nums) {
    nums.sort((first, second) => {
        if (first < second) {
            return -1;
        }
        return 1;
    });
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
};
```

-   Time - `O(nlogn)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 3 - Hash set

```js
const containsDuplicate = function (nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i]);
        }
    }
    return false;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.
